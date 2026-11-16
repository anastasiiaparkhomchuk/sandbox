import { test as base } from '@playwright/test';
import { LoginPage } from '../pageObject/login_page';
import { SwagLabsPage } from '../pageObject/swagLabs_page'; 
type MyFixtures = {
 loginPage: LoginPage;
 swagLabs: SwagLabsPage;
 loggedPage: void; 
};
export const test = base.extend<MyFixtures>({
 loginPage: async ({ page }, use) => {
   await use(new LoginPage(page));
 },
 swagLabs: async ({ page }, use) => {
   await use(new SwagLabsPage(page));
 },
 loggedPage: async ({ page, loginPage }, use) => {
   await loginPage.open();
   await loginPage.login(process.env.STANDART_USER!, process.env.STANDART_PASSWORD!);
   await use();
 },
});
export { expect } from '@playwright/test';