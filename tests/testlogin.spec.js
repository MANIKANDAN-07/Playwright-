
import { expect, test } from "@playwright/test";

test("test1", async ({ page }) => {
  await page.goto("https://practicetestautomation.com/practice-test-login/");

  await page.locator("#username").fill("student");
  await page.locator("#password").fill("Password123");
  await page.locator("#submit").click();

  await expect(page).toHaveURL(
    "https://practicetestautomation.com/logged-in-successfully/"
  );
  let message = await page.locator(".post-title").textContent()
  await expect(message).toContain("Successfully")

  await expect(page.getByRole('link',{name: "Log out"})).toBeVisible()
   
});


test("test2", async ({ page }) => {
  await page.goto("https://practicetestautomation.com/practice-test-login/");

  await page.locator("#username").fill("incorrectUser");
  await page.locator("#password").fill("Password123");
  await page.locator("#submit").click();

  await expect(page.locator("#error")).toBeVisible()
  expect(await page.locator("#error").textContent()).toContain("Your username is invalid!")
});

test("test3", async ({ page }) => {
  await page.goto("https://practicetestautomation.com/practice-test-login/");

  await page.locator("#username").fill("student");
  await page.locator("#password").fill("incorrectPassword");
  await page.locator("#submit").click();

  await expect(page.locator("#error")).toBeVisible()
  expect(await page.locator("#error").textContent()).toContain("Your password is invalid!")

  
});

