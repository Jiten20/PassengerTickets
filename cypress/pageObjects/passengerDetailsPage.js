class passengerdetailsPage {

    from = 'input[name="textBoxPartida"]';
    to = 'input[title="To "]';
    clearDeprtureDate = '#datepicker-first:nth-child(1)';
    clearReturnDate = '#datepicker-second[title="Return date"]';
    departDate = '#datepicker-first_table > tbody > tr:nth-child(2) > td:nth-child(4) > div';
    returnDate = '#datepicker-second_table > tbody > tr:nth-child(2) > td:nth-child(6) > div';
    submitDetails = 'input[type="submit"]';
    cancelDetails = 'input[value="X Cancel"]';

    passengerForm(details) {
        cy.get(this.from).clear().type(details.from);
        cy.contains(details.from).click({force: true});
        cy.get(this.to).clear().type(details.to);
        cy.contains(details.to).click({force: true});
        cy.get(this.clearDeprtureDate).clear();
        cy.get(this.departDate).click();
        cy.get(this.clearReturnDate).clear();
        cy.get(this.returnDate).click();
        cy.get(this.submitDetails).click();
        cy.scrollTo('bottom');
        cy.get(this.cancelDetails).click();

        cy.get(this.from).should('have.value', details.from);
        cy.get(this.to).should('have.value', details.to);
        cy.get(this.clearDeprtureDate).should('have.value', details.departureDate);
         cy.get(this.clearReturnDate).should('have.value', details.returnDate);
    }

}
module.exports = new passengerdetailsPage();