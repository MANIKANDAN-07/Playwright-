// launch a broser for single tab project
//fixtures --> pre defined environment
//in -built fixtures
//1. browser
// 2.page
//syntax to launch broser using page fixtures
import{test,expect} from "@playwright/test";
test("launch browser 1",async({page})=>{
 await page.goto("https://demowebshop.tricentis.com/");
 await page.waitForTimeout(5000);
})