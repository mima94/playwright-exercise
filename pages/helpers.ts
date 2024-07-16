import { Locator, Page } from "@playwright/test";
export class Helepers{

    //homepage
    readonly FirstName = "John";
    readonly LastName = "Doe";
    readonly usernameForRegistration = "johdoe@yopmail.com";
    readonly passwordForRegistration = "Hj5286!!";
    readonly usernameLogin = "kiddytest@yopmail.com";
    readonly passwordLogin = "Kiddytest123!";
    
    //textboxPage
    readonly fullName = "Petar Pan";
    readonly email = "peterpan@yopmail.com";
    readonly currentAddress = "East Cost 55";
    readonly permanentAddress = "Join Us 33";

    //checkboxPage

    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
        
        }
};

