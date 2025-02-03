import { test, expect } from "@playwright/test";
import { pageObject } from "../pages/page-object";

test.describe("Create a reservation", () => {
  test("example test", async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    const contactPage = new pageObject(page);

    await contactPage.navigate();
    await contactPage.fillContactForm(
      "John Doe",
      "example@email.com",
      "12345678910",
      "This is a test: Title",
      "this is a description of the mssage"
    );

    await contactPage.submitForm();

    const successHeading = page.locator("h2", {
      hasText: "Thanks for getting in touch",
    });
    const nameHeading = page.locator("h2", { hasText: "John Doe" });
    const exclamationHeading = page.locator("h2", { hasText: "!" });

    await expect(successHeading).toBeVisible();
    await expect(nameHeading).toBeVisible();
    await expect(exclamationHeading).toBeVisible();
  });
});
