import { db } from "./db";

async function main() {
  await db.post.upsert({
    where: { id: 3 },
    update: {},
    create: {
      image:
        "https://images.unsplash.com/photo-1718068838055-3a8311f0e8ba?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Parfym 2.0",
      content: "Parfym e gott",
    },
  });
}

main()
  .then(async () => {
    await db.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await db.$disconnect();
    process.exit(1);
  });
