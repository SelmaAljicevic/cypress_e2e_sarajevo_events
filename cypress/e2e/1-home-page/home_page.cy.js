/// <reference types="cypress" />

context("Home page", () => {
  beforeEach(() => {
    cy.visit("https://sarajevo-events-zavrsni-web.herokuapp.com/");
  });

  describe("Components", () => {
    it("Navbar exists", () => {
      cy.get(".navbar").should("exist");
    });

    it("Navbar contains the links", () => {
      cy.get(".navbar")
        .get(".menu-items")
        .get("a")
        .then((links) => {
          // contains 5 links
          expect(links.length).to.be.eq(5);

          // content of links
          expect(links[0].innerText).to.be.eq("Favourite Events");
          expect(links[1].innerText).to.be.eq("Events");
          expect(links[2].innerText).to.be.eq("About us");
          expect(links[3].innerText).to.be.eq("Login");
          expect(links[4].innerText).to.be.eq("Register");
        });
    });

    it("Footer exists", () => {
      cy.get(".site-footer").should("exist");
    });
  });
});
