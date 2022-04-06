class RegistrationPage {
    typeEmail(email: string) { return cy.get('#email').first().type(email); }
    typeFirstName(firstName: string) { return cy.get('#firstname').first().type(firstName); }
    typeLastName(lastName: string) { return cy.get('#lastname').first().type(lastName); }
    typeWorkspace(workspace: string) { return cy.get('#workspace').first().type(workspace); }
    typePassword(password: string) { return cy.get('#popover-trigger-10').first().type(password); }
    typeConfirmPassword(confirmPassword: string) { return cy.get('#popover-trigger-12').first().type(confirmPassword); }
    
    clickTermsAndCondsCheckbox() { return cy.get('.chakra-checkbox').click(); }
    clickRegister() { return cy.get('button[name="register-button"]').click(); }
    clickTerms() { return cy.get('a[data-testid="terms"]').click(); }
    clickPolicy() { return cy.get('a[data-testid="policy"]').click(); }
    
    getTermsError() { return cy.get('p[data-testid="terms-error"]'); }
    getHeaderTitle() { return cy.get('h1.elementor-heading-title'); }

    googleCaptcha() { return cy.get('.grecaptcha-logo'); }
}

export default new RegistrationPage;