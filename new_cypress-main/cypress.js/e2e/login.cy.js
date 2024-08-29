describe('Проверка авторизации', function () {

    it('Верный пароль и верный логин', function () {
         cy.visit('https://login.qa.studio/'); // Зашли на сайт
         cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверяю цвет кнопки восст. пароль
         
         cy.get('#mail').type('german@dolnikov.ru'); // Ввели верный логин 
         cy.get('#pass').type('iLoveqastudio1'); // Ввели верный пароль
         cy.get('#loginButton').click(); // Нажимаем войти
         
         cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Проверяю, что после авториз. вижу текст
         cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден для пользователя


     })
     it('Проверка восстановления пароля', function () {
        cy.visit('https://login.qa.studio/'); // Зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверяю цвет кнопки восст. пароль
        
        cy.get('#forgotEmailButton').click(); // Нажимаем кнопку "забыли пароль"
        cy.get('#mailForgot').type('german@dolnikov.ru') // Ввел почту для восстановления
        cy.get('#restoreEmailButton').click(); // Нажимаем кнопку "отправить код"
        
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // Проверяю, на совпаденрие текст после отправки
        cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю 
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден для пользователя
        
    
    })
 
 it('Неверный пароль и верный логин', function () {
    cy.visit('https://login.qa.studio/'); // Зашли на сайт
    cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверяю цвет кнопки восст. пароль
    
    cy.get('#mail').type('german@dolnikov.ru'); // Ввели верный логин 
    cy.get('#pass').type('iLoveqastudio7'); // Ввели неверный пароль
    cy.get('#loginButton').click(); // Нажимаем войти
    
    cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Проверяю, что после авториз. вижу текст
    cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
    cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден для пользователя


})
it('Верный пароль и неверный логин', function () {
    cy.visit('https://login.qa.studio/'); // Зашли на сайт
    cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверяю цвет кнопки восст. пароль
    
    cy.get('#mail').type('geman@dolnikov.ru'); // Ввели неверный логин 
    cy.get('#pass').type(' iLoveqastudio1'); // Ввели верный пароль
    cy.get('#loginButton').click(); // Нажимаем войти
    
    cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Проверяю, что после авториз. вижу текст
    cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
    cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден для пользователя


})
it('Проверка, что в логине есть @', function () {
    cy.visit('https://login.qa.studio/'); // Зашли на сайт
    cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверяю цвет кнопки восст. пароль
    
    cy.get('#mail').type('german@dolnikov.ru'); // Ввели логин без @ 
    cy.get('#pass').type('iLoveqastudio7'); // Ввели верный пароль
    cy.get('#loginButton').click(); // Нажимаем войти
    
    cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Проверяю, что после авториз. вижу текст
    cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю 
    cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден для пользователя


})
it('Проверка на приведение к строчным буквам в логине', function () {
    cy.visit('https://login.qa.studio/'); // Зашли на сайт
    cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверяю цвет кнопки восст. пароль
    
    cy.get('#mail').type('GerMan@Dolnikov.ru'); // Ввели неверный логин GerMan@Dolnikov.ru 
    cy.get('#pass').type(' iLoveqastudio1'); // Ввели верный пароль
    cy.get('#loginButton').click(); // Нажимаем войти
    
    cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Проверяю, что после авториз. вижу текст
    cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
    cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден для пользователя


})

})

 
 
 // запуск через теринал: npx cypress run --spec cypress/e2e/poke.cy.js --browser chrome
 