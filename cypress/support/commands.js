// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add("backgroundLogin", () => {
   
    // Setando o cookie para o usuario ja ficar logado
    cy.setCookie(
        'PrestaShop-a30a9934ef476d11b6cc3c983616e364',
        '8JYVddvvVUUWYwyn08WBQgyrvGR7aDeoxLwoGXfWPJ%2BiSA5JhOWAqWzzoZUyfv9uNaXQ1dWayLtMPxZ078BHew3S2VrSoSRt3LUJ6DxACI6VMRFMYQCzTBrZsH9R7F%2F65jN4Ug41yiLYlSdOxW1hL%2BMwVzz4FvlaNLbUCCsRO4t6Jsgy%2B5%2Fu6VmmIutHwtH9FAkBZC714TLlxazFxtFp9TpV5FeP0EM0V2kOWorOeNly4KLqUPu9iM3f0RpRW5dYEovG73GU8DMxKZQRXG7%2F%2BTXo5SjRpbqy48EApzPsx8zH%2BtVyjkI9lSERf3T4hAIRGFNOrN8p4rWemZ9qyMpbwM3B8S7pj7zaZN02hSrTQ0LKbUB2TdLOIu1vB%2Bivq3A33S1%2FhiV1Bgv3QRxSKm7sVpiP%2F7HDPl3lAcar5VoLW9lfreekN0W2wfByZ8nIsr3C000325'
    );
});