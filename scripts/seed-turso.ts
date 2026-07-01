/**
 * Seed đánh giá mẫu lên Turso (chạy 1 lần sau khi cấu hình TURSO_* trên Vercel).
 * Usage: TURSO_DATABASE_URL=... TURSO_AUTH_TOKEN=... npm run db:seed:turso
 */
import { createClient } from "@libsql/client";
import { testimonials } from "../src/lib/site";

const url = process.env.TURSO_DATABASE_URL ?? process.env.DATABASE_URL;
const token = process.env.TURSO_AUTH_TOKEN;

if (!url || (!url.startsWith("libsql://") && !url.startsWith("https://"))) {
  console.error("Set TURSO_DATABASE_URL and TURSO_AUTH_TOKEN first.");
  process.exit(1);
}

const client = createClient({ url, authToken: token });

async function main() {
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

  const count = await client.execute("SELECT COUNT(*) as c FROM Review");
  const existing = Number((count.rows[0] as unknown as { c: number }).c ?? 0);
  if (existing > 0) {
    console.log(`Turso already has ${existing} reviews — skip seed.`);
    return;
  }

  for (const t of testimonials) {
    const id = `seed_${t.id}`;
    const now = new Date().toISOString();
    await client.execute({
      sql: `INSERT INTO Review (id, name, phone, rating, content, role, project, image, status, createdAt, updatedAt)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, 'approved', ?, ?)`,
      args: [
        id,
        t.name,
        "0000000000",
        t.rating,
        t.quote,
        t.role,
        t.project,
        t.image,
        now,
        now,
      ],
    });
  }

  console.log(`Seeded ${testimonials.length} reviews to Turso.`);
}

main().catch(console.error);
