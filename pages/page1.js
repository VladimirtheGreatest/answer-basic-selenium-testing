require('chromedriver');
const {Browser, By, Key, until} = require("selenium-webdriver");
const url = "http://the-internet.herokuapp.com/login";

class FormAuth {
  constructor(driver){
    this.driver = driver;
    this.locators = {

    }
  }

  open(){
    this.driver.get(url);
  }
}



module.exports = FormAuth;
