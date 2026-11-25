import{test,expect} from "@playwright/test" ;
 test('dataentry @reg', async({page})=>{

    let name="MANIKANDAN";
    let email ="manishmarley22@gmail.com"
    let phoneNumber ="9597103346";
    let address ="Tamilnadu";

    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.locator("#name").fill(name);
    await page.locator("#email").fill(email);
    await page.locator("#phone").fill(phoneNumber);
    await page.getByLabel("Address:").fill(address);

    await page.locator("#textarea").fill("TamilNadu")

    await page.locator("#male").check();
    
    await page.locator("#sunday").check();
    await page.locator("#monday").check();


    await page.getByLabel("Colors:").selectOption(["Red","White","Green"]);
    await page.waitForTimeout(5000);

    await page.locator("#singleFileInput").setInputFiles("PDF X.lnk","test");
    await page.waitForTimeout(3000);

    


    
 });