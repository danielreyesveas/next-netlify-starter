describe("sample test", () => {
	beforeEach(() => {
		cy.visit("/");
	});

	it("displays the resources text", () => {
		cy.get("h1").contains("Star Wars Characters");
	});
	it("renders the Netlify logo image", () => {
		cy.get("h1").contains("Star Wars Characters");
	});
});
