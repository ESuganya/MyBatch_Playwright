import {Page, Locator } from '@playwright/test'

export class LoginPage{
    //Variables
    private readonly page:Page;
    private readonly txtEmail:Locator;
    private readonly txtPassword:Locator;
    private readonly btnLogin:Locator;
    private readonly txtErrorMessage:Locator
    
    //constructor
    constructor(page:Page)
    {
        this.page=page;
        this.txtEmail=page.locator('#input-email');
        this.txtPassword=page.locator('#input-password');
        this.btnLogin=page.locator('input[value="Login"]');
        this.txtErrorMessage=page.locator('.alert.alert-danger.alert-dismissible')
        
    }

    /* *
    * set the email in the email field
    * @param email - Email address to enter
    */
    async setEmail(email:string){
       
            await this.txtEmail.fill(email);
        
    }

    /* *
    * set the password in the email field
    * @param pwd - password to enter
    */

    async setPassword(pwd:string){
        
            await this.txtPassword.fill(pwd);
       
    }

    //Click the login button
    async clickLogin(){
       
            await this.btnLogin.click();            
        
        
    }

    //Perform complete login action
    async login(email:string, pwd:string){
       
            await this.setEmail(email)
            await this.setPassword(pwd)
            await this.clickLogin();
            
        
    }

    //Login error Mesaage
    async getLoginErrorMessage():Promise<string | null>
    {
                return (this.txtErrorMessage.textContent())
    }
}