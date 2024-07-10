import { expect, Locator, Page } from '@playwright/test';
import { Helepers } from './helpers';
export class DemoqaHomepage {
readonly url ="https://demoqa.com/login";
readonly page: Page;
readonly newUser: Locator;
readonly firstName: Locator;
readonly lastName:Locator;
readonly userName:Locator;
readonly password:Locator;
readonly buttonForRegiststration:Locator;
readonly loginButton:Locator;
readonly logoutButton:Locator;


//Locators
constructor(page: Page) {
this.page = page;
this.newUser = page.locator('#newUser');
this.firstName = page.getByPlaceholder('First Name');
this.lastName = page.getByPlaceholder('Last Name');
this.userName = page.locator('#userName');
this.password = page.locator('#password');
this.buttonForRegiststration = page.locator("#register");
this.loginButton = page.locator('#login');
this.logoutButton = page.getByText("Log out");
}

//Method for go to
async goto(){
    await this.page.goto(this.url, {waitUntil: 'domcontentloaded'});
}


//Methods for registration
async register(){
    const helpers = new Helepers(this.page);
    await this.newUser.click();
    await this.firstName.fill(helpers.FirstName);
    await this.lastName.fill(helpers.LastName);
    await this.userName.fill(helpers.usernameForRegistration);
    await this.password.fill(helpers.passwordForRegistration);
    
}

async clickRegisterButton(){
    await this.buttonForRegiststration.click();
}


//Methods for log in/log out
async logIn (){
    const helpers = new Helepers(this.page);
    await this.userName.fill(helpers.usernameLogin);
    await this.password.fill(helpers.passwordLogin);
    await this.loginButton.click();
};

async logOut(){
    const helpers = new Helepers(this.page);
    await this.userName.fill(helpers.usernameLogin);
    await this.password.fill(helpers.passwordLogin);
    await this.loginButton.click();
    await this.logoutButton.click();
};
    
}; 