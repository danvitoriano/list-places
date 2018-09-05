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
      cy.contains("53ad37eb6177");
    });
    it("click one item", function() {
      cy.get("#7baf2775d4a2").click();
      cy.url().should("include", "zap/7baf2775d4a2");
    });
    it("contains text", function() {
      cy.contains("7baf2775d4a2");
      cy.contains("276000");
    });
  });
});
