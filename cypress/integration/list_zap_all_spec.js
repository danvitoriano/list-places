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
    it("contains list first page", function() {
      cy.wait(1000);
      cy.get("[data-cy=list-container]")
        .find("a")
        .should("have.length", 20);
      cy.get("[data-cy=7baf2775d4a2]").should("not.be.visible");
      cy.get("[data-cy=a0f9d9647551]").should("not.be.visible");
      cy.contains("fed26dbe5881");
      cy.contains("3e1b5315da17");
    });
    it("click next page", function() {
      cy.get("[data-cy=next]").click();
    });
    it("contains page 2", function() {
      cy.get("[data-cy=b154e19dcf71]").should("not.be.visible");
      cy.contains("45e188400618");
      cy.get("[data-cy=list-container]")
        .find("a")
        .should("have.length", 20);
    });
    it("click last page", function() {
      cy.get("[data-cy=last]").click();
    });
    it("contains last page", function() {
      cy.get("[data-cy=c8bcd9880342]").should("be.visible");
      cy.contains("3a1de7365c7b");
      cy.get("[data-cy=list-container]")
        .find("a")
        .should("have.length", 20);
    });
    it("click previous page", function() {
      cy.get("[data-cy=previous]").click();
    });
    it("contains page 19", function() {
      cy.get("[data-cy=5d63d877585f]").should("be.visible");
      cy.contains("ff064a715bad");
      cy.get("[data-cy=list-container]")
        .find("a")
        .should("have.length", 20);
    });
    it("click first page", function() {
      cy.get("[data-cy=first]").click();
    });
    it("contains first page", function() {
      cy.get("[data-cy=7baf2775d4a2]").should("not.be.visible");
      cy.contains("3e1b5315da17");
      cy.get("[data-cy=list-container]")
        .find("a")
        .should("have.length", 20);
    });
    it("click next page", function() {
      cy.get("[data-cy=next]").click();
    });
    it("contains page 2", function() {
      cy.get("[data-cy=b154e19dcf71]").should("not.be.visible");
      cy.contains("45e188400618");
      cy.get("[data-cy=list-container]")
        .find("a")
        .should("have.length", 20);
    });
    it("click one item", function() {
      cy.get("[data-cy=168c4f8d0a2e]").click();
      cy.url().should("include", "zap/168c4f8d0a2e");
    });
    it("contains text", function() {
      cy.get("[data-cy=b154e19dcf71]").should("not.be.visible");
      cy.contains("168c4f8d0a2e");
      cy.contains("900000");
    });
    it("contains slider", function() {
      cy.get("#slider-slides")
        .should("be.visible")
        .find("img")
        .should("have.length", 5);
    });
    it("navigate slider", function() {
      cy.get("#next").click();
      cy.wait(300);
      cy.get("#next").click();
      cy.wait(300);
      cy.get("#next").click();
      cy.wait(300);
      cy.get("#previous").click();
      cy.wait(300);
      cy.get("#previous").click();
      cy.wait(300);
      cy.get("#previous").click();
      cy.wait(300);
      cy.get("#previous").click();
    });
  });
});
