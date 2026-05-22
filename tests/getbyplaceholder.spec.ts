import{test,Locator} from '@playwright/test'
test('placeholder demo', async({page})=>{


await page.goto('https://tutorialsninja.com/demo/index.php?route=account/register')
await page.waitForTimeout(2000)

await page.getByPlaceholder('First Name').fill('jithu')
await page.waitForTimeout(2000)

await page.getByPlaceholder('Last Name').fill('kumar')
await page.waitForTimeout(2000)

await page.getByPlaceholder('E-Mail').fill('jitendarkumarm88@gmail.com')
await page.waitForTimeout(2000)

await page.getByPlaceholder('Telephone').fill('9440653568')
await page.waitForTimeout(2000)



})