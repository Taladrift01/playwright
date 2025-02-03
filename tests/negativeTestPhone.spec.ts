import { test, expect } from "@playwright/test";
import { pageObject } from "../pages/page-object";

test.describe("Create a reservation", () => {
  test("Negative Scenario Incorrect Phone Number", async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    const contactPage = new pageObject(page);

    await contactPage.navigate();
    await contactPage.fillContactForm(
      "John Doe",
      "example@email.com",
      "1234567890",
      "This is a test: Title",
      "this is a description of the mssage"
    );
    await contactPage.submitForm();
    const alertMessage = await contactPage.getErrorMessage();
    expect(alertMessage).toContain(
      "Phone must be between 11 and 21 characters."
    );
  });
});
