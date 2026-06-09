import {Page, Locator } from '@playwright/test'

export class MyAccountPage{
    //Variables
    private readonly page:Page;
    private readonly msgHeading:Locator;
    private readonly lnkLogout:Locator;

    //Constructor
    constructor(page:Page)
    {
        this.page=page;
        this.msgHeading=page.locator('h2:has-text("My Account")');
        //this.lnkLogout=page.locator('li[class="dropdown open"] li:nth-child(5) a:nth-child(1)');
        this.lnkLogout=page.getByRole('link', {name:'Logout'})
    }

    //action methods
    //Verify account Page exists
    async isMyaccountPageExists():Promise<boolean>
    {
        
        const isVisible=await this.msgHeading.isVisible();
        return isVisible;
       
    }

    //Click on Log out button
    async clickLogout()
    {
       
            await this.lnkLogout.click();
        
    }
}
