describe("app layout and responsivness", () => {
  it("passes", () => {
    cy.visit("/");
    cy.viewport(400, 200);

    cy.dataCy("mobile-nav-fries").should("be.visible");
    cy.dataCy("mobile-nav-links").should("be.visible");

    cy.dataCy("desktop-nav-links").should("not.be.visible");

    cy.viewport(1600, 900);
    cy.dataCy("mobile-nav-fries").should("not.be.visible");
    cy.dataCy("mobile-nav-links").should("not.be.visible");

    cy.dataCy("desktop-nav-links").should("be.visible");
  });
});
