import {test,expect} from '@playwright/test';
import fs from "fs";
import{parse} from "csv-parse/sync"

let csvPath = "testdata/data.csv";
let data = fs.readFileSync(csvPath, "utf-8");
let records =parse(data,{
    columns:true,
    skip_empty_lines :true,
    skip_records_with_error : true,
    skip_records_with_empty_values :true
})

for (let data of records){

    test(`login for users ${data.email}`,async({page})=>{
        await page.goto(url)
        await page.locator(".ico-login").click();
        await page.locator("#Email").fill(data.email);
        await page.locator("#Password").fill(data.password);
        await page.locator(".login-button").click();
        let logout = await page.getByRole("link",{name:"Log out"});
        await expect(logout).toBeVisible();
        await page.waitForTimeout(5000);
})
}