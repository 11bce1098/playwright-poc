import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login';
import {RecruitmentPage} from '../pages/recruitment';
import { PIMPage } from '../pages/pim';

const testData = JSON.parse(JSON.stringify(require("../testData.json")))

test.describe("Testing Orange HRM Application", ()=>{

    test('Validation of Recruitment Functionality @smoke', async ({ page }) => {
        const Login = new LoginPage(page);
        const Recruitment = new RecruitmentPage(page);
        var candidateName = testData.firstName + ' ' + testData.middleName + ' ' + testData.lastName;

        await Login.gotoLoginPage(testData.websiteURL);
        await page.waitForLoadState('networkidle')
        await expect(page.getByRole('link', { name: 'client brand banner' })).toBeVisible();
        await Recruitment.fillCandidateDetails(testData.firstName, testData.middleName, testData.lastName, testData.email, testData.contactNumber);
        await Recruitment.uploadResume(testData.resumePath);
        await Recruitment.selectDateOfApplication();
        await Recruitment.consentAndSaveForm(testData.keywords, testData.notes)
        await page.waitForLoadState('networkidle')
        await expect(page.getByRole('heading', { name: 'Application Stage' })).toBeVisible();
        await Recruitment.rejectTheCandidate();
        await page.waitForLoadState('networkidle')
        await expect(page.getByText('Status: Rejected')).toBeVisible();
        await Recruitment.searchCandidate(testData.firstName, candidateName);
        await page.waitForLoadState('networkidle')
        await Recruitment.downloadResume();
  
    });

    test('Validation of PIM Functionality @reg', async ({ page }) => {
        const Login = new LoginPage(page);
        const Pim = new PIMPage(page);

        await Login.gotoLoginPage(testData.websiteURL);
        await page.waitForLoadState('networkidle')
        await expect(page.getByRole('link', { name: 'client brand banner' })).toBeVisible();
        await Pim.addEmployeeDetails(testData.firstName, testData.middleName, testData.lastName, testData.username_pim, testData.password_pin);
        await page.waitForLoadState('networkidle')
        await expect(page.getByRole('heading', { name: 'Personal Details' })).toBeVisible();
      
      });
  
  });