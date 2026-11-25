import {expect, test } from "@playwright/test";

test("login test" , async ({page})=>{

    await page.goto("https://demowebshop.tricentis.com/");
    await page.locator(".ico-login").click() ;
    await page.locator("#Email").fill("manishmarley22@gmail.com");
    await page.locator("#Password").fill("mani1316");
    await page.waitForTimeout(3000);
    await page.locator(".login-button").click() ;

    let logout = await page.locator(".ico-logout") ;
    await expect (logout).toHaveText("Log out")
})



