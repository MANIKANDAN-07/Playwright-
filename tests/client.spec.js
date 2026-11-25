import {test,expect} from '@playwright/test';

test("client @smoke",async({page})=>{

    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    // await page.locator(".btn1").click()
    // await page.locator("#firstName").fill("manikandan");
    // await page.locator("#lastName").fill("srini");
    // await page.locator("#userEmail").fill("manishmarley2@gmail.com");
    // await page.locator("#userPassword").fill("Manikandan13");
    // await page.locator("#confirmPassword").fill("Manikandan13");
    // await page.locator("input[type='checkbox']").check();
    // await page.locator("#userMobile").fill("9597103346");
    // await page.locator("#login").click();

    // await page.getByRole("button",{name:"Login"}).click();

    await page.locator("#userEmail").fill("manishmarley2@gmail.com");
    await page.locator("#userPassword").fill("Manikandan13");
    await page.locator("#login").click();

    console.log(await page.locator(".card-body b").first().textContent())


}
)
