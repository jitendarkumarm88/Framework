import {test} from '@playwright/test'

test('multiple elements demo',async({page})=>{

await page.goto('https://tutorialsninja.com/demo/index.php?route=account/register')
let alllinks:string[]=await page.locator('a.list-group-item').allInnerTexts()
console.log(alllinks); // return elements within an array
console.log(alllinks.length); //13

for(let e of alllinks){
    console.log(e); //extract text of all elements without  array 
if(e=='My Account'){
    await page.getByText(e).nth(1).click()
    await page.waitForTimeout(5000)
}




}






})