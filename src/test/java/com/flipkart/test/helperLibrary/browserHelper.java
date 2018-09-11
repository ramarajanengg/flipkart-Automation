package com.flipkart.test.helperLibrary;

import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;

import static com.flipkart.test.helperLibrary.testHooksHelper.WEB_DRIVER;

public class browserHelper {
	public static void setBrowserProp(String browserName)
    {
    	System.out.println("browserName: "+browserName);
    	
    	if (browserName.equalsIgnoreCase("chrome"))
    	{
        	System.setProperty("webdriver.chrome.driver", ".//resources/driverFiles/chromedriver.exe");
        	WEB_DRIVER = new ChromeDriver();
    	}
    	else if (browserName.equalsIgnoreCase("IE"))
    	{
        	System.setProperty("webdriver.ie.driver", ".//resources/driverFiles/IEDriverServer.exe");
        	WEB_DRIVER = new InternetExplorerDriver();
    	}
    	else if (browserName.equalsIgnoreCase("firefox"))
    	{
        	System.setProperty("webdriver.firefox.driver", ".//resources/driverFiles/geckodriver.exe");
        	WEB_DRIVER = new FirefoxDriver();
    	}

    }
}
