import{test,expect} from "@playwright/test" ;
 test('doubleclick @endToend', async({page})=>{

   await page.goto("https://testautomationpractice.blogspot.com/");
   await page.locator("button[ondblclick='myFunction1()']").dblclick();
   let text = await page.locator
   await page.waitForTimeout(3000);
    
 })
     