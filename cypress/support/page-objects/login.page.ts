class LoginPage {
    typeEmail(email: string) { return cy.get('#email-address').first().type(email); }
    typePassword(password: string) { return cy.get('#password').first().type(password); }

    clickLogin() { return cy.get('button[name="login-button"]').click(); }

    getInvalidCredsLabel() { return cy.get('div[data-testid="error-box"]'); }
}

export default new LoginPage;