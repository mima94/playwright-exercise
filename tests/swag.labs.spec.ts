import {test, expect} from '@playwright/test';
import { escape } from 'querystring';

test.beforeEach ("Navigating to the page", async ({page}) => {

//navigate to the page 
await page.goto("https://www.saucedemo.com/", {waitUntil: 'domcontentloaded'});
await expect.soft(page).toHaveURL("https://www.saucedemo.com/");

//logIn
await page.getByPlaceholder("Username").fill('standard_user');
await page.getByPlaceholder('Password').fill('secret_sauce');
await page.locator('#login-button').click();
await expect.soft(page).toHaveTitle('Swag Labs');

});

test ("Buy product", async ({page}) => {

await page.locator('#add-to-cart-sauce-labs-backpack').click();
await page.locator('.shopping_cart_link').click();
await expect(page.locator('.inventory_item_name')).toHaveText('Sauce Labs Backpack');
await page.locator('#checkout').click();
await page.getByPlaceholder('First Name').fill("Peter");
await page.getByPlaceholder('Last Name').fill("Pan");
await page.getByPlaceholder('Zip/Postal Code').fill("2587D");
await page.locator('#continue').click();
await page.locator('#finish').click();
await page.locator('Back Home');
await expect(page.locator('.complete-header')).toHaveText('Thank you for your order!');

});

test ("Remove product from cart", async ({page}) => {

await page.locator('#add-to-cart-sauce-labs-backpack').click();
await page.locator('.shopping_cart_link').click();
await page.locator('#remove-sauce-labs-backpack').click();
await expect(page.locator('.removed_cart_item')).toBeTruthy();

});

test ("Remove product from products menu", async ({page}) => {

await page.locator('#add-to-cart-sauce-labs-backpack').click();
await page.locator('#add-to-cart-sauce-labs-bike-light').click();
await page.locator('.shopping_cart_link').click();
await page.locator('#continue-shopping').click();
await page.locator('#remove-sauce-labs-backpack').click();
await page.locator('#remove-sauce-labs-bike-light').click();
await expect(page.locator('#add-to-cart-sauce-labs-backpack')).toHaveText('Add to cart');
await expect(page.locator('#add-to-cart-sauce-labs-bike-light')).toHaveText('Add to cart');

});

test ("Change product sorting", async ({page}) => {

await page.locator('data-test=product-sort-container').selectOption('Name (Z to A)');
await expect(page.locator('data-test=active-option')).toHaveText('Name (Z to A)');
});