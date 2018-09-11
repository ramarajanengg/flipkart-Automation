package com.flipkart.test.pageObjectLibrary;

import static org.junit.Assert.assertEquals;

import java.util.ArrayList;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class ProductDetailsPage extends BasePage{

	public ProductDetailsPage(WebDriver driver) {
		super(driver);
	}
	
	@FindBy(how = How.CSS, using = "._35KyD6")
	private WebElement productName;
	
	@FindBy(how = How.CSS, using = "._1vC4OE._3qQ9m1")
	private WebElement getPrice;
	
	@FindBy(how = How.CSS, using = ".hGSR34._2beYZw")
	private WebElement rating;
	
	@FindBy(how = How.CSS, using = "._2-riNZ")
	private WebElement highLights;
	
	@FindBy(how = How.CSS, using = "._2AkmmA._2Npkh4._2MWPVK")
	private WebElement btnAddToCart;
	
	@FindBy(how = How.CSS, using = "._1WMqsr")
	private WebElement itemsInCart;
	
	@FindBy(how = How.CSS, using = "._2AkmmA._14O7kc._7UHT_c")
	private WebElement btnPlaceOrder;
	
	@FindBy(how = How.CSS, using = "._2AkmmA._2Q4i61._7UHT_c")
	private WebElement btnContinue;

	//Switch to Product Details Page
	String oldTab = driver.getWindowHandle();
	
	public void switchToProductDetailsPage()
	{
		System.out.println("The Current URL: "+ driver.getTitle());
		ArrayList<String> newTab = new ArrayList<String>(driver.getWindowHandles());
		newTab.remove(oldTab);
		driver.switchTo().window(newTab.get(0));
		System.out.println("New Tab: "+driver.getTitle());
		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
	}
	
	public void PrintProductDetails()
	{
		//Print Product Details
		//Product Name
		//System.out.println("Product Name: "+driver.findElement(By.cssSelector("._35KyD6")).getText());
		productName.getText();
		//GetPrice
		//System.out.println("Price: "+ driver.findElement(By.cssSelector("._1vC4OE._3qQ9m1")).getText());
		getPrice.getText();
		//Rating
		//System.out.println("Rating: "+ driver.findElement(By.cssSelector(".hGSR34._2beYZw")).getText());
		rating.getText();
		
		//Highlights
		//System.out.println("Highlights: "+ driver.findElement(By.cssSelector("._2-riNZ")).getText());
		highLights.getText();
	}
	
	public void AddToCart()
	{
		//Add To Cart
		//driver.findElement(By.cssSelector("._2AkmmA._2Npkh4._2MWPVK")).click();
		btnAddToCart.click();
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);

	}
	public void getNoOfProductsInCart()
	{
		String noOfItems = itemsInCart.getText();
		System.out.println("No. of Items in the Cart: " + noOfItems.substring(9, 10));
	}

	public void PlaceOrder()
	{

		//Place Order
		//driver.findElement(By.cssSelector("._2AkmmA._14O7kc._7UHT_c")).click();
		btnPlaceOrder.click();
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		
		assertEquals(driver.getTitle(), "Flipkart.com: Secure Payment: Login > Select Shipping Address > Review Order > Place Order");
		
		//driver.findElement(By.cssSelector("._2AkmmA._2Q4i61._7UHT_c")).click();
		btnContinue.click();
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
	}
}
