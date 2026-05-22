// components os pom constructor , locators, action method
import {Page,Locator} from '@playwright/test'
/*export class RegistrationPage
{

page:Page;

constructor(page:Page)
{
this.page=page; //instace variable
}


firstname='#input-firstname';
lastname='#input-lastname'
email='#input-email'
telephone='#input-telephone'
pass1='#input-password'
pass2='#input-confirm'
login='//input[@type="submit"]'


async enterfirstname(fname:string)
{
    this.page.fill(this.firstname,fname)
}


async enterlastname(lname:string)
{
    this.page.fill(this.lastname,lname)
}

async enteremail(email:string)
{
    this.page.fill(this.email,email)
}
async entertele(tele:string)
{
    this.page.fill(this.telephone,tele)
}
async enterpassword1(password1: string)
{
    await this.page.fill(this.pass1, password1)
    await this.page.waitForTimeout(1000)
}
async enterpassword2(password2: string)
{
    await this.page.fill(this.pass2, password2)
    await this.page.waitForTimeout(1000)
}

async clicklogin()
{
    await this.page.click(this.login)
    await this.page.waitForTimeout(5000)
}

*/

export class RegistrationPage {

   page: Page; //readonly - variable is fixed, we cannot change it

   firstName: Locator;
   lastName: Locator;
   email: Locator;
   telephone: Locator;
   password: Locator;
   confirmPassword: Locator;
   subscribeYes: Locator;
    checkbox: Locator;
   continueBtn: Locator;
   SuccessMessage: Locator;

  constructor(page: Page) {
    this.page = page;

    this.firstName = page.locator('#input-firstname');
    this.lastName = page.locator('#input-lastname');
    this.email = page.locator('#input-email');
    this.telephone = page.locator('#input-telephone');
    this.password = page.locator('#input-password');
    this.confirmPassword = page.locator('#input-confirm');
    this.subscribeYes = page.locator('input[name="newsletter"][value="1"]');
    this.checkbox = page.locator('input[type="checkbox"]');
    this.continueBtn = page.getByRole('button', { name: 'Continue' });
    this.SuccessMessage = page.getByRole('heading', { name: 'Your Account Has Been Created!' });
  }

//Action methods
  async enterFirstName(fname: string) {
    await this.firstName.fill(fname);
      await this.page.waitForTimeout(1000);
  }

  async enterLastName(lname: string) {
    await this.lastName.fill(lname);
      await this.page.waitForTimeout(1000);
  }

  async enterEmail(emailValue: string) {
    await this.email.fill(emailValue);
      await this.page.waitForTimeout(1000);
  }

  async enterTelephone(phone: string) {
    await this.telephone.fill(phone);
      await this.page.waitForTimeout(1000);
  }

  async enterPassword(passwordValue: string) {
    await this.password.fill(passwordValue);
      await this.page.waitForTimeout(1000);
  }

  async enterConfirmPassword(confirmPwd: string) {
    await this.confirmPassword.fill(confirmPwd);
      await this.page.waitForTimeout(1000);
  }

  
 async clickOnSubscribeYes() {
        await this.subscribeYes.click();
       await this.page.waitForTimeout(1000);
    }

    async clickOnCheckbox() {
        await this.checkbox.click();
        await this.page.waitForTimeout(1000);
    }
async clickContinue() {
    await this.continueBtn.click();
  }

async getSuccessMessage() {
        return await this.SuccessMessage.textContent();
        await this.page.waitForTimeout(1000);
    }




}