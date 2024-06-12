import { db } from "./db";

async function main() {
  await db.post.deleteMany({});
  // Ta bort från alla tabeller
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
