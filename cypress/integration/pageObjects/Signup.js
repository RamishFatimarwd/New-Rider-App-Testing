class signup {
    signup() {
        return cy.get('[data-cy="nav-signup-link"]')
    }
    firstname() {
        return cy.get('[data-cy="first-name"]')
    }
    lastname() {
        return cy.get('[data-cy="last-name"]')
    }
    email() {
        return cy.get('[data-cy="email"]')
    }
    password() {
        return cy.get('[data-cy="password"]')
    }
    phone() {
        return cy.get('[data-cy="phone"]')
    }
    Create_account_btn() {
        return cy.get('[data-cy="submit-btn"]')
    }
    employee() {
        return cy.get('input')
    }
    save_btn() {
        return cy.get('#submit-btn')
    }
    save_address_btn() {
        return cy.get('#update-btn')
    }

    logout_btn() {
        return cy.get('[data-cy="nav-logout-link"]')
    }
    login_btn() {
        return cy.get('[data-cy="nav-login-link"]')
    }
    submit_btn() {
        return cy.get('[data-cy="submit-btn"]')
    }
    membership_conexxus_btn() {
        return cy.get('[data-cy="306-input"]')
    }
    membership_starcare_btn() {
        return cy.get('[data-cy="307-input"]')
    }
    address() {
        return cy.get('#type-address > .sc-cOigif > .sc-pNWxx > .sc-jrsJCI > .sc-kEqYlL')
    }
    close_popup_btn() {
        return cy.get('[data-cy="close-btn"] > .sc-gtssRu > .sc-bXevSJ')
    }

    visit_homepage_and_close_popup() {
        cy.visit('/')
        return cy.get('body').then((body) => {
            if (body.find('[data-cy="close-btn"] > .sc-gtssRu > .sc-bXevSJ').length > 0) {
                cy.get('[data-cy="close-btn"] > .sc-gtssRu > .sc-bXevSJ').scrollIntoView().click({ force: true });
                // cy.wait(4000)
            }
        });

        //  return this.popup_cancel_btn().click()
    }
}
export default signup