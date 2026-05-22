import {test,expect} from '@playwright/test'
import {RegistrationPage} from '../pages/RegistrationPage'
test('validating Reg page', async({page})=>{

  await page.goto('https://tutorialsninja.com/demo/index.php?route=account/register');

  const reg = new RegistrationPage(page);
/* let firstName = 'John';
let lastName = 'Doe';
let email = `john.doe${Date.now()}@example.com`; // unique email
let telephone = '1234567890';
let password = 'Password123';
let confirmPassword = 'Password123';   */

  await reg.enterFirstName('John');
  await reg.enterLastName('Doe');
  await reg.enterEmail(`john.doe${Date.now()}@example.com`); // unique email
  await reg.enterTelephone('1234567890');
  await reg.enterPassword('Password123');
  await reg.enterConfirmPassword('Password123');

  await reg.clickOnSubscribeYes();
  await reg.clickOnCheckbox();
  await reg.clickContinue();

  // Better assertion (more stable)

const successMsg = await reg.getSuccessMessage();
     expect(successMsg).toContain('Your Account Has Been Created!');




})