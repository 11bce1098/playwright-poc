Install Node.js
Install playwright using npm init playwright@latest
run tests using npx playwright test
run tests in headed mode: npx playwright test --headed --project=chromium
run a specific test file: npx playwright test tests/ukg.spec.js --headed --project=chromium
Playwright test generator -> npx playwright codegen

Install dependencies: npx playwright install
Run tests in Parallel chrome: npm run test:chrome - For tests only on chrome browser
Run tests in Parallel firefox: npm run test:firefox - For tests only on firefox browser
Run tests in Parallel safari: npm run test:safari - For tests only on safari browser
Run tests in Parallel edge: npm run test:edge - For tests only on edge browser
Run tests in Parallel on all browsers (chrome, safari, edge and firefox): npm run test  - For tests only on all browsers

Allure-test-report :
1.	Installation of "Allure-playwright" module: npm i -D @playwright/test allure-playwright
2.  Installing Allure command line: npm install -g allure-commandline --save-dev
3.  to run the test with Allure: npx playwright test 
4.  Generate allure report: allure generate my-allure-results -o allure-report --clean
5.  Open Allure Report: allure open allure-report
