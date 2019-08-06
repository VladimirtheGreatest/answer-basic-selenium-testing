require('chromedriver');
const {Browser, By, Key, until} = require("selenium-webdriver");
const url = "http://the-internet.herokuapp.com/infinite_scroll";


class InfinitePage {
  constructor(driver){
    this.driver = driver;
    this.locators = {
      textboxes : By.css('.jscroll-added')
    }
  }

  open(){
    this.driver.get(url);
  }

  async loadContent() {
      await this.driver.executeScript("window.scrollTo(0, document.body.scrollHeight)");
      await this.driver.sleep(2000);
      await this.driver.executeScript("window.scrollTo(0, document.body.scrollHeight)");
      await this.driver.sleep(2000);
      await this.driver.executeScript("window.scrollTo(0, 0)");
  }
}



module.exports = InfinitePage;
