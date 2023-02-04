describe('Тестируем возможность покупки', function () {

    it('Позитивный тест на покупку', function () {
         cy.visit('https://testqastudio.me/');
         cy.get('.post-11342 > .product-inner > .product-summary').click();
         cy.get('.summary > .cart > .product-button-wrapper > .quantity > .increase > svg').dblclick();
         cy.get('.summary > .cart > .product-button-wrapper > .single_add_to_cart_button').click();
         cy.get('#cart-modal > .off-modal-layer').click();
         cy.get('.header-left-items > .site-branding > .logo > .logo-dark').click();
         cy.get('.post-11337 > .product-inner > .product-summary').click();
         cy.get('.summary > .cart > .product-button-wrapper > .single_add_to_cart_button').click();
         cy.get('.summary > .cart > .product-button-wrapper > .single_add_to_cart_button').click();
         cy.get('#cart-modal > .off-modal-layer').click();
         cy.get('.header-right-items > .header-cart > a > .razzi-svg-icon > svg').click();
         cy.get('.checkout').click();
         cy.get('#billing_first_name').type('Дарья');
         cy.get('#billing_last_name').type('Радзивилл');
         cy.get('#billing_address_1').type('Москва');
         cy.get('#billing_city').type('Москва');
         cy.get('#billing_state').type('Москва');
         cy.get('#billing_postcode').type('124498');
         cy.get('#billing_phone').type('89111111111');
         cy.get('#billing_email').type('for.undiluted@gmail.com');
         cy.get('#place_order').click();
         cy.contains('Ваш заказ принят. Благодарим вас.');     
         
         })
 })
