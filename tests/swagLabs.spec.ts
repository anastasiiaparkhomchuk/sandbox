import { test, expect } from '../fixtures/fixtures';
import * as dotenv from 'dotenv'
dotenv.config();

  test.describe('Catalog and Cart Functionality', () => {
  test('User should be able to add the product to the cart', async ({ loggedPage, swagLabs }) => {
   await swagLabs.addFirstProductToCart();
   await expect(swagLabs.cartBadge).toHaveText('1');
 });

 test('User should be able to add and remove it', async ({ loggedPage, swagLabs }) => {
   await swagLabs.addFirstProductToCart();
   await expect(swagLabs.cartBadge).toHaveText('1');
   await swagLabs.removeFirstProductFromCart();
   await expect(swagLabs.cartBadge).toBeHidden();
 });
});