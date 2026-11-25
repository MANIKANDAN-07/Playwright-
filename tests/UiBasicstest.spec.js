import {expect, test } from "@playwright/test";

test("open google", async ({ page }) => {
    await page.goto('https://www.google.com/')
    await expect(page).toHaveTitle('Google')

});

test("login test", async ({ page }) => {
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/')
    await page.locator('#username').fill('rahulshettyacademy');
    await page.locator('#password').fill('Learnin@830$3mK2');
    await page.locator('#signInBtn').click()
    let message = await page.locator('[style*="display: block"]').textContent()
    await expect(message).toContain("Incorrect")

    await page.locator('#username').fill('rahulshettyacademy');
    await page.locator('#password').fill('Learning@830$3mK2');
    await page.locator('#signInBtn').click()

    // await page.locator(".card-body a").last().textContent()
    // let item = await page.locator(".card-body a").allTextContents()
    // console.log(item)


    
 
});
