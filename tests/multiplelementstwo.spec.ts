import {test} from '@playwright/test'

test('multiple elements demo',async({page})=>{

    await page.goto('https://tutorialsninja.com/demo/')
    let allimages: string[]=await page.locator('//img[@alt]').allInnerTexts()
    console.log(allimages.length);
  
for(let e of allimages){
    console.log(e); //extract text of all elements without  array 
if(e=='iPhone 6'){
    await page.getByText(e).nth(1).click()
    await page.waitForTimeout(5000)
}




}








})