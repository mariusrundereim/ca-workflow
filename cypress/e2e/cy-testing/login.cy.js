const email = "pertore55@stud.noroff.no";
const pw = "pertore-55";

const wrongEmail = "petore55@gmail.com";
const wrongPass = "pertore-5050";

describe("Wrong auth login", () => {
  beforeEach(() => {
    cy.visit("index.html");
    cy.clearLocalStorage();
    cy.get("#registerModal button").contains("Login").should("be.visible");
    cy.get("#registerModal button").contains("Login").click();
    cy.wait(600);
    cy.get("#registerModal button").contains("Close").should("be.visible");
    cy.get("#registerModal button").contains("Close").click();
    cy.wait(600);
    cy.get("#loginForm input[type='email']")
      .should("exist")
      .type(wrongEmail, { delay: 50 });
    cy.get("#loginForm input[type='password']")
      .should("exist")
      .type(wrongPass, { delay: 50 });
    cy.get("#loginModal button").contains("Login").should("be.visible").click();
    cy.wait(600);
  });

  it("Does not login", () => {
    expect(localStorage.getItem("token")).to.be.null;
  });
});

describe("Test with correct Authentication", () => {
  beforeEach(() => {
    cy.visit("index.html");
    cy.clearLocalStorage();
    cy.get("#registerModal button")
      .contains("Login")
      .should("be.visible")
      .click();
    cy.wait(500);
    cy.get("#registerModal button")
      .contains("Close")
      .should("be.visible")
      .click();
    cy.wait(500);
    cy.get("#loginForm input[type='email']")
      .should("exist")
      .type(email, { delay: 50 });
    cy.get("#loginForm input[type='password']")
      .should("exist")
      .type(pw, { delay: 50 });
    cy.get("#loginModal button").contains("Login").should("be.visible").click();
    cy.wait(2000);
  });

  it("Can login", () => {
    expect(localStorage.getItem("token")).to.not.be.null;
  });
});
