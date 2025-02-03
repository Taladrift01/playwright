import { Locator, Page } from "@playwright/test";

export class pageObject {
  readonly page: Page;
  readonly inputName: Locator;
  readonly inputEmail: Locator;
  readonly inputPhone: Locator;
  readonly inputSubject: Locator;
  readonly textAreaMessage: Locator;
  readonly buttonSubmit: Locator;
  readonly alertBanner: Locator;

  constructor(page: Page) {
    this.page = page;
    this.inputName = page.locator("#name");
    this.inputEmail = page.locator("#email");
    this.inputPhone = page.locator("#phone");
    this.inputSubject = page.locator("#subject");
    this.textAreaMessage = page.locator("#description");
    this.buttonSubmit = page.locator("#submitContact");

    //Error Messages
    this.alertBanner = page.locator(".alert-danger");
  }

  async navigate() {
    await this.page.goto("/");
  }

  async fillContactForm(
    name: string,
    email: string,
    phone: string,
    subject: string,
    textAreaMessage: string
  ) {
    await this.inputName.fill(name);
    await this.inputEmail.fill(email);
    await this.inputPhone.fill(phone);
    await this.inputSubject.fill(subject);
    await this.textAreaMessage.fill(textAreaMessage);
  }

  async submitForm() {
    await this.buttonSubmit.click();
  }

  async getErrorMessage(){
    return await this.alertBanner.textContent();
  }
}
