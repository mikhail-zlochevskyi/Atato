import login from "../../support/page-objects/login.page";

describe('Registration page', () => {
    const workspace = "worker";
    const password = "qweQWE!@#123";
    const invalidPassword = "qweQWE";
    const email = "zig-92@ya.ru";
    const invalidEmail = "zig-92@gh.ksdf";

    beforeEach(() => {
        cy.log('Visiting login for ' + workspace + ' workspace..');
        cy.visit('/workspace/' + workspace + '/login');
    });

    it('Visit login page, login fail with invalid password', () => {
        login.typeEmail(email);
        login.typePassword(invalidPassword);
        login.clickLogin();
        login.getInvalidCredsLabel().should("be.visible");
    });

    it('Visit login page, login fail with invalid email', () => {
        login.typeEmail(invalidEmail);
        login.typePassword(password);
        login.clickLogin();
        login.getInvalidCredsLabel().should("be.visible");
    });

});