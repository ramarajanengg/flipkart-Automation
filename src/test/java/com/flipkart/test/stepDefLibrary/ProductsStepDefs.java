package com.flipkart.test.stepDefLibrary;

import static com.flipkart.test.helperLibrary.testHooksHelper.WEB_DRIVER;
import com.flipkart.test.pageObjectLibrary.ProductDetailsPage;
import com.flipkart.test.pageObjectLibrary.ProductsPage;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class ProductsStepDefs {

	ProductsPage productsPage = new ProductsPage(WEB_DRIVER);
	ProductDetailsPage prdDetailsPage = new ProductDetailsPage(WEB_DRIVER);

	@When("^Some \"([^\"]*)\" is entered at Master Search Text Box$")
	public void some_is_entered_at_Master_Search_Text_Box(String textToSearch) throws Throwable {
		productsPage.setMasterSearchText(textToSearch);
	}

	@When("^Clicks on Search Submit button$")
	public void clicks_on_Search_Submit_button() throws Throwable {
		productsPage.clickMasterSearchBtn();
	}

	@Then("^Relevant Products must be listed$")
	public void relevant_Products_must_be_listed() throws Throwable {
		System.out.println("Number of Results for Search String: " + productsPage.getNoOfResults());
		productsPage.SelectProduct();

		// Switch to Product Details Page
		prdDetailsPage.switchToProductDetailsPage();
	}

	@When("^the user wants to search by Menu$")
	public void the_user_wants_to_search_by_Menu() throws Throwable {
		productsPage.SearchbyMenu("Electronics", "Samsung");
	}

	@Then("^Matching Products must be listed$")
	public void matching_Products_must_be_listed() throws Throwable {
		if (productsPage.verifyProductsPane()) {
			System.out.println("Products are Listed.");
		}
	}

//	@When("^a product from the list is selected$")
//	public void a_product_from_the_list_is_selected() throws Throwable {
//		
//	}

	@Then("^print the details of the product$")
	public void print_the_details_of_the_product() throws Throwable {
		prdDetailsPage.PrintProductDetails();
	}

	@Then("^add the product to cart$")
	public void add_the_product_to_cart() throws Throwable {
		prdDetailsPage.AddToCart();
		prdDetailsPage.getNoOfProductsInCart();
	}

	@Then("^Place Order$")
	public void place_Order() throws Throwable {
		prdDetailsPage.PlaceOrder();
	}

	@Then("^Order creation should be successful$")
	public void order_creation_should_be_successful() throws Throwable {

	}
}
