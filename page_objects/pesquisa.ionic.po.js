const {
    Builder,
    By   ,
    until 
} = require('selenium-webdriver');
var browser = require('selenium-webdriver');

 

module.exports = function () {
    let driver;
    this.__init__ = async () =>{
        driver = await new Builder().forBrowser('chrome').build();
    }

    this.fecharDriver = async () =>{
                    await driver.quit();
    }
    
    this.acessarIonic = async () => {
        await driver.get('http://localhost:1221/tabs/tab3');
    };
    this.pesquisarPor = async (vnome,vemail,vfoto) => {
         await driver.findElement(By.id('nome')).sendKeys(vnome);
        await driver.findElement(By.id('email')).sendKeys(vemail);
        await driver.findElement(By.id('foto')).sendKeys(vfoto);
    };
    this.clicarNoBotao= async () => {
        await driver.sleep(1000);
        await driver.findElement(By.id('btn1')).click();
    };
    this.obterHtml = async () => {
        await driver.sleep(1000);
        return await driver.findElement(By.id('res')).getAttribute('innerHTML');
    };
};