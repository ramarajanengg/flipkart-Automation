package com.flipkart.test.stepDefLibrary;

import com.flipkart.test.pageObjectLibrary.LoginPage;
import com.flipkart.test.pageObjectLibrary.ProductsPage;

import static com.flipkart.test.helperLibrary.testHooksHelper.WEB_DRIVER;
import static org.junit.Assert.assertTrue;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginStepDefs {

	LoginPage loginPage = new LoginPage(WEB_DRIVER);
	ProductsPage productsPage = new ProductsPage(WEB_DRIVER);
	
	@Given("^Flipkart URL is Launched$")
	public void flipkart_URL_is_Launched() throws Throwable {
	    if(loginPage.isLoginPageDisplayed())
	    {
	    	System.out.println("Login Page is displayed.");
	    }
	    else
	    	System.out.println("Error in Login Page Load.");
	}

	@When("^Valid \"([^\"]*)\" and \"([^\"]*)\" is entered and Click Login$")
	public void valid_and_is_entered_and_Click_Login(String Username, String Password) throws Throwable {
	    loginPage.setUsername(Username);
	    loginPage.setPassword(Password);
	    loginPage.clickLogin();
	}

	@Then("^Flipkart Home Page must be displayed$")
	public void flipkart_Home_Page_must_be_displayed() throws Throwable {
	    assertTrue(productsPage.isMyAccountMenuDisplayed());
	}

	@When("^invalid \"([^\"]*)\" and invalid \"([^\"]*)\" is entered and Click Login$")
	public void invalid_and_invalid_is_entered_and_Click_Login(String Username, String Password) throws Throwable {
	    loginPage.setUsername(Username);
	    loginPage.setPassword(Password);
	    loginPage.clickLogin();
	}

	@Then("^Login should not be successful$")
	public void login_should_not_be_successful() throws Throwable {
	    assertTrue(loginPage.isErrorDisplayed());
	}
}
