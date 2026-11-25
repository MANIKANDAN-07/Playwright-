import{test,expect} from "@playwright/test" ;

let url = "https://demowebshop.tricentis.com/";
let email = "manishmarley22@gmail.com";
let password = "mani1316";


 test('book1 @san', async({page})=>{
    await page.goto(url)
    await page.locator(".ico-login").click();
    await page.locator("#Email").fill("manishmarley22@gmail.com");
    await page.locator("#Password").fill("mani1316");
    await page.locator(".login-button").click();

    await page.locator('a[href="/health"]').first().click();
    await page.locator('h2 a[href="/health"]').first().click();
    await page.locator("#add-to-cart-button-22").click();

    await page .locator(".product-item").filter({hasText:"Health Book"}).locator("#add-to-cart-button-22").click()

    let message = await page.locator(".content");
    await expect (message).toContainText("The product has been added to your shopping cart");

    await page.locator(" #topcartlink a span.cart-label").click();
    await expect(page).toHaveURL("https://demowebshop.tricentis.com/");
   

    await page.locator("#CountryId").selectOption("India");
    await page.locator("#ZipPostalCode").fill("12345");




 })