const {Given, When, Then  } = require('cucumber');
const { Builder,  until } = require('selenium-webdriver');
var Cliente = require('./cliente');
const assert = require('assert');
const PageObject = require('../../page_objects/pesquisa.ionic.po');
const driver = require('selenium-webdriver');
const webdriver = require('selenium-webdriver');
const By = webdriver.By;
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const expect = chai.expect;
const pageObject = new PageObject();
let termoPesquisado;

Given(/^ao entrar no Ionic$/, function() {
    return 'foo';
});
 
When('entrar no tab2 com nome {string} o {string} e a {string}', function (nome, email, foto) {
    return 'bar';
});

Then('verificar a saida da mensagem {string} o {string} e a {string}',  function(nome, email, foto) {
    var chaiAsPromised = require('chai-as-promised');
    chai.use(chaiAsPromised);
    //const nome = 'Administrador Tester'
    //const email = 'administradorteste@gmail.com'
    //const foto = 'fototeste.png'
  
    return expect(this.driver.findElement(By.id('message')).getAttribute('innerText'))
        .to.eventually.contain('{ "nome": "' + nome +'", "email": "' + email + '", "foto": "' + foto + '" }');
});
      