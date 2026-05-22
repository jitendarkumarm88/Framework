import { test, Locator } from '@playwright/test';

test('filter', async ({ page }) => {
    

    await page.goto('https://www.google.com/')
    await page.locator('[name="q"]').fill('Selenium')
    await page.locator('ul[role="listbox"] div[role="option"]').filter({hasText:'selenium automation testing',visible:true}).click()
    await page.waitForTimeout(5000)
})






