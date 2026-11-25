import {expect,test} from "@playwright/test";
test("dropdown", async({context,page})=>{

    await page.goto('https://rahulshettyacademy.com/loginpagePractise/')
    await page.locator('#username').fill('rahulshettyacademy');
    await page.locator('#password').fill('Learnin@830$3mK2');

    let radio= await page.locator("input[value='user']")
    await radio.check()
    await page.locator("#okayBtn").click();
    await expect(radio).toBeChecked()

    
   let terms = await page.locator("#terms")
   await terms.check()
   await expect(terms).toBeChecked()
   await terms.uncheck()
   expect(await terms.isChecked()).toBeFalsy()
    
   

    
    await page.locator("select[class='form-control']").selectOption({label :'Consultant'});
    await expect(page.locator("select[class='form-control']")).toHaveValue("consult");
    // await page.locator('#signInBtn').click()
    
    let blink = await page.locator("a[href*='documents-request']");
    await expect(blink).toHaveAttribute("class", "blinkingText");


    let [newPage]=await Promise.all(
        [
            context.waitForEvent('page'),
            blink.click()
        ]
    )

    let blog=await newPage.getByRole("link",{name:"Blog"})
    console.log(await blog.textContent())
})