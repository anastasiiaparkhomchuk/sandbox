import { Page } from '@playwright/test'; // Ts розуміє з яким об'єктом ми працюємо

export class BasePage {
readonly page: Page; // тепер не можемо перезаписати сторінку

constructor(page:Page){
    this.page = page;
}
async navigate (url:string) {
    await this.page.goto(url);
}
}