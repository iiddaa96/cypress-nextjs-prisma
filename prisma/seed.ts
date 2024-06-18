import { db } from "./db";

async function main() {
  await db.post.upsert({
    where: { id: 3 },
    update: {},
    create: {
      image:
        "https://image-resizing.booztcdn.com/giorgio-armani/gail4390300_cnocolorcode_12.webp?has_grey=0&has_webp=0&dpr=2.5&size=w400",
      title: "Armani",
      content:
        "En perfekt lyxig gåva till någon du älskar. Denna kvinnliga doft kombinerar tre doftnoter: svartvinbärsnektar, modern chypre samt vit mysk med trätoner och inslag av fresia och majorrosdoft. Flaskan symboliserar kvinnlig reflektion, motsatsen mellan styrka och lätthet där transparens, svart densitet och ljus ros balanserar i perfekt harmoni. Denna parfym har skapats för den moderna kvinnan som är stark och feminin, sofistikerad samt karismatisk.",
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
