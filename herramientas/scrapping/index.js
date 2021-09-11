const puppeteer = require("puppeteer");

(async () => {
    console.log("Se lanza un navegador.");
    const browser = await puppeteer.launch({ headless: false });

    console.log("Se consulta YouTube.");
    const page = await browser.newPage();
    await page.goto("https://www.youtube.com");

    var titulo = await page.evaluate(() => {
        return document.querySelector("h1").innerHTML;
    });

    console.log(titulo);

    console.log("Se cierra el navegador.");
    browser.close();
})();