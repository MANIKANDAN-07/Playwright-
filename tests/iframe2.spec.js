import{test,expect} from "@playwright/test" ;
 test('nested', async({page})=>{


    await page.goto("https://the-internet.herokuapp.com/nested_frames");


   let topframe= await page.frameLocator("frame[name='frame-top']")
   let middle = await topframe.frameLocator("frame[name='frame-middle']")
   let text = await middle.locator("#content").textContent()
   console.log(text)
 })