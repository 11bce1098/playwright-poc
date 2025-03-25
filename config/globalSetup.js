import { chromium, expect } from '@playwright/test';
import { LoginPage } from '../pages/login'
import config from '../playwright.config';
const testData = JSON.parse(JSON.stringify(require("../testData.json")))


module.exports = async config => {
    const browser = await chromium.launch({headless: true})
    const page = await browser.newPage()
    const Login = new LoginPage(page)
  
    await Login.gotoLoginPage(testData.websiteURL)
    await Login.login(testData.username, testData.password)
    await page.waitForLoadState('networkidle')
    await expect(page.getByRole('link', { name: 'client brand banner' })).toBeVisible()
    await page.context().storageState({path:"userSession.json"})
    await browser.close();
}


