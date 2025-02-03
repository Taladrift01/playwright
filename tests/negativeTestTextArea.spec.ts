import { test, expect } from "@playwright/test";
import { pageObject } from "../pages/page-object";
import { BasePage } from "../pages/BasePage";

test.describe("Create a reservation", () => {
  test("Negative Scenario Insufficient characters for Subject ", async ({
    browser,
  }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    const contactPage = new pageObject(page);

    await contactPage.navigate();
    await contactPage.fillContactForm(
      "John Doe",
      "example@email.com",
      "12345678910",
      "This is a test: Title",
      "Not enought"
    );
    await contactPage.submitForm();
    const alertMessage = await contactPage.getErrorMessage();
    expect(alertMessage).toContain(
      "Message must be between 20 and 2000 characters."
    );
  });
});
