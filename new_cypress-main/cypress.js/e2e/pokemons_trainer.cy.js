describe('Покупка аватара', function () {                                // название набора тестов
    it('e2e тест на покупку нового аватара для тренера', function () {   // название теста
         cy.visit('https://pokemonbattle.ru/');                          // переходим на сайт https://pokemonbattle.ru/
         cy.get(':nth-child(1) > .auth__input').type('gromakova.valeria@yandex.ru');                   // вводим логин
         cy.get('input[type="password"]').type('M89032329553');               // вводим пароль
         cy.get('button[type="submit"]').click();                        // нажимаем кнопку Подтвердить
         cy.wait(4000);
         cy.get('.header__container > .header__id').click({ force: true }); // нажимаем на лк в углу
         cy.get('[href="/shop"]').click({ force: true }); // нажимаю кнопку сменить аватара
         cy.get('.available > .shop__button').first().click({ force: true }); // наживаю купить у первого аватара доступного
         cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('5536914117163786'); // ввожу номер карты
         cy.get(':nth-child(1) > .pay_base-input-v2').type('0330'); // ввожу сроки карты
         cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125'); // ввожу свв
         cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('VALERIA GROMAKOVA'); 
         cy.get('.pay-btn').click();
        
         cy.get('#cardnumber').click();
         cy.get('#cardnumber').type('56456');
         cy.get('.payment__submit-button').click();
         cy.contains('Покупка прошла успешно').should('be.visible');
     });
 });