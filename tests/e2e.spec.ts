import * as dotenv from 'dotenv';
import { test, expect } from '../fixtures/fixtures';
import { CartPage } from '../pageObject/cart_page';
import { CheckoutPage } from '../pageObject/checkout_page';
dotenv.config();

test('Standard user can complete checkout for the first product', async ({
 loginWithStandardUser,
 swagLabs,
 page,
}) => {
    void loginWithStandardUser
 const cartPage = new CartPage(page);
 const checkoutPage = new CheckoutPage(page);
 await swagLabs.addFirstProductToCart();
 await expect(swagLabs.cartBadge).toHaveText('1');
 await swagLabs.openCart();
 await cartPage.startCheckout();
 await checkoutPage.fillInformation({
   firstName: 'Anastasiia',
   lastName: 'Taylor',
   postalCode: '04053',
 });
 await checkoutPage.continueToOverview();
 await checkoutPage.finishOrder();
 await expect(checkoutPage.confirmationMessage).toBeVisible();
 await expect(checkoutPage.confirmationMessage).toHaveText(
   'Thank you for your order!',
 );
});