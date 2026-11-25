import{test,expect} from "@playwright/test" ;


let context ;
let page ;

 test.beforeEach(async({browser})=>{

    context = await browser.newContext();
    page = await context.newPage();

    await page.goto("https://demowebshop.tricentis.com/");
    await page.locator(".ico-login").click();
    await page.locator("#Email").fill("manishmarley22@gmail.com");
    await page.locator("#Password").fill("mani1316");
    await page.locator(".login-button").click();
 })

 test("books",async()=>{

    await page.locator("a[href='/books']").first().click() ;
    await page.locator('h2 a[href="/health"]').first().click();
    await page.locator("#add-to-cart-button-22").click();

    let message = await page.locator(".content");
    await expect (message).toContainText("The product has been added to your shopping cart");

 })

 test("shopping cart" ,async()=>{
    await page.locator(" #topcartlink a span.cart-label").click();
    await expect(page).toHaveURL("https://demowebshop.tricentis.com/");
    await page.locator("#CountryId").selectOption("India");
    await page.locator("#ZipPostalCode").fill("12345");

    

 })