 
 import { expect, test } from  "@playwright/test";
 test("task1", async({page})=>{

  await page.goto("https://demowebshop.tricentis.com/");
  await page.locator(".ico-login").click();
  await expect(page).toHaveURL("https://demowebshop.tricentis.com/login");


 })
