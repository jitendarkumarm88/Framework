import { test, Locator } from '@playwright/test';

test('filter', async ({ page }) => {


await page.goto('https://tutorialsninja.com/demo/')
let footerelements:Locator=page.locator('//footer//a')
footerelements.filter({hasText:'Contact Us',visible:true}).click()
await page.waitForTimeout(5000)






})