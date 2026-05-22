import{expect, Locator, test} from '@playwright/test'

 test('checkboxes', async({page})=>{


await page.goto('https://testautomationpractice.blogspot.com/')
/* let chk2:Locator=page.getByLabel('male').first()
await chk2.click()
await page.waitForTimeout(3000) 

 let chk1:Locator=page.getByLabel('Sunday')
await chk1.check()
await page.waitForTimeout(3000) 
 */


let days:string[]=['Sunday','Monday','Tuesday','Wednesday','Thursday',' Friday','Saturday']

 let checkboxes:Locator[]=days.map(i=>page.getByLabel(i))
 for(let chk of checkboxes)
    {
    await chk.click()
   
 }

 await page.waitForTimeout(3000) 




}) 