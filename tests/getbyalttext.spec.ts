import{test} from '@playwright/test'
test('getbyalttext ex',async({page})=>{
    
await page.goto('https://tutorialsninja.com/demo/')
await page.waitForTimeout(2000)
let iphone:boolean=await page.getByAltText('MacBook').nth(2).isVisible()
console.log(iphone)







})