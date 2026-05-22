import {expect, test} from '@playwright/test'

test('dialog demo',async({page})=>{

await page.goto('https://testautomationpractice.blogspot.com/')

   page.on('dialog', (dialog) => {
        console.log("Dialog type is:",dialog.type()); // returns type of the dialog

              console.log("Dialog Text:",dialog.message()); // returns message   
      
        dialog.accept('jithu'); // close dialog by accepting
       //dialog.dismiss()
   
    });
//await page.locator('//button[@id="alertBtn"]').click()
//await page.waitForTimeout(5000)
//await page.locator('//button[@id="confirmBtn"]').click()
//await page.waitForTimeout(5000)


await page.locator('//button[@id="promptBtn"]').click()
await page.waitForTimeout(5000)

let text:string=await page.locator('#demo').innerText()
console.log('the text is:'+ text)
await expect(page.locator('#demo')).toHaveText('Hello jithu! How are you today?')
await page.waitForTimeout(5000)

})