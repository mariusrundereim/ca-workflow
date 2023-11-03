describe("User profile access", () => {
  it("can login and access the user profile", () => {
    cy.visit("index.html");
    cy.wait(500);
    cy.get("#loginBtn").click();
    cy.get("input#loginEmail").type("eivindalex@noroff.no", { delay: 0 });
    cy.get("input#loginPassword").type("asdf1234", { delay: 0 });
    cy.get("#enterBtn").click();
    cy.wait(500);
    cy.get("h4").contains("h");
    cy.get("#logoutBtn").click();
    cy.wait(500);
    cy.get("#loginBtn").click();
    cy.get("input#loginEmail").type("fail@fail.no", { delay: 0 });
    cy.get("input#loginPassword").type("fail", { delay: 0 });
    cy.get("#enterBtn").click();
  });
});
