import {test,expect} from '@playwright/test';
test('alert3', async({page})=>{

    page.on("dialog", async(dialog)=> {
     dialog.accept("mani")

    });
    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.getByRole("button" ,{name:"Prompt Alert"}).click();
   let alert = await page.locator("#demo");
   await expect(alert).toHaveText("Hello mani! How are you today?");
    
})