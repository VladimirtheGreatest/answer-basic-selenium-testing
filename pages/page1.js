require('chromedriver');
const {Browser, By, Key, until} = require("selenium-webdriver");
const url = "http://the-internet.herokuapp.com/login";

class FormAuth {
  constructor(driver){
    this.driver = driver;
    this.locators = {
      message : By.id('flash'),
      logout : By.css('#content > div > a'),
      username : By.css('#username'),
      password : By.css('#password'),
      login : By.css('#login > button')
    }
  }

  open(){
    this.driver.get(url);
  }
  async Login() {
      await this.driver.findElement(this.locators.login).click();
  }
  async Logout() {
      await this.driver.findElement(this.locators.logout).click();
  }
}



module.exports = FormAuth;

