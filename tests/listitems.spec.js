import{test,expect} from "@playwright/test" ;

let product =["book","computer","giftcard","jewelry"]
let url = "https://demowebshop.tricentis.com/";
let email = "manishmarley22@gmail.com";
let password = "mani1316";

for(let list of items)

 test(`search of products`,async({page})=>{
    await page.goto(url)
    await page.locator(".ico-login").click();
    await page.locator("#Email").fill("manishmarley22@gmail.com");
    await page.locator("#Password").fill("mani1316");
    await page.locator(".login-button").click();

 })