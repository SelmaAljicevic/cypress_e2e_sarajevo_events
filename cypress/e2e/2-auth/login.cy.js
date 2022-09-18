/// <reference types="cypress" />

context("Login", () => {
  beforeEach(() => {
    cy.clearLocalStorage().visit(
      "https://sarajevo-events-zavrsni-web.herokuapp.com/login"
    );
  });

  describe("Login", () => {
    it("user can login", () => {
      cy.get("input").get('[name="email"]').type("aa@gmail.com");
      cy.get("input").get('[name="password"]').type("test123");
      cy.get("button").click();
      cy.location("pathname").should("eq", "/");
    });
  });

  afterEach(() => {
    cy.get(".navbar").get("button").contains("Logout").click();
  });
});
