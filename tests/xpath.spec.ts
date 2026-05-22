import {test} from '@playwright/test'

test('xpath demo',async({page})=>{

//xpath 
//basic syntax- //tagname[@attribute="value"]
//no attribute 
//syntax - //tagname[text()="value"]


await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

await page.locator('//input[@name="username"]').fill('Admin')
await page.waitForTimeout(2000)
await page.locator('//input[@type="password"]').fill('admin123')
await page.waitForTimeout(2000)
await page.locator('//a[text()="OrangeHRM, Inc"]').click()
await page.waitForTimeout(2000)














}
)