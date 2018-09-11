package com.flipkart.test.helperLibrary;

import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.ui.WebDriverWait;
import static com.flipkart.test.helperLibrary.browserHelper.setBrowserProp;
import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;

public class testHooksHelper {
	public static WebDriver WEB_DRIVER;
    public static WebDriverWait WEB_DRIVER_WAIT;    
  
    @Before
    public void beforeScenario(Scenario scenario) {
    	
    	//setBrowserProp(PROPERTIES.getProperty(BROWSER_NAME_PROPERTY));
    	setBrowserProp("chrome");
    	WEB_DRIVER_WAIT = new WebDriverWait(WEB_DRIVER, 45);
    	WEB_DRIVER.manage().deleteAllCookies();
        WEB_DRIVER.manage().window().maximize();
        WEB_DRIVER.get("http://flipkart.com/");
    }

    @After
    public void afterScenario(Scenario scenario) throws InterruptedException {

        if (scenario.isFailed()) {
            byte[] screenshot = ((TakesScreenshot) WEB_DRIVER).getScreenshotAs(OutputType.BYTES);
            scenario.embed(screenshot, "image/png");
        }
        Thread.sleep(3000);
        WEB_DRIVER.quit();
    }

}
