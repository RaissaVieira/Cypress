/// <reference types="cypress"/>

context('Compra', () => {
    it('Efetuar compra de produto', () => {

        cy.backgroundLogin();

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

        // Validando se o produto foi add ao carrinho com sucesso
        
        cy.get('.icon-ok')
            .parent()
            .should('contain.text', 'Product successfully added to your shopping cart');

        cy.get('span#layer_cart_product_title')
            .should('contain.text', nomeProduto);

        cy.get(".button-container a[href$='controller=order']").click();
        
        cy.get(".cart_navigation a[href$='controller=order&step=1']").click();

        /* cy.get('#email').type('teste123@gmail.com');
        cy.get('#passwd').type('123456');

        cy.get('button#SubmitLogin').click();*/

        // Validadndo se o endereco de entrega eh igual o de cobranca
        // [type=checkbox]#addressesAreEquals
        // tipo de assercao, atributo, valor

        cy.get('[type=checkbox]#addressesAreEquals')
            .should('have.attr', 'checked', 'checked');
        cy.get('[type=checkbox]#addressesAreEquals')
            .should('have.attr', 'name', 'same');

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

        cy.get('div.box')
            .invoke('text')
            .then((text) => {
                console.log(text);

                // Captura do ID do pedido
                console.log(text.match(/[A-Z][A-Z]+/g)[1]);

                // Escrita de um arquivo json com o conteudo do pedido
                // caminho do arquivo e o conteudo do arquivo
                cy.writeFile('cypress/fixtures/pedido.json', { id: `${text.match(/[A-Z][A-Z]+/g)[1]}`})
            });
        
        cy.get('a.button-exclusive').click();

        // Leitura de arquivo

        cy.readFile('cypress/fixtures/pedido.json').then(pedido => {
            
            cy.get('tr.first_item .history_link a').should('contain.text', pedido.id);
        })

    });
});