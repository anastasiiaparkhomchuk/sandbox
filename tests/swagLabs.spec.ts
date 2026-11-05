import { test, expect } from '@playwright/test';
import { SwagLabs } from '../pageObject/swagLabs_page';
import { LoginPage } from '../pageObject/login_page';
import * as dotenv from 'dotenv'
dotenv.config();

test.describe('Catalog and Cart Functionality', () => {
 let swagLabs: SwagLabs;
 let loginPage: LoginPage;

 test.beforeEach(async ({ page }) => {
   swagLabs = new SwagLabs(page);
    loginPage = new LoginPage(page);
   await loginPage.open();
   await loginPage.login(process.env.STANDART_USER!, process.env.STANDART_PASSWORD!);
   await expect(page).toHaveURL(/.*inventory/);
 });

 test('User should be able to add the product to the cart', async () => {
   await swagLabs.addFirstProductToCart();
   await expect(swagLabs.cartBadge).toHaveText('1');
 });

 test('User should be able to add and remove it', async () => {
   await swagLabs.addFirstProductToCart();
   await expect(swagLabs.cartBadge).toHaveText('1');
   await swagLabs.removeFirstProductFromCart();
   await expect(swagLabs.cartBadge).not.toBeVisible();
 });
});