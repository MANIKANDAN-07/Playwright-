const {test : Base } =require("@playwright/test")

 export const test =Base.extend({
    webPage : async ({page},use)=>{
           
  await page.goto("https://demowebshop.tricentis.com/");
  await page.locator(".ico-login").click();
  await page.locator("#Email").fill("manishmarley22@gmail.com");
  await page.locator("#Password").fill("mani1316");
  await page.locator(".login-button").click();
  await use(page);
  await console.log("test completed")

    }
 })