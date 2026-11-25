import {test,expect} from '@playwright/test';
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


test.only('drag3', async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");
    
    await page.locator("#draggable").hover();
    await page.mouse.down()

    await page.locator("#droppable").hover();
    await page.mouse.up()
   
})

