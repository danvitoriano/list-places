describe("test vivareal products", function() {
  context("720p resolution", function() {
    beforeEach(function() {
      cy.viewport(1280, 720);
    });
    it("visits marketplace", function() {
      cy.visit("http://localhost:3000/");
      cy.screenshot();
    });
    it("elements should be visible", function() {
      cy.get("[data-cy=vivareal]")
        .should("be.visible")
        .click();
      cy.url().should("include", "vivareal");
    });
    it("show results and player", function() {
      cy.contains("vivareal");
      cy.contains("150 results");
    });
    it("contains list first page", function() {
      cy.wait(1000);
      cy.get("[data-cy=list-container]")
        .find("> div")
        .should("have.length", 20);
      cy.get("[data-cy=7baf2775d4a2]").should("not.be.visible");
      cy.get("[data-cy=a0f9d9647551]").should("be.visible");
      cy.contains("Apartamento à Venda, 69m²");
      cy.contains("Apartamento para Locação, 193m²");
      cy.screenshot();
    });
    it("click next page", function() {
      cy.get("[data-cy=next]").click();
    });
    it("contains page 2", function() {
      cy.get("[data-cy=4620311c2b57]").should("be.visible");
      cy.contains("Apartamento à Venda, 58m²");
      cy.get("[data-cy=list-container]")
        .find("> div")
        .should("have.length", 20);
    });
    it("click last page", function() {
      cy.get("[data-cy=last]").click();
    });
    it("contains last page", function() {
      cy.get("[data-cy=37e669e0e2be]").should("be.visible");
      cy.contains("Apartamento à Venda, 57m²");
      cy.get("[data-cy=list-container]")
        .find("> div")
        .should("have.length", 10);
    });
    it("click previous page", function() {
      cy.get("[data-cy=previous]").click();
    });
    it("contains page 7", function() {
      cy.get("[data-cy=a183699219cf]").should("be.visible");
      cy.contains("Apartamento para Locação, 47m²");
      cy.get("[data-cy=list-container]")
        .find("> div")
        .should("have.length", 20);
    });
    it("click first page", function() {
      cy.get("[data-cy=first]").click();
    });
    it("contains first page", function() {
      cy.get("[data-cy=d6ef54697bcf]").should("be.visible");
      cy.contains("0 Quarto | 1 Banheiro | 36m² | 1 Vaga");
      cy.get("[data-cy=list-container]")
        .find("> div")
        .should("have.length", 20);
    });
    it("click next page", function() {
      cy.get("[data-cy=next]").click();
    });
    it("contains page 2", function() {
      cy.get("[data-cy=4620311c2b57]").should("be.visible");
      cy.contains("Apartamento à Venda, 58m²");
      cy.get("[data-cy=list-container]")
        .find("> div")
        .should("have.length", 20);
    });
    it("should have header", function() {
      cy.get("[data-cy=header]").contains("Real Estate").contains;
    });
    it("click one item", function() {
      cy.get("[data-cy=4620311c2b57]")
        .find("[data-cy=4620311c2b57-link]")
        .click();
      cy.url().should("include", "vivareal/4620311c2b57");
    });
    it("contains text", function() {
      cy.get("[data-cy=4620311c2b57]").should("be.visible");
      cy.contains("4620311c2b57");
      cy.contains("R$ 289.000");
    });
    it("contains slider", function() {
      cy.get(".slider-slides")
        .should("be.visible")
        .find("img")
        .should("have.length", 5);
    });
    it("navigate slider", function() {
      cy.get(".next").click();
      cy.wait(300);
      cy.get(".next").click();
      cy.wait(300);
      cy.get(".next").click();
      cy.wait(300);
      cy.get(".previous").click();
      cy.wait(300);
      cy.get(".previous").click();
      cy.wait(300);
      cy.get(".previous").click();
      cy.wait(300);
      cy.get(".previous").click();
      cy.screenshot();
    });
  });
  context("iphone-6 resolution", function() {
    beforeEach(function() {
      cy.viewport("iphone-6");
    });
    it("visits marketplace", function() {
      cy.visit("http://localhost:3000/");
      cy.screenshot();
    });
    it("elements should be visible", function() {
      cy.get("[data-cy=vivareal]")
        .should("be.visible")
        .click();
      cy.url().should("include", "vivareal");
    });
    it("contains list first page", function() {
      cy.wait(1000);
      cy.get("[data-cy=list-container]")
        .find("> div")
        .should("have.length", 20);
      cy.get("[data-cy=7baf2775d4a2]").should("not.be.visible");
      cy.get("[data-cy=a0f9d9647551]").should("be.visible");
      cy.contains("Apartamento à Venda, 69m²");
      cy.contains("Apartamento para Locação, 193m²");
      cy.screenshot();
    });
    it("click next page", function() {
      cy.get("[data-cy=next]").click();
    });
    it("contains page 2", function() {
      cy.get("[data-cy=4620311c2b57]").should("be.visible");
      cy.contains("Apartamento à Venda, 58m²");
      cy.get("[data-cy=list-container]")
        .find("> div")
        .should("have.length", 20);
    });
    it("should have header", function() {
      cy.get("[data-cy=header]").contains("Real Estate").contains;
    });
    it("click one item", function() {
      cy.get("[data-cy=4620311c2b57]")
        .find("[data-cy=4620311c2b57-link]")
        .click();
      cy.url().should("include", "vivareal/4620311c2b57");
    });
    it("contains text", function() {
      cy.get("[data-cy=4620311c2b57]").should("be.visible");
      cy.contains("4620311c2b57");
      cy.contains("R$ 289.000");
    });
    it("contains slider", function() {
      cy.get(".slider-slides")
        .should("be.visible")
        .find("img")
        .should("have.length", 5);
    });
    it("navigate slider", function() {
      cy.get(".next").click();
      cy.wait(300);
      cy.get(".next").click();
      cy.wait(300);
      cy.get(".next").click();
      cy.wait(300);
      cy.get(".previous").click();
      cy.wait(300);
      cy.get(".previous").click();
      cy.wait(300);
      cy.get(".previous").click();
      cy.wait(300);
      cy.get(".previous").click();
      cy.screenshot();
    });
  });
  context("ipad-2 resolution", function() {
    beforeEach(function() {
      cy.viewport("ipad-2");
    });
    it("visits marketplace", function() {
      cy.visit("http://localhost:3000/");
      cy.screenshot();
    });
    it("elements should be visible", function() {
      cy.get("[data-cy=vivareal]")
        .should("be.visible")
        .click();
      cy.url().should("include", "vivareal");
    });
    it("contains list first page", function() {
      cy.wait(1000);
      cy.get("[data-cy=list-container]")
        .find("> div")
        .should("have.length", 20);
      cy.get("[data-cy=7baf2775d4a2]").should("not.be.visible");
      cy.get("[data-cy=a0f9d9647551]").should("be.visible");
      cy.contains("Apartamento à Venda, 69m²");
      cy.contains("Apartamento para Locação, 193m²");
      cy.screenshot();
    });
    it("click next page", function() {
      cy.get("[data-cy=next]").click();
    });
    it("contains page 2", function() {
      cy.get("[data-cy=4620311c2b57]").should("be.visible");
      cy.contains("Apartamento à Venda, 58m²");
      cy.get("[data-cy=list-container]")
        .find("> div")
        .should("have.length", 20);
    });
    it("should have header", function() {
      cy.get("[data-cy=header]").contains("Real Estate").contains;
    });
    it("click one item", function() {
      cy.get("[data-cy=4620311c2b57]")
        .find("[data-cy=4620311c2b57-link]")
        .click();
      cy.url().should("include", "vivareal/4620311c2b57");
    });
    it("contains text", function() {
      cy.get("[data-cy=4620311c2b57]").should("be.visible");
      cy.contains("4620311c2b57");
      cy.contains("R$ 289.000");
    });
    it("contains slider", function() {
      cy.get(".slider-slides")
        .should("be.visible")
        .find("img")
        .should("have.length", 5);
    });
    it("navigate slider", function() {
      cy.get(".next").click();
      cy.wait(300);
      cy.get(".next").click();
      cy.wait(300);
      cy.get(".next").click();
      cy.wait(300);
      cy.get(".previous").click();
      cy.wait(300);
      cy.get(".previous").click();
      cy.wait(300);
      cy.get(".previous").click();
      cy.wait(300);
      cy.get(".previous").click();
      cy.screenshot();
    });
  });
});
