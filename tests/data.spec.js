import{test,expect} from "@playwright/test" ;
import fs from "fs";

let jsonPath = "./tests/testdata/testdata.json";
let users = JSON.parse(fs.readFileSync(jsonPath, 'utf-8'));
let url = "https://demowebshop.tricentis.com/";

for(let[email,pwd] of users){
test(`login for users ${email}`,async({page})=>{
    await page.goto(url)
    await page.locator(".ico-login").click();
    await page.locator("#Email").fill("manishmarley22@gmail.com");
    await page.locator("#Password").fill("mani1316");
    await page.locator(".login-button").click();
    let logout = await page.getByRole("link",{name:"Log out"});
    await expect(logout).toBeVisible();
    await page.waitForTimeout(5000);
})
}