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
        cy.get("h3").should("be.visible").and("contain.text", "Armani");
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

    cy.get("h1").should("be.visible").and("contain.text", "Armani");
    cy.get("h4")
      .should("be.visible")
      .and(
        "contain.text",
        "En perfekt lyxig gåva till någon du älskar. Denna kvinnliga doft kombinerar tre doftnoter: svartvinbärsnektar, modern chypre samt vit mysk med trätoner och inslag av fresia och majorrosdoft. Flaskan symboliserar kvinnlig reflektion, motsatsen mellan styrka och lätthet där transparens, svart densitet och ljus ros balanserar i perfekt harmoni. Denna parfym har skapats för den moderna kvinnan som är stark och feminin, sofistikerad samt karismatisk."
      );
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
      "https://wwd.com/wp-content/uploads/2021/12/best-perfumes.jpg";

    cy.get("header").contains("Add Post").click();
    cy.url().should("include", "/form");

    cy.get("input[name='image']").type(imageUrl);
    cy.get("input[name='title']").type("Test, Ny Parfym");
    cy.get("textarea[name='content']").type("Test, Beskrivning av ny parfym");
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
