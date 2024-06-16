import { db } from "../../prisma/db";

export async function reseed() {
  // NEVER ALLOW THIS OUTSIDE THE TEST ENVIRONMENT!!!
  if (process.env.NODE_ENV !== "test") return;

  // ============= RESET ============= //
  await db.post.deleteMany({});
  // Ta bort från alla tabeller

  // ============== SEED ============= //
  await db.post.upsert({
    where: { id: 1 },
    update: {},
    create: {
      title: "Parfym 2.0",
      image:
        "https://images.unsplash.com/photo-1718068838055-3a8311f0e8ba?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      content: "Parfym är gott",
    },
  });

  return null;
}
