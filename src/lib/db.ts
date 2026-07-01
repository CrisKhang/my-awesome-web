import path from "path";
import { PrismaClient } from "@prisma/client";

function resolveDatabaseUrl() {
  if (process.env.DATABASE_URL) return process.env.DATABASE_URL;
  const dbFile = path.join(process.cwd(), "prisma", "dev.db");
  return `file:${dbFile.replace(/\\/g, "/")}`;
}

if (!process.env.DATABASE_URL) {
  process.env.DATABASE_URL = resolveDatabaseUrl();
}

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient | undefined };

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: process.env.NODE_ENV === "development" ? ["error", "warn"] : ["error"],
  });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

export type ReviewRecord = {
  id: string;
  name: string;
  phone: string;
  rating: number;
  content: string;
  role: string | null;
  project: string | null;
  image: string | null;
  status: string;
  createdAt: Date;
};

export function toPublicReview(review: ReviewRecord) {
  return {
    id: review.id,
    name: review.name,
    rating: review.rating as 1 | 2 | 3 | 4 | 5,
    content: review.content,
    role: review.role ?? "Khách hàng",
    project: review.project ?? "Công trình Bảo Thịnh Phát",
    image: review.image,
    createdAt: review.createdAt.toISOString(),
  };
}
