describe("template spec", () => {
  beforeEach(() => {
    cy.task("reseed");
    // cy.visit("/");
  });

  // Kollar om sidan laddas
  it("passes", () => {
    cy.visit("/");
    cy.get("h1").contains("Welcome to my Blog").should("be.visible");
  });

  // Kollar om det går att ta bort ett inlägg
  it("removes a post", () => {
    cy.visit("/");
    cy.get("h1").contains("Welcome to my Blog").should("be.visible");
  });

  // Kollar om det går att ta bort ett inlägg
  it("adds a post", () => {
    cy.visit("/");
    cy.get("h1").contains("Welcome to my Blog").should("be.visible");
  });
});
