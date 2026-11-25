import{test,expect} from "@playwright/test" ;
 test('task3', async({page})=>{
     
  await page.goto("https://demowebshop.tricentis.com/");
  await page.locator(".ico-login").click();
  await page.locator("#Email").fill("manishmarley22@gmail.com");
  await page.locator("#Password").fill("mani116");
  await page.locator(".login-button").click();


  let logout_btn = await page.locator(".ico-logout");
  await expect (logout_btn).toBeVisible();

 })
  