/// <reference types="cypress" />

context("Register", () => {
  beforeEach(() => {
    cy.clearLocalStorage().visit(
      "https://sarajevo-events-zavrsni-web.herokuapp.com/register"
    );
  });

  describe("Register", () => {
    it("user can register", () => {
      cy.get("input").get('[name="email"]').type("teste2e@gmail.com");
      cy.get("input").get('[name="password"]').type("teste2e123");
      cy.get("input").get('[name="confirmPassword"]').type("teste2e123");
      cy.get("button").click();
      cy.location("pathname").should("eq", "/");
      // await requests to finish so no request gets canceled
      cy.wait(3000);
    });
  });

  after(() => {
    cy.visit("https://sarajevo-events-zavrsni-web.herokuapp.com/user")
      .get("button")
      .contains("Delete Account")
      .click();
  });
});
