describe("News Items", () => {
  it("Can add a create a new post", () => {
    cy.visit("/");
    cy.getByTestId("new-post").click();
    cy.url().should("contain", "/post/new");

    const newsTitle = "The new iPhone";
    const newsAuthor = "Tim Cook";
    const newsBody = "Nothing special, just a new camera. Pre-order today";
    cy.getByTestId("news-title").type(newsTitle);
    cy.getByTestId("news-author").type(newsAuthor);
    cy.getByTestId("news-body").type(newsBody);
    cy.getByTestId("submit-post").click();

    cy.location().its("pathname").should("eq", "/");
    cy.getByTestId("news-feed").should("contain.text", newsTitle);
  });

  it("Can edit a post", () => {
    cy.getByTestId("news-link").first().click();
    cy.getByTestId("edit-post").click();

    const updatedTitle = "The new iPhone (updated)";
    cy.getByTestId("news-title").find("input").clear().type(updatedTitle);
    cy.getByTestId("news-body").type(
      "Seriously, order now. Or we crash your old iPhone :)"
    );
    cy.getByTestId("submit-post").click();
    cy.url().should("not.contain", "edit");
    cy.getByTestId("post-title").should("contain.text", updatedTitle);
  });
});
