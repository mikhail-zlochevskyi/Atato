import registration from "../../support/page-objects/registration.page";

describe('Registration page', () => {
    const email = "test@gmail.com";
    const workspace = "worker";
    const invalidWorkspace = "@worker";
    const password = "assa6767Q!";
    const invalidPassword = "assa";
    const firstName = 'Mike';
    const lastName = 'Z';

    beforeEach(() => {
        cy.log('Visiting registration page..');
        cy.visit('/register');
    });

    it('Visit page, all major elements displayed', () => {
        // add elements visibility
    });

    it('Visit page, input valid email, first and last name, no error expected', () => {
        registration.typeFirstName(firstName);
        registration.typeLastName(lastName);
        registration.typeEmail(email);
        //add no error expected
    });

    it('Visit page, invalid workspace, error expected', () => {
        registration.typeFirstName(firstName);
        registration.typeLastName(lastName);
        registration.typeEmail(email);
        registration.typeWorkspace(invalidWorkspace);
        registration.typePassword(password);
        registration.typeConfirmPassword(password);
        registration.clickTermsAndCondsCheckbox();
        registration.clickRegister();
        registration.getInvalidWorkspace().should("be.visible");
    });

    it('Visit page, invalid password, error expected', () => {
        registration.typeFirstName(firstName);
        registration.typeLastName(lastName);
        registration.typeEmail(email);
        registration.typeWorkspace(invalidWorkspace);
        registration.typePassword(invalidPassword);
        registration.typeConfirmPassword(invalidPassword);
        registration.clickTermsAndCondsCheckbox();
        registration.clickRegister();
        registration.getInvalidPasswordPopup().should("be.visible");
    });

    it('Visit page, type all fields, terms and conditions - unchecked', () => {
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
