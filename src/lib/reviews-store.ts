import { createClient, type Client } from "@libsql/client";
import { prisma, type ReviewRecord, toPublicReview } from "./db";

export type { ReviewRecord };
export { toPublicReview };

function getTursoClient(): Client | null {
  const url = process.env.TURSO_DATABASE_URL ?? process.env.DATABASE_URL;
  if (!url || (!url.startsWith("libsql://") && !url.startsWith("https://"))) {
    return null;
  }
  return createClient({
    url,
    authToken: process.env.TURSO_AUTH_TOKEN,
  });
}

let tursoReady = false;

async function ensureTursoSchema(client: Client) {
  if (tursoReady) return;
  await client.execute(`
    CREATE TABLE IF NOT EXISTS Review (
      id TEXT PRIMARY KEY,
      name TEXT NOT NULL,
      phone TEXT NOT NULL,
      rating INTEGER NOT NULL,
      content TEXT NOT NULL,
      role TEXT,
      project TEXT,
      image TEXT,
      status TEXT NOT NULL DEFAULT 'pending',
      createdAt TEXT NOT NULL DEFAULT (datetime('now')),
      updatedAt TEXT NOT NULL DEFAULT (datetime('now'))
    )
  `);
  tursoReady = true;
}

function rowToReview(row: Record<string, unknown>): ReviewRecord {
  return {
    id: String(row.id),
    name: String(row.name),
    phone: String(row.phone),
    rating: Number(row.rating),
    content: String(row.content),
    role: row.role != null ? String(row.role) : null,
    project: row.project != null ? String(row.project) : null,
    image: row.image != null ? String(row.image) : null,
    status: String(row.status),
    createdAt: new Date(String(row.createdAt)),
  };
}

function newId() {
  return `rev_${Date.now()}_${Math.random().toString(36).slice(2, 10)}`;
}

export async function listReviews(approvedOnly: boolean): Promise<ReviewRecord[]> {
  const turso = getTursoClient();
  if (turso) {
    await ensureTursoSchema(turso);
    const sql = approvedOnly
      ? "SELECT * FROM Review WHERE status = 'approved' ORDER BY datetime(createdAt) DESC"
      : "SELECT * FROM Review ORDER BY datetime(createdAt) DESC";
    const result = await turso.execute(sql);
    return result.rows.map((r) => rowToReview(r as Record<string, unknown>));
  }

  return prisma.review.findMany({
    where: approvedOnly ? { status: "approved" } : undefined,
    orderBy: { createdAt: "desc" },
  });
}

export async function createReview(data: {
  name: string;
  phone: string;
  rating: number;
  content: string;
}): Promise<{ id: string }> {
  const turso = getTursoClient();
  if (turso) {
    await ensureTursoSchema(turso);
    const id = newId();
    const now = new Date().toISOString();
    await turso.execute({
      sql: `INSERT INTO Review (id, name, phone, rating, content, status, createdAt, updatedAt)
            VALUES (?, ?, ?, ?, ?, 'pending', ?, ?)`,
      args: [id, data.name, data.phone, data.rating, data.content, now, now],
    });
    return { id };
  }

  const review = await prisma.review.create({
    data: { ...data, status: "pending" },
  });
  return { id: review.id };
}

export async function updateReview(
  id: string,
  data: {
    status: string;
    role?: string | null;
    project?: string | null;
    image?: string | null;
  },
): Promise<ReviewRecord> {
  const turso = getTursoClient();
  if (turso) {
    await ensureTursoSchema(turso);
    const now = new Date().toISOString();
    await turso.execute({
      sql: `UPDATE Review SET status = ?, role = ?, project = ?, image = ?, updatedAt = ? WHERE id = ?`,
      args: [
        data.status,
        data.role ?? null,
        data.project ?? null,
        data.image ?? null,
        now,
        id,
      ],
    });
    const row = await turso.execute({ sql: "SELECT * FROM Review WHERE id = ?", args: [id] });
    return rowToReview(row.rows[0] as Record<string, unknown>);
  }

  return prisma.review.update({
    where: { id },
    data: {
      status: data.status,
      role: data.role,
      project: data.project,
      image: data.image,
    },
  });
}

export async function deleteReview(id: string): Promise<void> {
  const turso = getTursoClient();
  if (turso) {
    await ensureTursoSchema(turso);
    await turso.execute({ sql: "DELETE FROM Review WHERE id = ?", args: [id] });
    return;
  }

  await prisma.review.delete({ where: { id } });
}
