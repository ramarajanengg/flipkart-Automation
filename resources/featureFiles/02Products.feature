#Author: Ramarajan Subburaj | ramarajanengg@gmail.com
@Products
Feature: Products Listing
  Once the user login is successful, Products Page is displayed. 
  The user can search products by various brands, categories, names, offers etc.

  #Background: User is logged in
  #Given Flipkart URL is Launched
  #When Valid "8778031582" and "Test@123" is entered and Click Login
  #And Flipkart Home Page must be displayed
  
  @TC003 @PlaceOrderFlow
  Scenario Outline: Search Products using Master Search Text Box
    Given Flipkart URL is Launched
    And Valid "8778031582" and "Test@123" is entered and Click Login
    And Flipkart Home Page must be displayed
    When Some "<Text>" is entered at Master Search Text Box
    And Clicks on Search Submit button
    Then Relevant Products must be listed
    Then print the details of the product
    Then add the product to cart
    Then Place Order

    Examples: 
      | Text                            |
      | Redmi Note 5 Pro (Black, 64 GB) |
			#| Mobile Phones 	|
			#|	Speakers			|
			#|	Sports				|
  
  #@TC004
  #Scenario: Select a Product from the list
    #When a product from the list is selected
    #Then print the details of the product

  #@TC005
  #Scenario: Add Product to Cart
    #When add the product to cart
    #And Place Order
    #Then Order creation should be successful

  @TC006
  Scenario: Search By Menu
    When the user wants to search by Menu
    Then Matching Products must be listed
