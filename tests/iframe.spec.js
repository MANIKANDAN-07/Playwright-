import{test,expect} from "@playwright/test" ;
 test('frame', async({page})=>{


    await page.goto('https://the-internet.herokuapp.com/iframe');
    let iframe= await page.frameLocator("#mce_0_ifr")
    let text= await iframe.locator("p").textContent()
    console.log(text)
 })
