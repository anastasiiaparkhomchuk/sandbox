import { Page, Locator } from "playwright/test";
import { BasePage } from "./base_page";

export class LoginPage extends BasePage {
    readonly usernameFill: Locator;
    readonly passwordFill: Locator;
    readonly loginButton: Locator;
    readonly errorMessage: Locator;

    constructor(page:Page) { super(page);
        this.usernameFill = page.locator('#user-name');
        this.passwordFill = page.locator('#password');
        this.loginButton = page.locator('#login-button');
        this.errorMessage = page.locator('[data-test="error-button"]');
    }

    async open () {
        await this.navigate('/');
    }

    async login (username: string, password: string) {
        await this.usernameFill.fill(username);
        await this.passwordFill.fill(password);
        await this.loginButton.click();
    }
}