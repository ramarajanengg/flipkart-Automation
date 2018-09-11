package com.flipkart.test.runnerLibrary;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
        features = {"resources/featureFiles"},
        glue = {"com.flipkart.test"},
        plugin = { 
                    "pretty",
                    "html:target/cucumber-pretty",
                    "json:target/cucumber.json"
                },
        tags={"@Login, @PlaceOrderFlow"},
        monochrome = true
        )

public class CommonRunner {

}


