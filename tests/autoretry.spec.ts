import{expect, Locator, test} from '@playwright/test'

 test('autoretry', async({page})=>{


//auto retry-this will wait for the element to be available
await page.goto('https://tutorialsninja.com/demo/')
await expect(page).toHaveTitle("Your Store")
await expect(page).toHaveURL('https://tutorialsninja.com/demo/')


//non auto retry-this will execute immediate , not wait for an element 
let title=await page.title()
expect(title.includes('Your Store')).toBeTruthy()


}) 