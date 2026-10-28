import { test, expect} from '@playwright/test';
import { LoginPage } from '../pageObject/login_page';

test.describe('Login', () => {
  
 test('Positive: Should login successfully with valid credentials', async ({ page }) => {
   const loginPage = new LoginPage(page);

   await loginPage.open();
   await loginPage.login('standard_user', 'secret_sauce');

   await expect(page).toHaveURL(/.*inventory/);
 });

 test('Negative: Should show error with invalid credentials', async ({ page }) => {
   const loginPage = new LoginPage(page);

   await loginPage.open();
   await loginPage.login('standard_user', 'wrong_password');

   await expect(loginPage.errorMessage).toBeVisible();
 });

});