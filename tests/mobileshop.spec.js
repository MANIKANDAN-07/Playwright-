import { expect, test } from "@playwright/test";
test("mobiletest", async ({page})=>{
    
    let mobile = await page.locator("").textContent();
    await expect(mobile).toBeVisible()


    await expect(page.getByRole("link",{name: "login"})).toBeVisible()

    await page.waitForTimeout(5000)

     await page .locator(".product-item").filter({hasText:"Health Book"}).locator("#add-to-cart-button-22").click()
})