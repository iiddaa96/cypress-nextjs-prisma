describe("template spec", () => {
  beforeEach(() => {
    cy.task("reseed");
    cy.visit("/");
  });

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

    const imageUrl =
      "https://images.unsplash.com/photo-1572246538688-3f326dca3951?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    cy.get("header").contains("Add Post").click();
    cy.url().should("include", "/form");

    cy.get("input[name='image']").type(imageUrl);
    cy.get("input[name='title']").type("Test, Ny Parfym");
    cy.get("input[name='content']").type("Test, Beskrivning av ny parfym");
    // cy.get("[data-cy='image-input']").type("ny-parfym.jpg");

    cy.contains("Spara").click();

    cy.url().should("not.include", "/form");
    cy.get(".grid").children().should("have.length", 3);
    cy.get(".grid")
      .children()
      .last()
      .within(() => {
        cy.get("img").should("be.visible").and("have.attr", "src", imageUrl);
        cy.get("h3")
          .should("be.visible")
          .and("contain.text", "Test, Ny Parfym");
      });
  });
});
