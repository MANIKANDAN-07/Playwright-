import{test,expect} from "@playwright/test" ;
 test('alert', async({page})=>{

    page.on("dialog", async(dialog)=> {
     await dialog.accept();

    });
    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.getByRole("button", {name:"Simple Alert"}).click()


})
