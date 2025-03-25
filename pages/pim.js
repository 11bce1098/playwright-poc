exports.PIMPage = class PIMPage {
    constructor(page) {

        this.page = page
        this.pim_tab = page.getByRole('link', { name: 'PIM' })
        this.add_button = page.getByRole('button', { name: ' Add' })
        this.firstName_textbox = page.getByPlaceholder('First Name')
        this.middleName_textbox = page.getByPlaceholder('Middle Name')
        this.lastName_textbox = page.getByPlaceholder('Last Name')
        this.employeeId_textbox = page.locator('form').getByRole('textbox')
        this.createLoginDetails_button = page.locator('form span')
        this.username_textbox = page.locator('div:nth-child(4) > .oxd-grid-2 > div > .oxd-input-group > div:nth-child(2) > .oxd-input')
        this.password_textbox = page.locator('input[type="password"]')
        this.save_button = page.getByRole('button', { name: 'Save' })
    }

    async addEmployeeDetails(firstName, middleName, lastName, username, password){
        
        var number = Math.floor(100000 + Math.random() * 900000)
        await this.pim_tab.click();
        await this.add_button.click();
        await this.firstName_textbox.fill(firstName);
        await this.middleName_textbox.fill(middleName);
        await this.lastName_textbox.fill(lastName);
        await this.employeeId_textbox.nth(4).fill(number.toString());
        await this.createLoginDetails_button.click();
        await this.username_textbox.fill(username+number.toString());
        await this.password_textbox.first().fill(password);
        await this.password_textbox.nth(1).fill(password);
        await this.save_button.click();
    }


}