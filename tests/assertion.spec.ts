import{expect, Locator, test} from '@playwright/test'

 test('hard Asserton demo', async({page})=>{

await page.goto('https://tutorialsninja.com/demo/')
await expect(page).toHaveTitle('My Store')
await expect(page).toHaveURL('https://tutorialsninja.com/demo/')

let logo:Locator=page.locator('//a[text()="Qafox.com"]')
await expect(logo).toBeVisible()

}) 
 test('soft  Asserton demo', async({page})=>{

await page.goto('https://tutorialsninja.com/demo/')
await expect.soft(page).toHaveTitle('My Store')
await expect.soft(page).toHaveURL('https://tutorialsninja.com/demo/')

let logo:Locator=page.locator('//a[text()="Qafox.com"]')
await expect(logo).toBeVisible()
}) 