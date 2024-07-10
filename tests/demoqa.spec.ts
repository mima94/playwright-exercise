import {test, expect} from '@playwright/test';
import { DemoqaHomepage } from '../pages/homepage';
import { DemoqaTextboxPage } from '../pages/textboxpage';
const { ZenRows } = require("zenrows");

//Navigating to the page
test.beforeEach('Navigating to the page', async({page}) => {
    const demoqaHomepage = new DemoqaHomepage(page);
    await demoqaHomepage.goto();
    await expect.soft(page).toHaveURL('https://demoqa.com/login');
});

/*test ('Register', async ({page}) => {
   const demoHomepage = new DemoqaHomepage(page);
   await demoHomepage.register();
   const client = new ZenRows("556af6a4426ae76d627ad7892dcaae0367584a35");
   const url = "https://demoqa.com/register";

    try {
        const { data } = await client.get(url, {
        "js_render": "true",
        "antibot": "true",
        "premium_proxy": "true"});
        console.log(data);
    } catch (error) {
        console.error(error.message);
        if (error.response) {
            console.error(error.response.data);
        }
    }

    await demoHomepage.clickRegisterButton();

    page.on('popup', (popup) => {
        console.log(popup.url());
      });
      
      await page.click('a[target=_blank]');

});*/

test ('Log in', async ({page}) => {
    const demoqaHomepage = new DemoqaHomepage(page);
    await demoqaHomepage.logIn();
    await expect.soft(page.locator('#userName-value')).toHaveText("kiddytest@yopmail.com");
    
});

test('Log out', async ({ page }) => {
   const demoqaHomepage = new DemoqaHomepage(page);
   await demoqaHomepage.logOut();
   await expect.soft(page).toHaveURL("https://demoqa.com/login");
  });

test ('Text Box', async({page}) =>{
    const demoqaTextboxPage = new DemoqaTextboxPage(page);
    await demoqaTextboxPage.gotoTextboxPage();
    await demoqaTextboxPage.inputFullName();
    await demoqaTextboxPage.inputEmail();
    await demoqaTextboxPage.inputCurrentAddress();
    await demoqaTextboxPage.inputPemanentAddress();
    await demoqaTextboxPage.clickSubmit();    
    
});