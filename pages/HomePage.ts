import {Page, Locator } from '@playwright/test'

export class Homepage{
    //Variables
    private readonly page:Page;
    private readonly linkMyAccount:Locator;
    private readonly linkLogin:Locator;
    private readonly txtSearchbox:Locator;
    private readonly btnSearch:Locator;

    //Constructor
    constructor(page:Page)
    {
        this.page=page;
        this.linkMyAccount=page.locator('span:has-text("My Account")');
        this.linkLogin=page.locator('a:has-text("Login")');
        this.txtSearchbox=page.locator("input[placeholder='Search']")
        this.btnSearch=page.locator("button[class='btn btn-default btn-lg']")
    }
    
    //Action Methods
    async isHomePageexists():Promise<boolean>
    {
        let title=await this.page.title();
        if(title=="Your Store")
        {
            return true;
        }
        return false;
    }

    //Click "My Account" Link
    async clickMyAccount(){
       
            await this.linkMyAccount.click();
        
    }


    //Click "Login" Link
     async clickLogin(){
        
            await this.linkLogin.click();
         
    }

    //Enter Product Name in the Search box
    async enterProductName(pName:string){
       
            await this.txtSearchbox.fill(pName)
    }

    //Click Search Buuton
    async clickSearch(){
       
            await this.btnSearch.click();
       
    }


}