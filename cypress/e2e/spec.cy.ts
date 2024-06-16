describe("template spec", () => {
  beforeEach(() => {
    cy.task("reseed");
  });

  it("should have the brand inside an h1 tag", () => {
    cy.visit("/");
    // Om vi skriver så här så säkerställer
    // vi att det är en h1
    cy.get("h1").contains("Parfym blogg").should("be.visible");

    // Det gör vi inte här, spelar det någon roll?
    cy.getById("title").contains("Parfym blogg").should("be.visible");
  });

  // Kollar att det finns en lista med posts
  it("should have a list of posts", () => {
    cy.visit("/");
    cy.get(".grid").children().should("have.length", 1);
  });
});
