import{test} from "@playwright/test"
test("first test",async({page})=>{


await page.goto("https://tutorialsninja.com/demo/index.php?route=account/login")
await page.waitForTimeout(4000)

await page.locator('#input-email').fill('shiva@gmail.com')
await page.waitForTimeout(4000)
await page.locator('#input-password').fill('abc123')
await page.waitForTimeout(4000)
await page.locator('//input[@type="submit"]').click()
await page.waitForTimeout(4000)









})
