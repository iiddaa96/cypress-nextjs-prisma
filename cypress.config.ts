import { defineConfig } from "cypress";
import { db } from "./prisma/db";

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:3100/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on("task", {
        reseed,
      });
    },
  },
});

async function reseed() {
  // NEVER ALLOW THIS OUTSIDE THE TEST ENVIRONMENT!!!
  if (process.env.NODE_ENV !== "test") return;

  // RESET
  await db.post.deleteMany({});
  // Ta bort från alla tabeller

  // SEED
  await db.post.create({
    data: {
      title: "Parfym 2.0",
      image:
        "https://images.unsplash.com/photo-1718068838055-3a8311f0e8ba?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      content: "Parfym är gott",
    },
  });
}
