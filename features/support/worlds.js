const path = require('path');
require('chromedriver');
const webdriver = require('selenium-webdriver');
const By = webdriver.By;
const until = webdriver.until;
var { setWorldConstructor, Before, After, setDefaultTimeout } = require('cucumber');
 
 
class  CustomWorld {
  constructor() {
    this.driver = new webdriver.Builder().forBrowser('chrome').build();
    this.nome="";
    this.email="";
    this.foto="";
  }

  setDriver() {
    this.driver = new webdriver.Builder().forBrowser('chrome').build();
  }

  isNome() {
    let regra=/^[a-z A-Z]{3,50}$/;
    return regra.test(this.nome);
  }

  isEmail() {
    let regra= /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i
    return regra.test(this.email);
  }

  isFoto() {
    let regra=/^[a-zA0-9A-Z.]{3,250}$/;
    return regra.test(this.foto);
  }

  isCliente() {
    if (this.isNome() && this.isEmail() && this.isFoto()) {
      return true;
    }
    else{
      return false;
    }
  }
}

function setDados(nome, email, foto) {
  this.nome = nome;
  this.email = email;
  this.foto = foto;
}

Before(function(testCase, callback) {
  const driver = this.driver;
  driver.get('http://localhost:1221/tabs/tab3').then(function(res) {
        
    const nome = 'edson belem'
    const email = 'edsonbelem@gmail.com'
    const foto = 'https://randomuser.me/api/portraits/lego/1.jpg'

    setDados(nome, email, foto);

    driver.findElement(By.xpath("//input[@name='nome']")).sendKeys(nome)
    .then(driver.findElement(By.xpath("//input[@name='email']")).sendKeys(email))
    .then(driver.findElement(By.xpath("//input[@name='foto']")).sendKeys(foto))
    .then(() => driver.findElement(By.id('btn1')).click());
    callback();
  });
});

After(function() {
  console.log('Cucumber finished all features. Closing browser');
  const driver = this.driver;
  //return driver.close();
});

setWorldConstructor(CustomWorld);
setDefaultTimeout(30 * 1000);

exports.module=CustomWorld;