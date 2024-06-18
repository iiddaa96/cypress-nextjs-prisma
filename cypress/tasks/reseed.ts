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
      title: "Armani",
      image:
        "https://image-resizing.booztcdn.com/giorgio-armani/gail4390300_cnocolorcode_12.webp?has_grey=0&has_webp=0&dpr=2.5&size=w400",
      content:
        "En perfekt lyxig gåva till någon du älskar. Denna kvinnliga doft kombinerar tre doftnoter: svartvinbärsnektar, modern chypre samt vit mysk med trätoner och inslag av fresia och majorrosdoft. Flaskan symboliserar kvinnlig reflektion, motsatsen mellan styrka och lätthet där transparens, svart densitet och ljus ros balanserar i perfekt harmoni. Denna parfym har skapats för den moderna kvinnan som är stark och feminin, sofistikerad samt karismatisk.",
    },
  });
  await db.post.upsert({
    where: { id: 2 },
    update: {},
    create: {
      title: "Parfym 2.0",
      image:
        "https://images.unsplash.com/photo-1589493676751-8f4a014d95e5?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      content: "Det här är bra",
    },
  });

  return null;
}
