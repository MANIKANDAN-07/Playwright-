import { test } from "../fixtures/myFixtures.spec";

import { expect } from "@playwright/test";

test("login test" , async ({webpage})=>{
    await webpage.waitForTimeout(3000);
})