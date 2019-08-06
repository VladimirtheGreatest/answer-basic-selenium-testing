require('chromedriver');
const {Browser, By, Key, until} = require("selenium-webdriver");
const {suite} = require("selenium-webdriver/testing");
const assert = require('assert');
const InfinitePage = require('../pages/page2.js')

suite(function(env) {
    describe('Infinite Scroll', async function() {
            this.timeout(10000);
        let driver;
        let page;


        before(async function() {
            driver = await env.builder().build();
            page = new InfinitePage(driver);
            await page.open();
        });


                it('HasInfiniteScroll', async function() {
                  let boxes = await driver.findElements(page.locators.textboxes);

                  let oldBoxCount = boxes.length;

                  console.log(oldBoxCount);

                  await page.loadContent();

                  boxes = await driver.findElements(page.locators.textboxes);

                 let newBoxCount = boxes.length;

                 console.log(newBoxCount);

                 assert(newBoxCount > oldBoxCount);
                });



        after(async function() {
            driver.quit();
        });
    });
});
