describe("app layout and responsivness", () => {
  it("passes", () => {
    cy.visit("/");
    cy.viewport(400, 200);
  });
});
