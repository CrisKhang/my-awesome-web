import { PrismaClient } from "@prisma/client";
import { testimonials } from "../src/lib/site";

const prisma = new PrismaClient();

async function main() {
  const count = await prisma.review.count();
  if (count > 0) {
    console.log(`Database already has ${count} reviews — skip seed.`);
    return;
  }

  for (const t of testimonials) {
    await prisma.review.create({
      data: {
        name: t.name,
        phone: "0000000000",
        rating: t.rating,
        content: t.quote,
        role: t.role,
        project: t.project,
        image: t.image,
        status: "approved",
      },
    });
  }

  console.log(`Seeded ${testimonials.length} approved reviews.`);
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
