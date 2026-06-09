import {Page, Locator } from '@playwright/test'

export class LogoutPage{
    //Variables
    private readonly page:Page;
    private readonly msgLogout:Locator;
    

    //Constructor
    constructor(page:Page)
    {
        this.page=page;
        this.msgLogout=page.locator('h1:has-text("Account Logout")');
    }

    //action methods
    async isMyLogoutPageExists():Promise<boolean>
    {
        try{
        const isVisible=await this.msgLogout.isVisible();
        return isVisible;
        }
        catch(error){
            console.log(`Exception occured msgLogout is not visible: ${error}`)
            return false;
        }
    }
}
