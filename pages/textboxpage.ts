import { expect, Locator, Page } from '@playwright/test';
import { Helepers } from './helpers';
export class DemoqaTextboxPage {
readonly url ="https://demoqa.com/text-box";
readonly page: Page;
readonly fullName:Locator;
readonly email:Locator;
readonly currentAddress:Locator;
readonly permanentAddress:Locator;
readonly submitButton:Locator;

//Locators
constructor (page: Page){
    this.page = page;
    this.fullName = page.locator('#userName');
    this.email = page.locator('#userEmail');
    this.currentAddress = page.getByPlaceholder('Current Address');
    this.permanentAddress = page.locator('#permanentAddress');
    this.submitButton = page.locator('#submit');
}

//Methods
async gotoTextboxPage (){
    await this.page.goto(this.url, {waitUntil: 'domcontentloaded'});
}

async inputFullName (){
    const helpers = new Helepers(this.page);
    await this.fullName.fill(helpers.fullName);
}

async inputEmail (){
    const helpers = new Helepers(this.page);
    await this.email.fill(helpers.email);
}

async inputCurrentAddress (){
    const helpers = new Helepers(this.page);
    await this.currentAddress.fill(helpers.currentAddress);
}

async inputPemanentAddress (){
    const helpers = new Helepers(this.page);
    await this.permanentAddress.fill(helpers.permanentAddress);
}

async clickSubmit (){
    const helpers = new Helepers(this.page);
    await this.submitButton.click();
}
};