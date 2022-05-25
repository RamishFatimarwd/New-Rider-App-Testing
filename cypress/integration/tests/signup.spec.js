/// <reference types="cypress" />
import signup from '../pageObjects/Signup'
//generate new unique id to use in test
const unique_id = Math.floor(Math.random() * 999999);
const unique_id1 = Math.floor(Math.random() * 999999);
const newUserEmailConnexus = "ridewithsharetest+" + unique_id + "@gmail.com"
const newUserEmailStarcare = "ridewithsharetest+" + unique_id1 + "@gmail.com"
beforeEach(() => {

    cy.fixture('config').as('config')
})


describe('signup-test cases', () => {
    const register = new signup()

    it("Verify user is not able to signup if first name not provided", function () {
        register.visit_homepage_and_close_popup()
        cy.get('body').then((body) => {
            if (body.find('[data-cy="close-btn"] > .sc-gtssRu > .sc-bXevSJ').length > 0) {
                land.close_popup_btn().click()
                cy.wait(2000)
            }
        });
        cy.wait(3000)
        register.signup().click()
        register.lastname().type(this.config.lastname)
        register.email().type(this.config.email)
        register.password().type(this.config.password)
        register.phone().type(this.config.phone)
        register.Create_account_btn().click()
        cy.contains("First name is required")
        cy.wait(3000)
    })

    it("Verify user is not able to signup if last name not provided", function () {
        register.visit_homepage_and_close_popup()
        cy.get('body').then((body) => {
            if (body.find('[data-cy="close-btn"] > .sc-gtssRu > .sc-bXevSJ').length > 0) {
                land.close_popup_btn().click()
                cy.wait(2000)
            }
        });
        cy.wait(3000)

        register.signup().click()
        register.firstname().type(this.config.firstname)
        register.email().type(this.config.email)
        register.password().type(this.config.password)
        register.phone().type(this.config.phone)
        register.Create_account_btn().click()
        cy.contains("Last name is required")
        cy.wait(3000)
    })

    it("Verify user is not able to signup if email not provided", function () {
        register.visit_homepage_and_close_popup()
        cy.get('body').then((body) => {
            if (body.find('[data-cy="close-btn"] > .sc-gtssRu > .sc-bXevSJ').length > 0) {
                land.close_popup_btn().click()
                cy.wait(2000)
            }
        });
        cy.wait(3000)
        register.signup().click()
        register.firstname().type(this.config.firstname)
        register.lastname().type(this.config.lastname)
        register.password().type(this.config.password)
        register.phone().type(this.config.phone)
        register.Create_account_btn().click()
        cy.contains("Email is required")
        cy.wait(3000)
    })

    it("Verify user is not able to signup if phone not provided", function () {
        register.visit_homepage_and_close_popup()
        cy.get('body').then((body) => {
            if (body.find('[data-cy="close-btn"] > .sc-gtssRu > .sc-bXevSJ').length > 0) {
                land.close_popup_btn().click()
                cy.wait(2000)
            }
        });
        cy.wait(3000)
        register.signup().click()
        register.firstname().type(this.config.firstname)
        register.lastname().type(this.config.lastname)
        register.email().type(this.config.email)
        register.password().type(this.config.password)
        register.Create_account_btn().click()
        cy.contains("Phone is required")
        cy.wait(3000)
    })

    it("Verify user is not able to signup if password not provided", function () {
        register.visit_homepage_and_close_popup()
        cy.get('body').then((body) => {
            if (body.find('[data-cy="close-btn"] > .sc-gtssRu > .sc-bXevSJ').length > 0) {
                land.close_popup_btn().click()
                cy.wait(2000)
            }
        });
        cy.wait(3000)
        register.signup().click()
        register.firstname().type(this.config.firstname)
        register.lastname().type(this.config.lastname)
        register.email().type(this.config.email)
        register.phone().type(this.config.phone)
        register.Create_account_btn().click()
        cy.contains("Password is required")
        cy.wait(3000)
    })

    it.skip("Connexus - Verify user signup with all details", function () {
        Cypress.env('newUserEmailConnexus', newUserEmailConnexus)

        register.visit_homepage_and_close_popup()
        cy.get('body').then((body) => {
            if (body.find('[data-cy="close-btn"] > .sc-gtssRu > .sc-bXevSJ').length > 0) {
                land.close_popup_btn().click()
                cy.wait(2000)
            }
        });
        cy.wait(3000)
        cy.fixture('config').then((config) => {
            register.signup().click()
            register.firstname().type(this.config.firstname)
            register.lastname().type(this.config.lastname)
            register.email().type(newUserEmailConnexus)
            register.password().type(this.config.password)
            register.phone().type(this.config.phone)
            register.membership_conexxus_btn().click()
            cy.wait(10000)
            register.Create_account_btn().click()
            cy.wait(20000)
            // cy.wait(10000)
            // register.employee().type(this.config.newEmployee)

            register.save_btn().click()
            cy.wait(5000)
            register.save_address_btn().click()
            register.logout_btn().should('be.visible')
            cy.wait(3000)
            register.logout_btn().click()
        })
    })


    it.skip("Connexus-login with new user", function () {

        Cypress.env('newUserEmailConnexus', newUserEmailConnexus)
        register.visit_homepage_and_close_popup()
        cy.get('body').then((body) => {
            if (body.find('[data-cy="close-btn"] > .sc-gtssRu > .sc-bXevSJ').length > 0) {
                land.close_popup_btn().click()
                cy.wait(2000)
            }
        });
        cy.wait(3000)
        cy.fixture('config').then((config) => {

            register.login_btn().click()
            cy.wait(3000)
            register.email().type(newUserEmailConnexus)
            register.password().type(this.config.password)
            register.submit_btn().click()
            cy.wait(10000)
            register.logout_btn().should('be.visible')
            cy.wait(3000)

        })

    })


    it.skip("Starcare - Verify user signup with all details", function () {
        Cypress.env('newUserEmailStarcare', newUserEmailStarcare)

        register.visit_homepage_and_close_popup()
        cy.get('body').then((body) => {
            if (body.find('[data-cy="close-btn"] > .sc-gtssRu > .sc-bXevSJ').length > 0) {
                land.close_popup_btn().click()
                cy.wait(2000)
            }
        });
        cy.wait(3000)
        cy.fixture('config').then((config) => {
            register.signup().click()
            register.firstname().type(this.config.firstname)
            register.lastname().type(this.config.lastname)
            register.email().type(newUserEmailStarcare)
            register.password().type(this.config.password)
            register.phone().type(this.config.phone)
            register.membership_starcare_btn().click()
            cy.wait(10000)
            register.Create_account_btn().click()
            cy.wait(20000)
            // cy.wait(10000)
            // register.employee().type(this.config.newEmployee)

            register.save_btn().click()
            cy.wait(5000)
            register.save_address_btn().click()
            register.logout_btn().should('be.visible')
            cy.wait(3000)
            register.logout_btn().click()
        })
    })


    it.skip("Starcare-login with new user", function () {

        Cypress.env('newUserEmailStarcare', newUserEmailStarcare)
        register.visit_homepage_and_close_popup()
        cy.get('body').then((body) => {
            if (body.find('[data-cy="close-btn"] > .sc-gtssRu > .sc-bXevSJ').length > 0) {
                land.close_popup_btn().click()
                cy.wait(2000)
            }
        });
        cy.wait(3000)
        cy.fixture('config').then((config) => {

            register.login_btn().click()
            cy.wait(3000)
            register.email().type(newUserEmailConnexus)
            register.password().type(this.config.password)
            register.submit_btn().click()
            cy.wait(10000)
            register.logout_btn().should('be.visible')
            cy.wait(3000)

        })

    })
})