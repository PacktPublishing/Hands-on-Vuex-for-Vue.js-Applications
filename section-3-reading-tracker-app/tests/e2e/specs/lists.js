import mockData from "../../mockData";

describe("Lists", () => {
  before(() => {
    cy.visit("/");
    cy.register();
    cy.login();
    cy.navigate("/lists");
  });

  it("Create list", () => {
    cy.get("input[placeholder=Name]").type(mockData.TEST_LIST.name);
    cy.get("input[placeholder=Description]").type(
      mockData.TEST_LIST.description
    );
    cy.get("button")
      .contains("Add")
      .click();

    // Re-login
    cy.visit("/");
    cy.login();
    cy.navigate("/lists");

    cy.contains("h1", "Lists")
      .parent()
      .find(".columns")
      .should("have.length", 2)
      .find("a")
      .should("contain", mockData.TEST_LIST.name);
  });
});
