import registration from "../../support/page-objects/registration.page";

describe('Registration page', () => {
    const email = "test@gmail.com";
    const workspace = "worker";
    const password = "assa6767Q!";
    const firstName = 'Mike';
    const lastName = 'Z';

    it('Visit page, all major elements displayed', () => {
        cy.visit('/register');
        // registration.googleCaptcha().should("be.visible");
    });

    it('Visit page, input valid first and last name', () => {
        cy.visit('/register');
        registration.typeFirstName(firstName);
        registration.typeLastName(lastName);
        //add no error expected
    });


    it.skip('Visit page, type all fields, terms and conditions - unchecked', () => {
        cy.visit('/register');
        registration.typeFirstName(firstName);
        registration.typeLastName(lastName);
        registration.typeEmail(email);
        registration.typeWorkspace(workspace);
        registration.typePassword(password);
        registration.typeConfirmPassword(password);
        registration.clickRegister();
        registration.getTermsError().should("be.visible");
    });


    it('Visit page, type all fields, terms and conditions - checked', () => {
        cy.visit('/register');
        registration.typeFirstName(firstName);
        registration.typeLastName(lastName);
        registration.typeEmail(email);
        registration.typeWorkspace(workspace);
        registration.typePassword(password);
        registration.typeConfirmPassword(password);
        registration.clickTermsAndCondsCheckbox();
        registration.clickRegister();
    });


    it.skip('Visit page, click policy and terms', () => {
        cy.visit('/register');
        registration.clickTerms();
        registration.getHeaderTitle().should('have.text', 'Terms and conditions');
        cy.visit('/register');
        registration.clickPolicy();
    });

});
