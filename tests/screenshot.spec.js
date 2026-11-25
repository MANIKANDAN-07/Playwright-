import {test,expect} from '@playwright/test';
import path from 'node:path';

test("screenshot",async({page})=>{

  await page.goto("https://demowebshop.tricentis.com/");
  await page.screenshot({path:"screenshot1.png"});
   
  await page.screenshot({path:"screenshot2.png", fullPage :true})

  await page.getByRole("img", {name:"Tricentis Demo Web Shop"}).screenshot({path:"screenshot/element.png"});
  

})