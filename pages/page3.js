require('chromedriver');
const {Browser, By, Key, until} = require("selenium-webdriver");
const url = "http://the-internet.herokuapp.com/key_presses?";

class KeyPage {
  constructor(driver){
    this.driver = driver;
    this.locators = {
      inputarea : By.css('body'),
      result : By.id('result')
    }
  }

  open(){
    this.driver.get(url);
  }
}



module.exports = KeyPage;
