import compareStrings from "../../src/utils/compare-strings";

describe("News Feed", () => {
  it("Can search by title", () => {
    cy.visit("/");
    const searchString = "mod";
    cy.getByTestId("search-input").type(searchString);
    cy.getByTestId("news-link").first().should("contain.text", searchString);
  });

  it("Can search by author", () => {
    cy.getByTestId("search-key-dropdown").click();
    cy.getByTestId("search-key-dropdown-menu")
      .find('input[value="author"]')
      .check();

    const searchString = "ol";
    cy.getByTestId("search-input").clear().type(searchString);
    cy.getByTestId("news-author").first().should("contain.text", searchString);
  });

  it("Can search by body", () => {
    cy.getByTestId("search-key-dropdown").click();
    cy.getByTestId("search-key-dropdown-menu")
      .find('input[value="body"]')
      .check();

    const searchString = "null";
    cy.getByTestId("search-input").clear().type(searchString);
    cy.getByTestId("news-body").first().should("contain.text", searchString);
  });

  it("Can sort by ascending order", () => {
    cy.getByTestId("sort-dropdown").click();
    cy.getByTestId("sort-dropdown-menu").find('input[value="asc"]').check();
    cy.getByTestId("news-body").then(($el) => {
      const firstPost = $el[0];
      const lastPost = $el[$el.length - 1];
      const position = compareStrings(
        firstPost.textContent,
        lastPost.textContent
      ); // should be -1 or 0
      cy.wrap(position).should("be.lessThan", 1);
    });
  });

  it("Can sort by descending order", () => {
    cy.getByTestId("sort-dropdown-menu").find('input[value="desc"]').check();
    cy.getByTestId("news-body").then(($el) => {
      const firstPost = $el[0];
      const lastPost = $el[$el.length - 1];
      const position = compareStrings(
        firstPost.textContent,
        lastPost.textContent
      ); // should be 0 or 1
      cy.wrap(position).should("be.greaterThan", -1);
    });
  });
});
