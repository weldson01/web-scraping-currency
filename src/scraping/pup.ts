import puppeteer from 'puppeteer';

async function run(fromValue: string, toValue: string) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto(`https://www.google.com/search?q=from+${fromValue}+to+${toValue}`);

    const fromResult = await page.$eval(".ZEB7Fb", el => el.value)
    const toResult = await page.$eval(".a61j6", el => el.value)
    await browser.close();
    return { fromResult, toResult }
}

export default run