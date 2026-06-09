import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { DataProvider } from '../utils/dataProvider';
import { TestConfig } from '../test.config';
import { Homepage } from '../pages/HomePage';
import { MyAccountPage } from '../pages/MyAccountPage';


//Load JSON test data logindata.json

const jsonPath="data/logintestdata.json";
const jsonTestData:any=DataProvider.getTestDataFromJson(jsonPath);


for(const data of jsonTestData)
{
   test(`Login Test with JSON Data: ${data.testName} @datadriven @master @regression `, async({page})=>{

        const config = new TestConfig(); // create instance
        await page.goto(config.appURL);    // getting appURL from test.config.ts file

        const homePage = new Homepage(page);
        await homePage.clickMyAccount();
        await homePage.clickLogin();

        const loginPage = new LoginPage(page);
        await loginPage.login(data.email, data.password);

        if(data.expected.toLowerCase()==='success')
        {
            const myAccountPage=new MyAccountPage(page);
            const isLoggedIn=await myAccountPage.isMyaccountPageExists();
            expect(isLoggedIn).toBeTruthy();

        }
        else{
            const errorMessage=await loginPage.getLoginErrorMessage();
            //expect(errorMessage).toBe('Warning: No match for E-Mail Address and/or Password.');
            expect(errorMessage).toContain('Warning: No match');
        }
    })

}






