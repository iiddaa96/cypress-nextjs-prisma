describe("template spec", () => {
  beforeEach(() => {
    cy.task("reseed");
    cy.visit("/");
  });

  it("should have the brand inside an h1 tag", () => {
    // Om vi skriver så här så säkerställer
    // vi att det är en h1
    cy.get("h1").contains("Parfym blogg").should("be.visible");

    // Det gör vi inte här, spelar det någon roll?
    cy.getById("title").contains("Parfym blogg").should("be.visible");
  });

  it("should have a list of posts", () => {
    // Användaren besöker sidan och ser en header samt en lista med inlägg. Inläggen innehåller en bild, en titel. Användaren kan klicka på en post för att se mer information om den.
    cy.get(".grid").children().should("have.length", 2);

    cy.get(".grid")
      .children()
      .eq(0)
      .within(() => {
        cy.get("h4").should("be.visible").and("contain.text", "Parfym 1.0");
        cy.get("p").should("be.visible").and("contain.text", "Parfym är gott");
      });

    cy.get(".grid")
      .children()
      .eq(1)
      .within(() => {
        cy.get("h1").should("be.visible").and("contain.text", "Parfym 1.0");
        cy.get("h4").should("be.visible").and("contain.text", "Den här är bra");
      });
  });

  // Kolla om man kan ta bort en post på startsidan
  it("should be able to delete a post", () => {
    //
    cy.get(".grid").children().should("have.length.at.least", 1);
    cy.get(".grid")
      .first()
      .within(() => {
        cy.contains("Ta bort").click();
      });
    cy.wait(1000);
    cy.get(".grid").children().should("have.length", 0);
  });

  it("should be able to add a new post", () => {
    // Användaren besöker sidan och klickar på "lägg till ett nytt inlägg"-knappen och skriver in ett nytt inlägg i formuläret som visas. När användaren är klar klickar hen på spara knappen och kommer tillbaka till startsidan och ser det nya inlägget.
  });
});
