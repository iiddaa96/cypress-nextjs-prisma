describe("template spec", () => {
  it("passes", () => {
    cy.visit("/");
    cy.get("h1").contains("Welcome to my Blog").should("be.visible");
  });
});
