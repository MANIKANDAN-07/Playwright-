import {test,expect} from '@playwright/test';

test("zaracoat",async({page})=>{


    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");

    await page.locator("#userEmail").fill("manishmarley2@gmail.com");
    await page.locator("#userPassword").fill("Manikandan13");
    await page.locator("#login").click();

    


    await page.locator(".card-body").filter({hasText:"ZARA COAT 3"}).locator(".w-10").click();
    let confirm= await page.locator("#toast-container");
    await expect(confirm).toBeVisible()

    await page.locator(".btn.btn-custom[routerlink='/dashboard/cart']").click();
    await page.locator(".btn-primary").last().click();

    await page.locator(".ddl").first().selectOption("10");
    await page.locator(".ddl").last().selectOption("13");

    await page.locator("input[placeholder='Select Country']").pressSequentially("india");
    await page.locator(".ta-item").last().click();

    

})