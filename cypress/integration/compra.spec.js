/// <reference types="cypress"/>

context('Compra', () => {
    it('Efetuar compra de produto', () => {
        // http://automationpractice.com/index.php
        cy.visit('/'); // acessa o endereco da baseUrl

        let nomeProduto = 'Faded Short Sleeve T-shirts';
        
        cy.contains(nomeProduto).trigger('mouseover');
        
        cy.contains(nomeProduto) // Navegou ate o elemento pelo conteudo
            .parent() // Pegou o elemento pai "h5"
            .siblings('div.button-container') // Acessou o elemento irmao com a seguinte div
            .children('a') // Selecionou os filhos "a" da div correspondente
            .first() // o elemento que desejamos era o primeiro 
            .click();

        cy.get(".button-container a[href$='controller=order']").click();
        
        cy.get(".cart_navigation a[href$='controller=order&step=1']").click();

        cy.get('#email').type('teste123@gmail.com');
        cy.get('#passwd').type('123456');

        cy.get('button#SubmitLogin').click();

        // [type=checkbox]#addressesAreEquals

        cy.get('button[name=processAddress]').click();
        
        cy.get('[type=checkbox]#cgv').check();

        cy.get('button[name=processCarrier]').click();

        cy.get('.bankwire').click();

        cy.get('.cart_navigation button[type=submit]')
            .find('span')
            .contains('I confirm my order')
            .click();

        //expect ou should

        cy.get('.cheque-indent strong')
            .should('contain.text', 'Your order on My Store is complete.');

    });
});