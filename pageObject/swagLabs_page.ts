import { Page, Locator } from '@playwright/test';

export class SwagLabs {
 readonly page: Page;
 readonly productCards: Locator;
 readonly addToCartButton: Locator;
 readonly removeButton: Locator;
 readonly cartBadge: Locator;

 constructor(page: Page) {
   this.page = page;
   this.productCards = page.locator('[data-test="inventory-item-description"]');
   this.addToCartButton = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
   this.removeButton = page.locator('[data-test="remove-sauce-labs-backpack"]');
   this.cartBadge = page.locator('[data-test="shopping-cart-badge"]');
 }

 async addFirstProductToCart() {
   await this.addToCartButton.first().click();
 }

 async removeFirstProductFromCart() {
   await this.removeButton.first().click();
 }

}