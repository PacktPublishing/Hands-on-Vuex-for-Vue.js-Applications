import mockData from "../../mockData";

describe("User login/logout/register", () => {
  it("Registers new user", () => {
    cy.visit("/adduser");
    cy.contains("h1", "Add User");

    cy.get("label")
      .contains("Name")
      .parent()
      .find("input")
      .type(mockData.NEW_USER.name);
    cy.get("label")
      .contains("Bio")
      .parent()
      .find("textarea")
      .type(mockData.NEW_USER.bio);
    cy.get("label")
      .contains("Email Address")
      .parent()
      .find("input[type=email]")
      .type(mockData.NEW_USER.email);
    cy.get("label")
      .contains("Password")
      .parent()
      .find("input[type=password]")
      .type(mockData.NEW_USER.password);
    cy.get("button")
      .contains("Add")
      .click();

    cy.url().should("include", "/books");
  });

  it("Logs into a new account", () => {
    cy.visit("/");
    cy.contains("h1", "Login");

    cy.get("input[type=email]").type(mockData.NEW_USER.email);
    cy.get("input[type=password]").type(mockData.NEW_USER.password);
    cy.get("button")
      .contains("Login")
      .click();

    cy.url().should("include", "/books");
  });

  it("Doesn't allow access with incorrect password", () => {
    cy.visit("/");
    cy.contains("h1", "Login");

    cy.get("input[type=email]").type(mockData.NEW_USER.email);
    cy.get("input[type=password]").type("WRONG PASSWORD");
    cy.get("button")
      .contains("Login")
      .click();

    cy.url().should("not.include", "/books");
  });
});
