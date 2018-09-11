package com.flipkart.test.pageObjectLibrary;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class LoginPage extends BasePage{

	public LoginPage(WebDriver driver) {
		super(driver);
	}

	@FindBy(how = How.CSS, using = "._2zrpKA")
	private WebElement txtUsername;
	
	@FindBy(how = How.CSS, using = "._2zrpKA._3v41xv")
	private WebElement txtPassword;
	
	@FindBy(how = How.CSS, using = "._2AkmmA._1LctnI._7UHT_c")
	private WebElement btnLogin;
	
	@FindBy(how = How.CSS, using = "._2AkmmA._1LctnI.jUwFiZ")
	private WebElement btnSignUp;
	
	@FindBy(how = How.CLASS_NAME, using = "_32LSmx")
	private WebElement frameLogin;
	
	@FindBy(how = How.CSS, using = ".ZAtlA->span")
	private WebElement errorSpan;
	
	
	
	public boolean isLoginPageDisplayed()
	{
		//class _32LSmx
		return frameLogin.isDisplayed();
	}
	
	public void setUsername(String Username)
	{
		txtUsername.sendKeys(Username);
	}
	
	public void setPassword(String Password)
	{
		txtPassword.sendKeys(Password);
	}
	
	public void clickLogin()
	{
		btnLogin.click();
		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
		//waitForPageLoad();
	}
	
	public void clickSignUp()
	{
		btnSignUp.click();
		//waitForPageLoad();
	}
	public boolean isErrorDisplayed()
	{
		System.out.println("Error Message-> "+ errorSpan.getText());
		return errorSpan.isDisplayed();
	}
	
}
