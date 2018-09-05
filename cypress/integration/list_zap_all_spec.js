describe("test list all products", function() {
  context("720p resolution", function() {
    beforeEach(function() {
      cy.viewport(1280, 720);
    });
    it("visits marketplace", function() {
      cy.visit("http://localhost:3000/");
    });
    it("elements should be visible", function() {
      cy.get("#zap")
        .should("be.visible")
        .click();
      cy.url().should("include", "zap");
    });
    it("contains list", function() {
      cy.wait(1000);
      cy.contains("7baf2775d4a2");
      cy.contains("3e1b5315da17");
    });
    it("click next page", function() {
      cy.get("[data-cy=next]").click();
    });
    it("contains page 2", function() {
      cy.contains("8a1192bf3d10");
    });
    it("click last page", function() {
      cy.get("[data-cy=last]").click();
    });
    it("contains last page", function() {
      cy.contains("f9200ab0c5a4");
    });
    it("click previous page", function() {
      cy.get("[data-cy=previous]").click();
    });
    it("contains page 19", function() {
      cy.contains("f88ae7379d25");
    });
    it("click first page", function() {
      cy.get("[data-cy=first]").click();
    });
    it("contains first page", function() {
      cy.contains("7baf2775d4a2");
      cy.contains("3e1b5315da17");
    });
    it("click next page", function() {
      cy.get("[data-cy=next]").click();
    });
    it("contains page 2", function() {
      cy.contains("8a1192bf3d10");
    });
    it("click one item", function() {
      cy.get("[data-cy=8a1192bf3d10]").click();
      cy.url().should("include", "zap/8a1192bf3d10");
    });
    it("contains text", function() {
      cy.contains("8a1192bf3d10");
      cy.contains("4320");
    });
  });
});
