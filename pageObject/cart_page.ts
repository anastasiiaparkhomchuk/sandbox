import type { Locator, Page } from '@playwright/test';
import { BasePage } from './base_page';

export class CartPage extends BasePage {
 readonly checkoutButton: Locator;

 constructor(page: Page) {
   super(page);
   this.checkoutButton = page.locator('[data-test="checkout"]');
 }

 async startCheckout() {
   await this.checkoutButton.click();
 }
}