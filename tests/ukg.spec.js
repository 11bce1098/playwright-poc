const { test, expect } = require('@playwright/test');

test.beforeEach(async ({ page }) => {
  await page.goto('http://timekeeping90-b-k8s.int.dev.mykronos.com/?tenantId=tkmanu01');
  await page.waitForLoadState('networkidle')
});

test.describe("Testing UKG Timekeeping Application", ()=>{

    test('test_ALM165980_Last4WeeksTimeframeOnMyTimecard', async ({ page }) => {
        await page.getByRole('textbox', { name: 'Username' }).click();
        await page.getByRole('textbox', { name: 'Username' }).fill('IgorLeavitt');
        await page.getByRole('textbox', { name: 'Password' }).click();
        await page.getByRole('textbox', { name: 'Password' }).click();
        await page.getByRole('textbox', { name: 'Password' }).fill('Pr0mensi0ns@UKG');
        await page.getByRole('button', { name: 'Sign In' }).click();
        await page.waitForLoadState('networkidle')
        await page.getByText('Welcome back, Igor').click();
        await page.goto('http://timekeeping87-b-k8s.int.dev.mykronos.com/timekeeping#/myTimecard');
        await page.getByText('Current Pay Period').click();
        await page.getByText('Last 4 Weeks').click();
        await expect(page.locator('[id="_timeFrame"]')).toContainText('Last 4 Weeks');
        await page.getByText('Mon 2/17').click();
        await page.getByText('Fri 3/14').click();
        await expect(page.getByText('Mon 2/17')).toBeVisible();
        await expect(page.getByText('Fri 3/14')).toBeVisible();
        await page.getByRole('button', { name: 'Main Menu' }).click();
        await page.getByRole('button', { name: 'Sign Out' }).click();
        await page.waitForLoadState('networkidle')
    });
});

test.describe("Testing UKG Timekeeping Application", ()=>{

    test('test_ALM165981_Last3MonthTimeframeOnMyTimecard', async ({ page }) => {
        await page.getByRole('textbox', { name: 'Username' }).click();
        await page.getByRole('textbox', { name: 'Username' }).fill('IgorLeavitt');
        await page.getByRole('textbox', { name: 'Password' }).click();
        await page.getByRole('textbox', { name: 'Password' }).fill('Pr0mensi0ns@UKG');
        await page.getByRole('button', { name: 'Sign In' }).click();
        await page.waitForLoadState('networkidle')
        await page.goto('http://timekeeping87-b-k8s.int.dev.mykronos.com/timekeeping#/myTimecard');
        await page.getByText('Current Pay Period').click();
        await page.getByText('Last 3 Months').click();
        await expect(page.locator('[id="_timeFrame"]')).toContainText('Last 3 Months');
        await page.getByText('Sun 12/01').click();
        await expect(page.getByText('Sun 12/01')).toBeVisible();
        await page.mouse.wheel(0, 15000);
        await page.getByText('Fri 2/28').click();
        await expect(page.getByText('Fri 2/28')).toBeVisible();
        await page.getByRole('button', { name: 'Main Menu' }).click();
        await page.getByRole('button', { name: 'Sign Out' }).click();
        await page.waitForLoadState('networkidle')
      
        });    
});