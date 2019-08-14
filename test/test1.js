require('chromedriver');
const {Browser, By, Key, until} = require("selenium-webdriver");
const {suite} = require("selenium-webdriver/testing");
const assert = require('assert');
const FormAuth = require('../pages/page1.js')


suite(function(env) {
    describe('Form Authentication', async function() {
            this.timeout(10000);
        let driver;
        let page;
        let username = "tomsmith";
        let password = "SuperSecretPassword!";           //I will use this variables mostly as an input or to evaluate the test results
        let loginInvalidUsername = "Your username is invalid!";
        let loginInvalidPassword = "Your password is invalid!";
        let loginSuccess = "You logged into a secure area!";
        let logoutSuccess = "You logged out of the secure area!";

        before(async function() {
            driver = await env.builder().build();
            page = new FormAuth(driver);
            await page.open();
        });

//correct username wrong password
                it('scenario1', async function() {
                  await driver.findElement(page.locators.username).click();
                  await driver.findElement(page.locators.username).sendKeys(username);
                  await driver.findElement(page.locators.password).click();
                  await driver.findElement(page.locators.password).sendKeys("oops wrong password");
                  await page.Login();
                  let infomessage = await driver.findElement(page.locators.message);
                  let text = await infomessage.getText();
                  assert(text.includes(loginInvalidPassword));
                });
//wrong username correct password
                it('scenario2', async function() {
                  await driver.findElement(page.locators.username).click();
                  await driver.findElement(page.locators.username).sendKeys("oops wrong username");
                  await driver.findElement(page.locators.password).click();
                  await driver.findElement(page.locators.password).sendKeys(password);
                  await page.Login();
                  let infomessage = await driver.findElement(page.locators.message);
                  let text = await infomessage.getText();
                  assert(text.includes(loginInvalidUsername));
                });
//successfull login well done buddy
                it('scenario3', async function() {
                  await driver.findElement(page.locators.username).click();
                  await driver.findElement(page.locators.username).sendKeys(username);
                  await driver.findElement(page.locators.password).click();
                  await driver.findElement(page.locators.password).sendKeys(password);
                  await page.Login();
                  let infomessage = await driver.findElement(page.locators.message);
                  let text = await infomessage.getText();
                  assert(text.includes(loginSuccess));
                  await page.Logout();
                  let infomessage2 = await driver.findElement(page.locators.message);
                  let text2 = await infomessage2.getText();
                  assert(text2.includes(logoutSuccess));
                });


        after(async function() {
            driver.quit();
        });
    });
});
