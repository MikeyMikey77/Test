const puppeteer = require("puppeteer");
const io = require("puppeteer-io");

test(`addEvent() корректно добавляет обработчики событий`, async () => {
    let browser = await puppeteer.launch();
    let page = await browser.newPage();

    await page.goto(`file://${__dirname}/test.html`);

    await io({
        page,
        async input() {
            await page.click("button");
        },
        async output({ message }) {
            await message("Button.click");
        }
    });

    await page.close();
    await browser.close();
});