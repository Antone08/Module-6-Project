import { Builder, Capabilities, By } from "selenium-webdriver"

const chromedriver = require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    await driver.get('http://127.0.0.1:5500/tictacjs.html')
})

afterAll(async () => {
    await driver.quit()
})

test('I can start a game', async () => {

    let button = await (await driver).findElement(By.id('start-game'));
    await button.click();

    await driver.findElement(By.id('cell-0')).click()
    
    await driver.sleep(1000)

    await driver.findElement(By.id('cell-2')).click()

    await driver.sleep(1000)
    
    await driver.findElement(By.id('cell-8')).click()

    await driver.sleep(1000)
});