exports.RecruitmentPage = class RecruitmentPage {
    constructor(page) {

        this.page = page
        this.recruitment_tab = page.getByRole('link', { name: 'Recruitment' })
        this.add_button = page.getByRole('button', { name: ' Add' })
        this.firstName_textbox = page.getByPlaceholder('First Name')
        this.middleName_textbox = page.getByPlaceholder('Middle Name')
        this.lastName_textbox = page.getByPlaceholder('Last Name')
        this.vacancy_dropdown = page.getByText('-- Select --')
        this.payrollAdmin_select = page.getByText('Payroll Administrator')
        this.email_textbox = page.getByPlaceholder('Type here')
        this.contactNumber_textbox = page.getByPlaceholder('Type here')
        this.resume_select = page.locator('input[type="file"]')
        this.keywords_textbox = page.getByPlaceholder('Enter comma seperated words...')
        this.notes_textbox = page.locator('textarea')
        this.consent_checkbox = page.locator('form span i')
        this.save_button = page.getByRole('button', { name: 'Save' })
        this.calendar_button = page.locator('form i')
        this.date_select = page.getByText('1', { exact: true })
        this.reject_button = page.getByRole('button', { name: 'Reject' })
        this.candidate_button = page.getByRole('link', { name: 'Candidates' })
        this.search_textbox = page.getByPlaceholder('Type for hints...')
        this.search_button = page.getByRole('button', { name: 'Search' })
        this.downloadResume_button = page.getByRole('button', { name: '' })
        
    }


    async fillCandidateDetails(firstName, middleName, lastName, email, contactNumber){
        await this.recruitment_tab.click();
        await this.add_button.click();
        await this.firstName_textbox.fill(firstName);
        await this.middleName_textbox.fill(middleName);
        await this.lastName_textbox.fill(lastName);
        await this.vacancy_dropdown.click();
        await this.payrollAdmin_select.click();
        await this.email_textbox.first().fill(email);
        await this.contactNumber_textbox.nth(1).fill(contactNumber);
        
    }

    async uploadResume(filePath){
        await this.resume_select.setInputFiles(filePath);
    }

    async selectDateOfApplication(){
        await this.calendar_button.nth(2).click();
        await this.date_select.click();
    }

    async consentAndSaveForm(keywords, notes){
        await this.keywords_textbox.fill(keywords);
        await this.notes_textbox.fill(notes);
        await this.consent_checkbox.click();
        await this.save_button.click();
    }

    async rejectTheCandidate(){
        await this.reject_button.click();
        await this.save_button.click();
    }

    async searchCandidate(firstName, fullName){
        await this.candidate_button.click();
        await this.search_textbox.fill(firstName);
        await this.page.keyboard.press('Backspace');
        await this.page.waitForTimeout(5000); 
        await this.page.getByText(fullName).first().click();
        await this.search_button.click();
    }

    async downloadResume(){
        const downloadPromise = this.page.waitForEvent('download');
        await this.downloadResume_button.first().click();
        const download = await downloadPromise;
        await download.saveAs('./downloads/' + download.suggestedFilename());
    }


}