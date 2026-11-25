import{test,expect} from "@playwright/test" ;

let email="manishmarley22@gmail.com";
let pwd="mani1316";

 test('demo1 @endToend', async({page})=>{
    await page.goto("https://demowebshop.tricentis.com/");
    await page.getByRole("link",{name:"Log in"}).click();
    await page.getByLabel("Email:").fill(email);
    await page.getByLabel("Password:").fill(pwd);
    await page.getByRole("button",{name:"Log in"}).click();
    
   let logOut= await page.getByRole("link",{name:"Log out"});
   await expect(logOut).toBeVisible();
   
   await page.getByRole("link",{name:"Books"}).first().click();
   await page.locator(".product-item").filter({hasText:"Health Book"}).click();
   await page.getByRole("button",{name:"Add to cart"}).first().click();

   let message= await page.getByText("The product has been added to your ");
   await expect(message).toBeVisible();

    let message1= await page.getByText("The product has been added to your ").textContent();
   console.log(message1);


 })