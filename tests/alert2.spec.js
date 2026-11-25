 import {test,expect} from '@playwright/test';
test('alert2', async({page})=>{

    page.on("dialog", async(dialog)=> {
     dialog.dismiss()

    });
    await page.goto("https://testautomationpractice.blogspot.com/")

    await page.getByRole("button" ,{name:"Confirmation Alert"}).click();
    
})