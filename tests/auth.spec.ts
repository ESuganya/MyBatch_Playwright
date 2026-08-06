import { TestConfig } from '../test.config';
import {test,expect} from '@playwright/test';
import { Homepage } from '../pages/HomePage';
import { LoginPage } from '../pages/LoginPage';
import { MyAccountPage } from '../pages/MyAccountPage';
import { LogoutPage } from '../pages/LogoutPage';



//intialize variable for each pages
//let homePage:Homepage;
let loginPage:LoginPage;  
let config1:TestConfig;
let myAccPage:MyAccountPage;
let logoutPage:LogoutPage;

//This hooks runs before each test
test.beforeEach(async({page})=>
{
    //Intialize the page
    config1=new TestConfig();
    homePage=new Homepage(page);
    loginPage=new LoginPage(page);
    myAccPage=new MyAccountPage(page);
    logoutPage=new LogoutPage(page);
    await page.goto(config.appURL);    
    
})

//This hooks runs aafter each test
test.afterEach(async({page})=>
{
    await page.close(); 
})

const config=new TestConfig();

test.describe('Authentication', () => {
    
  test('User Login Test @sanity @master', async({ })=>
{
    //Navigate to Login Page via homepage
    await homePage.clickMyAccount();
    await homePage.clickLogin();

    //give valid credentials
    //await pages.loginPage.login(config.email, config.pwd)
    await loginPage.login(config.email, config.pwd)

    //verify successfull Login
    const isloggedin=await myAccPage.isMyaccountPageExists();
   // expect(isloggedin).toBe(data.email)

})

  test('User Logout Test @sanity @master', async()=>
{
    //Navigate to Login Page via homepage
    await homePage.clickMyAccount();
    await homePage.clickLogin();

    //give valid credentials
    await loginPage.login(config.email, config.pwd)

    //verify successful page
    const isloggedin=await myAccPage.isMyaccountPageExists();
    expect(isloggedin).toBeTruthy();

    //Click on Logout
    //await homePage.clickMyAccount();
    await myAccPage.clickLogout();

    //Verify successfully logged out
    const msglogout=await logoutPage.isMyLogoutPageExists();
    expect(msglogout).toBeTruthy();
})

});



