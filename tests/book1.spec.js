import{test,expect} from "@playwright/test" ;
 test('book1 @smoke', async({page})=>{
     
  await page.goto("https://demowebshop.tricentis.com/");
  await page.locator(".ico-login").click();
  await page.locator("#Email").fill("manishmarley22@gmail.com");
  await page.locator("#Password").fill("mani1316");
  await page.locator(".login-button").click();

  await page.locator("a[href='/books']").first().click() ;
  await page.locator("#products-orderby").selectOption("Price: High to Low");
  await page.waitForTimeout(3000);
  await page.locator("#products-pagesize").selectOption("8");
  await page.waitForTimeout(3000);
  await page.locator("#products-viewmode").selectOption("Grid");
  await page.waitForTimeout(3000);


 })