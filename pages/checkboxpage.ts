import { expect, Locator, Page } from '@playwright/test';
import { Helepers } from './helpers';
export class DemoqaCheckboxPage {
readonly url ="https://demoqa.com/checkbox";
readonly page: Page;
readonly moreButton1:Locator;
readonly moreButton2:Locator;
readonly checkbox:Locator;

//Locators
constructor (page: Page){
    this.page = page;
    this.moreButton1 = page.getByRole('button', {name: 'Toggle'});
    this.moreButton2 = page.locator('//*[@id="tree-node"]/ol/li/ol/li[1]/span/button');
    this.checkbox = page.getByText('Notes');
}


//Methods
async gotoCheckboxPage (){
    await this.page.goto(this.url, {waitUntil: 'domcontentloaded'});
}

async clickMore(){
    await this.moreButton1.click();
}

async clickOneMore(){
    await this.moreButton2.click();
}

async check(){
    await this.checkbox.check();
}



        


};