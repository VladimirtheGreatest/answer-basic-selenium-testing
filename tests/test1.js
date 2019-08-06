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

        before(async function() {
            driver = await env.builder().build();
            page = new FormAuth(driver);
            await page.open();
        });


                it('scenario1', async function() {

                });

                it('scenario2', async function() {

                });

                it('scenario3', async function() {

                });




        after(async function() {
            driver.quit();
        });
    });
});
