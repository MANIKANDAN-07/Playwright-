import{test,expect} from "@playwright/test" ;
test('demo1', async({page})=>{


  await page.goto("https://testautomationpractice.blogspot.com/")
  await page.getByLabel("label",{name:'Name:'})
})