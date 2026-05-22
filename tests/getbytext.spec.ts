import{test} from '@playwright/test'
test('getbytext demo',async({page})=>{
    
await page.goto('https://tutorialsninja.com/demo/index.php?route=account/register')
//let header:string=await page.getByText('Register Account').innerText()
//let header:string | null=await page.getByText('Register Account').textContent()
//console.log(header);


let pd:string=await page.getByText('Your Personal Details').innerText()
console.log(pd);



})