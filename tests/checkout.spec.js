import{test,expect} from "@playwright/test" ;
 test('checkout @reg', async({page})=>{


    let name =" MANIKANDAN S";
    let email= "manishmarley22@gmail.com";

    await page.goto("https://www.automationexercise.com/")
    let success= await page.locator("div[class='features_items'] h2[class='title text-center']");
    await expect(success).toBeVisible();
    await expect.waitForTimeout(3000)


    await page.getByRole("link", {name:" Signup / Login"}).click();
    await page.getByPlaceholder("Name").fill(name);
    await page.locator("input[data-qa='signup-email']").fill(email);
    await page.getByRole("button", { name: "Signup" }).click();

    let email1= "manishmarley2@gmail.com";
    let pwd="mani1316"

     await page.locator("input[data-qa='login-email']").fill(email1);
     await page.getByPlaceholder("Password").fill();
     await page.getByRole("button", { name: "Login" }).click();
     await page.waitForTimeout(3000)






    
 })
     