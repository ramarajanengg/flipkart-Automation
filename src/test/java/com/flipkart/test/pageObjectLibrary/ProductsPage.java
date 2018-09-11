package com.flipkart.test.pageObjectLibrary;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class ProductsPage extends BasePage{

	
	public ProductsPage(WebDriver driver) {
		super(driver);
	}

	@FindBy(how = How.CSS, using = "._2cyQi_")
	private WebElement dropDwnMyAccount;
	
	@FindBy(how = How.CSS, using = ".LM6RPg")
	private WebElement txtMasterSearchBox;
	
	@FindBy(how = How.CSS, using = ".vh79eN")
	private WebElement btnMasterSearch;
	
	@FindBy(how = How.CSS, using = "._2yAnYN")
	private WebElement NoOfResultsString;
	
	@FindBy(how = How.CSS, using = "._1QZ6fC._3Lgyp8")
	private WebElement searchByMenu_Electronics;
	
	@FindBy(how = How.CSS, using = "._2NTrR2")
	private WebElement productsPane;
	
	public boolean isMyAccountMenuDisplayed()
	{
		return dropDwnMyAccount.isDisplayed();
	}
	
	public void setMasterSearchText(String textToSearch)
	{
		txtMasterSearchBox.sendKeys(textToSearch);
	}
	
	public void clickMasterSearchBtn()
	{
		btnMasterSearch.click();
		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
	}
	public String getNoOfResults()
	{
		String resultsLine = NoOfResultsString.getText();
		String[] listStrings = resultsLine.split(" ");
//		for(String str : listStrings)
//		{
//			System.out.println(str);
//		}
		return listStrings[5];
	}
	
	public void SearchbyMenu(String Menu, String strText)
	{
		Actions action = new Actions(driver);
		if(Menu.equals("Electronics"))
		{
			action.moveToElement(searchByMenu_Electronics).build().perform();
			driver.findElement(By.partialLinkText(strText)).click();
		}
		else if(Menu.equals("Men"))
		{
			//Search by Menu - Men 
		}
		else if(Menu.equals("Women"))
		{
			//Search by Menu - Women
		}
		else
		{
			//Others
		}
	}
	
	public boolean verifyProductsPane()
	{
		return productsPane.isDisplayed();
	}
	
	public void SelectProduct()
	{
		driver.findElement(By.cssSelector("._1UoZlX")).click();
		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
	}
}
