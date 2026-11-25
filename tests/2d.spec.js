import {test,expect} from '@playwright/test';

let users =[["bharat1234@gmail.com","Bharat@123"],
["swapna.potnuru07@gmail.com","Password@123"],
["himanitest@gmail.com","htest@123"],
["renukamani1999@gmail.com","Renuka@1499"],
["sontest123@gmail.com","sontest123"]
]

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