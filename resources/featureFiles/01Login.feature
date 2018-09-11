#Author: Ramarajan Subburaj | ramarajanengg@gmail.com
@tag
Feature: Flipkart Login

  @TC001 @Login
  Scenario Outline: Successful Login
    Given Flipkart URL is Launched
    When Valid "<Username>" and "<Password>" is entered and Click Login
    Then Flipkart Home Page must be displayed

    Examples: 
      | Username   | Password |
      | 8778031582 | Test@123 |
      | ramarajanengg@gmail.com | Test@123 | 

  @TC002 @Login
  Scenario Outline: Invalid Logins
  	Given Flipkart URL is Launched
  	When invalid "<Username>" and invalid "<Password>" is entered and Click Login
  	Then Login should not be successful
  	
  	Examples:
  	|	Username			| Password	|
  	| aba@gmail.com	|	abac@123	|
  	|	abvc@gmail		|						|
  	|								|	 hdjvlrv 	|
  	|	AND(					|	dblue			|