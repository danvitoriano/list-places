describe("test zap products", function() {
  context("720p resolution", function() {
    beforeEach(function() {
      cy.viewport(1280, 720);
    });
    it("visits marketplace", function() {
      cy.visit("http://localhost:3000/");
      cy.screenshot();
    });
    it("elements should be visible", function() {
      cy.get("[data-cy=zap]")
        .should("be.visible")
        .click();
      cy.url().should("include", "zap");
    });
    it("show results and player", function() {
      cy.contains("zap");
      cy.contains("271 results");
    });
    it("contains list first page", function() {
      cy.wait(1000);
      cy.get("[data-cy=list-container]")
        .find("> div")
        .should("have.length", 20);
      cy.get("[data-cy=7baf2775d4a2]").should("not.be.visible");
      cy.get("[data-cy=a0f9d9647551]").should("not.be.visible");
      cy.contains("Apartamento para Locação, 77m²");
      cy.contains("Apartamento para Locação, 245m²");
      cy.screenshot();
    });
    it("click next page", function() {
      cy.get("[data-cy=next]").click();
    });
    it("contains page 2", function() {
      cy.get("[data-cy=b154e19dcf71]").should("not.be.visible");
      cy.contains("Apartamento à Venda, 150m²");
      cy.get("[data-cy=list-container]")
        .find("> div")
        .should("have.length", 20);
    });
    it("click last page", function() {
      cy.get("[data-cy=last]").click();
    });
    it("contains last page", function() {
      cy.get("[data-cy=53ad37eb6177]").should("be.visible");
      cy.contains("Apartamento à Venda, 360m²");
      cy.get("[data-cy=list-container]")
        .find("> div")
        .should("have.length", 11);
    });
    it("click previous page", function() {
      cy.get("[data-cy=previous]").click();
    });
    it("contains page 13", function() {
      cy.get("[data-cy=d1f7028e8df7]").should("be.visible");
      cy.contains("Apartamento para Locação, 230m²");
      cy.get("[data-cy=list-container]")
        .find("> div")
        .should("have.length", 20);
    });
    it("click first page", function() {
      cy.get("[data-cy=first]").click();
    });
    it("contains first page", function() {
      cy.get("[data-cy=6d71ff5a18b9]").should("be.visible");
      cy.contains("0 Quarto | 2 Banheiros | 245m² | 5 Vagas");
      cy.get("[data-cy=list-container]")
        .find("> div")
        .should("have.length", 20);
    });
    it("click next page", function() {
      cy.get("[data-cy=next]").click();
    });
    it("contains page 2", function() {
      cy.get("[data-cy=b154e19dcf71]").should("not.be.visible");
      cy.contains("Apartamento à Venda, 150m²");
      cy.get("[data-cy=list-container]")
        .find("> div")
        .should("have.length", 20);
    });
    it("should have header", function() {
      cy.get("[data-cy=header]").contains("Real Estate").contains;
    });
    it("click one item", function() {
      cy.get("[data-cy=168c4f8d0a2e]")
        .find("[data-cy=168c4f8d0a2e-link]")
        .click();
      cy.url().should("include", "zap/168c4f8d0a2e");
    });
    it("contains text", function() {
      cy.get("[data-cy=b154e19dcf71]").should("not.be.visible");
      cy.contains("168c4f8d0a2e");
      cy.contains("R$ 900.000");
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
      cy.get("[data-cy=zap]")
        .should("be.visible")
        .click();
      cy.url().should("include", "zap");
    });
    it("contains list first page", function() {
      cy.wait(1000);
      cy.get("[data-cy=list-container]")
        .find("> div")
        .should("have.length", 20);
      cy.get("[data-cy=7baf2775d4a2]").should("not.be.visible");
      cy.get("[data-cy=a0f9d9647551]").should("not.be.visible");
      cy.contains("Apartamento para Locação, 77m²");
      cy.contains("Apartamento para Locação, 245m²");
      cy.screenshot();
    });
    it("click next page", function() {
      cy.get("[data-cy=next]").click();
    });
    it("contains page 2", function() {
      cy.get("[data-cy=b154e19dcf71]").should("not.be.visible");
      cy.contains("Apartamento à Venda, 150m²");
      cy.get("[data-cy=list-container]")
        .find("> div")
        .should("have.length", 20);
    });
    it("should have header", function() {
      cy.get("[data-cy=header]").contains("Real Estate").contains;
    });
    it("click one item", function() {
      cy.get("[data-cy=168c4f8d0a2e]")
        .find("[data-cy=168c4f8d0a2e-link]")
        .click();
      cy.url().should("include", "zap/168c4f8d0a2e");
    });
    it("contains text", function() {
      cy.get("[data-cy=b154e19dcf71]").should("not.be.visible");
      cy.contains("168c4f8d0a2e");
      cy.contains("R$ 900.000");
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
      cy.get("[data-cy=zap]")
        .should("be.visible")
        .click();
      cy.url().should("include", "zap");
    });
    it("contains list first page", function() {
      cy.wait(1000);
      cy.get("[data-cy=list-container]")
        .find("> div")
        .should("have.length", 20);
      cy.get("[data-cy=7baf2775d4a2]").should("not.be.visible");
      cy.get("[data-cy=a0f9d9647551]").should("not.be.visible");
      cy.contains("Apartamento para Locação, 77m²");
      cy.contains("Apartamento para Locação, 245m²");
      cy.screenshot();
    });
    it("click next page", function() {
      cy.get("[data-cy=next]").click();
    });
    it("contains page 2", function() {
      cy.get("[data-cy=b154e19dcf71]").should("not.be.visible");
      cy.contains("Apartamento à Venda, 150m²");
      cy.get("[data-cy=list-container]")
        .find("> div")
        .should("have.length", 20);
    });
    it("should have header", function() {
      cy.get("[data-cy=header]").contains("Real Estate").contains;
    });
    it("click one item", function() {
      cy.get("[data-cy=168c4f8d0a2e]")
        .find("[data-cy=168c4f8d0a2e-link]")
        .click();
      cy.url().should("include", "zap/168c4f8d0a2e");
    });
    it("contains text", function() {
      cy.get("[data-cy=b154e19dcf71]").should("not.be.visible");
      cy.contains("168c4f8d0a2e");
      cy.contains("R$ 900.000");
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
