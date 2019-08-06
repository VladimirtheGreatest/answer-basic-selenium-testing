require('chromedriver');
const {Browser, By, Key, until} = require("selenium-webdriver");
const {suite} = require("selenium-webdriver/testing");
const assert = require('assert');
const KeyPage = require('../pages/page3.js')


suite(function(env) {
    describe('Key presses test', async function() {
            this.timeout(10000);
        let driver;
        let page;


        before(async function() {
            driver = await env.builder().build();
            page = new KeyPage(driver);
            await page.open();
        });


                it('presses key ENTER', async function() {
                  await driver.findElement(page.locators.inputarea).sendKeys(Key.ENTER);
                  let result = await driver.findElement(page.locators.result);
                  let text = await result.getText();
                  assert(text.includes("You entered: ENTER"));
                });

                it('presses key ALT', async function() {
                  await driver.findElement(page.locators.inputarea).sendKeys(Key.ALT);
                  let result = await driver.findElement(page.locators.result);
                  let text = await result.getText();
                  assert(text.includes("You entered: ALT"));
                });

                it('presses key CLEAR', async function() {
                  await driver.findElement(page.locators.inputarea).sendKeys(Key.CLEAR);
                  let result = await driver.findElement(page.locators.result);
                  let text = await result.getText();
                  assert(text.includes("You entered: CLEAR"));
                });

                it('presses key DELETE', async function() {
                  await driver.findElement(page.locators.inputarea).sendKeys(Key.DELETE);
                  let result = await driver.findElement(page.locators.result);
                  let text = await result.getText();
                  assert(text.includes("You entered: DELETE"));
                });


        after(async function() {
            //driver.quit();
        });
    });
});
