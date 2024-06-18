describe("template spec", () => {
  beforeEach(() => {
    cy.task("reseed");
    cy.visit("/");
  });

  // it("should have the brand inside an h1 tag", () => {
  //   // Om vi skriver så här så säkerställer
  //   // vi att det är en h1
  //   cy.get("h1").contains("Parfym blogg").should("be.visible");

  //   // Det gör vi inte här, spelar det någon roll?
  //   cy.getById("title").contains("Parfym blogg").should("be.visible");
  // });

  it("should have a list of posts", () => {
    // Användaren besöker sidan och ser en header samt en lista med inlägg. Inläggen innehåller en bild, en titel. Användaren kan klicka på en post för att se mer information om den.
    cy.get("header").should("exist").and("be.visible");

    cy.get(".grid").children().should("have.length", 2);
    cy.get(".grid")
      .children()
      .eq(0)
      .within(() => {
        cy.get("h3").should("be.visible").and("contain.text", "Parfym 1.0");
      });
    cy.get(".grid")
      .children()
      .eq(1)
      .within(() => {
        cy.get("h3").should("be.visible").and("contain.text", "Parfym 2.0");
      });
  });

  it("should be able to delete a post", () => {
    // Användaren besöker sidan och ser en lista med inlägg. Användaren klickar på en "ta bort"-knapp på en post och posten tas bort från sidan.
    cy.get(".grid").children().should("have.length.at.least", 1);
    cy.get(".grid")
      .first()
      .within(() => {
        cy.contains("Ta bort").click();
      });
    cy.wait(1000);
    cy.get(".grid").children().should("have.length", 1);
  });

  it("should be able to add a new post", () => {
    // Användaren besöker sidan och klickar på "lägg till ett nytt inlägg"-knappen och skriver in ett nytt inlägg i formuläret som visas. När användaren är klar klickar hen på spara knappen och kommer tillbaka till startsidan och ser det nya inlägget.

    cy.get("header").contains("add post").should("be.visible");
    cy.get("header").contains("add post").click();
    cy.url().should("include", "/form");

    cy.url().should("not.include", "/");
    cy.get("#title-input").type("Ny Parfym");
    cy.get("#content-input").type("Beskrivning av ny parfym");
    cy.get("#image-input").type("ny-parfym.jpg");

    cy.contains("Spara").click();

    // cy.url().should("not.include", "/add-post");
    cy.get(".grid").children().should("have.length", 3);
    cy.get(".grid")
      .children()
      .last()
      .within(() => {
        cy.get("img")
          .should("be.visible")
          .and("have.attr", "src")
          .and((src) => {
            // Kollar att src är en giltig URL
            expect(src).to.match(/^https?:\/\/.+/);
          });
        cy.get("h1").should("be.visible").and("contain.text", "Ny Parfym");
      });
  });

  it("Should see content for one post", () => {
    // Användaren klickar in sig på en post och ser en bild, en titel och en beskrivning av posten.
    cy.get(".grid").children().first().click();

    cy.get("img")
      .should("be.visible")
      .and("have.attr", "src")
      .and((src) => {
        expect(src).to.match(/^https?:\/\/.+/);
      });

    cy.get("h1").should("be.visible").and("contain.text", "Parfym 1.0");
    cy.get("h4").should("be.visible").and("contain.text", "Parfym är gott");
  });
});
