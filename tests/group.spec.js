import{test,expect} from "@playwright/test" ;

test.describe("group", ()=>{
    test('alert', async({page})=>{

    page.on("dialog", async(dialog)=> {
     await dialog.accept();

    });
    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.getByRole("button", {name:"Simple Alert"}).click()


})


test('doubleclick', async({page})=>{

   await page.goto("https://testautomationpractice.blogspot.com/");
   await page.locator("button[ondblclick='myFunction1()']").dblclick();
   let text = await page.locator
   await page.waitForTimeout(3000);
    
 })
})


test.describe("group2", ()=>{

    test('drag', async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");

   let element = await page.locator("#draggable");
   let source =  await page.locator("#droppable");

   await element.dragTo(source);
   await page.waitForTimeout(3000);
})


test('drag2', async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");

   await page.dragAndDrop("#draggable","#droppable");
   await page.waitForTimeout(3000);
})

})



 
     