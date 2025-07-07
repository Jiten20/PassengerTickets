import passengerdetailsPage from "../pageObjects/passengerDetailsPage";
describe('MY first test suite', function () {

    let details;

    before(() => {
        cy.viewport(1280, 720);
        cy.visit("https://www.cp.pt/passageiros/en/buy-tickets");
        cy.scrollTo('top');
        cy.fixture('passengerdetails').then((data) => {
            details = data;
        })
    })

    it('Book Tickets', function () {
        passengerdetailsPage.passengerForm(details);
    })
})