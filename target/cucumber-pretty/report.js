$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("01Login.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: Ramarajan Subburaj | ramarajanengg@gmail.com"
    }
  ],
  "line": 3,
  "name": "Flipkart Login",
  "description": "",
  "id": "flipkart-login",
  "keyword": "Feature",
  "tags": [
    {
      "line": 2,
      "name": "@tag"
    }
  ]
});
formatter.scenarioOutline({
  "line": 6,
  "name": "Successful Login",
  "description": "",
  "id": "flipkart-login;successful-login",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@TC001"
    },
    {
      "line": 5,
      "name": "@Login"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "Flipkart URL is Launched",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "Valid \"\u003cUsername\u003e\" and \"\u003cPassword\u003e\" is entered and Click Login",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Flipkart Home Page must be displayed",
  "keyword": "Then "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "flipkart-login;successful-login;",
  "rows": [
    {
      "cells": [
        "Username",
        "Password"
      ],
      "line": 12,
      "id": "flipkart-login;successful-login;;1"
    },
    {
      "cells": [
        "8778031582",
        "Test@123"
      ],
      "line": 13,
      "id": "flipkart-login;successful-login;;2"
    },
    {
      "cells": [
        "ramarajanengg@gmail.com",
        "Test@123"
      ],
      "line": 14,
      "id": "flipkart-login;successful-login;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 35898810134,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Successful Login",
  "description": "",
  "id": "flipkart-login;successful-login;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@Login"
    },
    {
      "line": 2,
      "name": "@tag"
    },
    {
      "line": 5,
      "name": "@TC001"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "Flipkart URL is Launched",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "Valid \"8778031582\" and \"Test@123\" is entered and Click Login",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Flipkart Home Page must be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefs.flipkart_URL_is_Launched()"
});
formatter.result({
  "duration": 943222996,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "8778031582",
      "offset": 7
    },
    {
      "val": "Test@123",
      "offset": 24
    }
  ],
  "location": "LoginStepDefs.valid_and_is_entered_and_Click_Login(String,String)"
});
formatter.result({
  "duration": 2235533912,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefs.flipkart_Home_Page_must_be_displayed()"
});
formatter.result({
  "duration": 5150365085,
  "status": "passed"
});
formatter.after({
  "duration": 7457957450,
  "status": "passed"
});
formatter.before({
  "duration": 24733674370,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Successful Login",
  "description": "",
  "id": "flipkart-login;successful-login;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@Login"
    },
    {
      "line": 2,
      "name": "@tag"
    },
    {
      "line": 5,
      "name": "@TC001"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "Flipkart URL is Launched",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "Valid \"ramarajanengg@gmail.com\" and \"Test@123\" is entered and Click Login",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Flipkart Home Page must be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefs.flipkart_URL_is_Launched()"
});
formatter.result({
  "duration": 297072670,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ramarajanengg@gmail.com",
      "offset": 7
    },
    {
      "val": "Test@123",
      "offset": 37
    }
  ],
  "location": "LoginStepDefs.valid_and_is_entered_and_Click_Login(String,String)"
});
formatter.result({
  "duration": 2080477709,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefs.flipkart_Home_Page_must_be_displayed()"
});
formatter.result({
  "duration": 5326013903,
  "status": "passed"
});
formatter.after({
  "duration": 7076837113,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 17,
  "name": "Invalid Logins",
  "description": "",
  "id": "flipkart-login;invalid-logins",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 16,
      "name": "@TC002"
    },
    {
      "line": 16,
      "name": "@Login"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "Flipkart URL is Launched",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "invalid \"\u003cUsername\u003e\" and invalid \"\u003cPassword\u003e\" is entered and Click Login",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "Login should not be successful",
  "keyword": "Then "
});
formatter.examples({
  "line": 22,
  "name": "",
  "description": "",
  "id": "flipkart-login;invalid-logins;",
  "rows": [
    {
      "cells": [
        "Username",
        "Password"
      ],
      "line": 23,
      "id": "flipkart-login;invalid-logins;;1"
    },
    {
      "cells": [
        "aba@gmail.com",
        "abac@123"
      ],
      "line": 24,
      "id": "flipkart-login;invalid-logins;;2"
    },
    {
      "cells": [
        "abvc@gmail",
        ""
      ],
      "line": 25,
      "id": "flipkart-login;invalid-logins;;3"
    },
    {
      "cells": [
        "",
        "hdjvlrv"
      ],
      "line": 26,
      "id": "flipkart-login;invalid-logins;;4"
    },
    {
      "cells": [
        "AND(",
        "dblue"
      ],
      "line": 27,
      "id": "flipkart-login;invalid-logins;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 25972607983,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Invalid Logins",
  "description": "",
  "id": "flipkart-login;invalid-logins;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 16,
      "name": "@Login"
    },
    {
      "line": 2,
      "name": "@tag"
    },
    {
      "line": 16,
      "name": "@TC002"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "Flipkart URL is Launched",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "invalid \"aba@gmail.com\" and invalid \"abac@123\" is entered and Click Login",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "Login should not be successful",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefs.flipkart_URL_is_Launched()"
});
formatter.result({
  "duration": 181613237,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "aba@gmail.com",
      "offset": 9
    },
    {
      "val": "abac@123",
      "offset": 37
    }
  ],
  "location": "LoginStepDefs.invalid_and_invalid_is_entered_and_Click_Login(String,String)"
});
formatter.result({
  "duration": 1793881263,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefs.login_should_not_be_successful()"
});
formatter.result({
  "duration": 429892255,
  "status": "passed"
});
formatter.after({
  "duration": 6769910078,
  "status": "passed"
});
formatter.before({
  "duration": 24587091761,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Invalid Logins",
  "description": "",
  "id": "flipkart-login;invalid-logins;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 16,
      "name": "@Login"
    },
    {
      "line": 2,
      "name": "@tag"
    },
    {
      "line": 16,
      "name": "@TC002"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "Flipkart URL is Launched",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "invalid \"abvc@gmail\" and invalid \"\" is entered and Click Login",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "Login should not be successful",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefs.flipkart_URL_is_Launched()"
});
formatter.result({
  "duration": 364853573,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abvc@gmail",
      "offset": 9
    },
    {
      "val": "",
      "offset": 34
    }
  ],
  "location": "LoginStepDefs.invalid_and_invalid_is_entered_and_Click_Login(String,String)"
});
formatter.result({
  "duration": 1218241985,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefs.login_should_not_be_successful()"
});
formatter.result({
  "duration": 248143779,
  "status": "passed"
});
formatter.after({
  "duration": 6985182229,
  "status": "passed"
});
formatter.before({
  "duration": 24607675923,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Invalid Logins",
  "description": "",
  "id": "flipkart-login;invalid-logins;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 16,
      "name": "@Login"
    },
    {
      "line": 2,
      "name": "@tag"
    },
    {
      "line": 16,
      "name": "@TC002"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "Flipkart URL is Launched",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "invalid \"\" and invalid \"hdjvlrv\" is entered and Click Login",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "Login should not be successful",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefs.flipkart_URL_is_Launched()"
});
formatter.result({
  "duration": 245504195,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 9
    },
    {
      "val": "hdjvlrv",
      "offset": 24
    }
  ],
  "location": "LoginStepDefs.invalid_and_invalid_is_entered_and_Click_Login(String,String)"
});
formatter.result({
  "duration": 1102055035,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefs.login_should_not_be_successful()"
});
formatter.result({
  "duration": 340855824,
  "status": "passed"
});
formatter.after({
  "duration": 7324376541,
  "status": "passed"
});
formatter.before({
  "duration": 24965248304,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Invalid Logins",
  "description": "",
  "id": "flipkart-login;invalid-logins;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 16,
      "name": "@Login"
    },
    {
      "line": 2,
      "name": "@tag"
    },
    {
      "line": 16,
      "name": "@TC002"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "Flipkart URL is Launched",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "invalid \"AND(\" and invalid \"dblue\" is entered and Click Login",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "Login should not be successful",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefs.flipkart_URL_is_Launched()"
});
formatter.result({
  "duration": 329185991,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "AND(",
      "offset": 9
    },
    {
      "val": "dblue",
      "offset": 28
    }
  ],
  "location": "LoginStepDefs.invalid_and_invalid_is_entered_and_Click_Login(String,String)"
});
formatter.result({
  "duration": 1159284245,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefs.login_should_not_be_successful()"
});
formatter.result({
  "duration": 283886225,
  "status": "passed"
});
formatter.after({
  "duration": 6785835122,
  "status": "passed"
});
formatter.uri("02Products.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: Ramarajan Subburaj | ramarajanengg@gmail.com"
    }
  ],
  "line": 3,
  "name": "Products Listing",
  "description": "Once the user login is successful, Products Page is displayed. \r\nThe user can search products by various brands, categories, names, offers etc.",
  "id": "products-listing",
  "keyword": "Feature",
  "tags": [
    {
      "line": 2,
      "name": "@Products"
    }
  ]
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 7,
      "value": "#Background: User is logged in"
    },
    {
      "line": 8,
      "value": "#Given Flipkart URL is Launched"
    },
    {
      "line": 9,
      "value": "#When Valid \"8778031582\" and \"Test@123\" is entered and Click Login"
    },
    {
      "line": 10,
      "value": "#And Flipkart Home Page must be displayed"
    }
  ],
  "line": 13,
  "name": "Search Products using Master Search Text Box",
  "description": "",
  "id": "products-listing;search-products-using-master-search-text-box",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 12,
      "name": "@TC003"
    },
    {
      "line": 12,
      "name": "@PlaceOrderFlow"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "Flipkart URL is Launched",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "Valid \"8778031582\" and \"Test@123\" is entered and Click Login",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Flipkart Home Page must be displayed",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Some \"\u003cText\u003e\" is entered at Master Search Text Box",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "Clicks on Search Submit button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Relevant Products must be listed",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "print the details of the product",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "add the product to cart",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "Place Order",
  "keyword": "Then "
});
formatter.examples({
  "line": 24,
  "name": "",
  "description": "",
  "id": "products-listing;search-products-using-master-search-text-box;",
  "rows": [
    {
      "cells": [
        "Text"
      ],
      "line": 25,
      "id": "products-listing;search-products-using-master-search-text-box;;1"
    },
    {
      "cells": [
        "Redmi Note 5 Pro (Black, 64 GB)"
      ],
      "line": 26,
      "id": "products-listing;search-products-using-master-search-text-box;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 24016281254,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Search Products using Master Search Text Box",
  "description": "",
  "id": "products-listing;search-products-using-master-search-text-box;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 12,
      "name": "@TC003"
    },
    {
      "line": 2,
      "name": "@Products"
    },
    {
      "line": 12,
      "name": "@PlaceOrderFlow"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "Flipkart URL is Launched",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "Valid \"8778031582\" and \"Test@123\" is entered and Click Login",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Flipkart Home Page must be displayed",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Some \"Redmi Note 5 Pro (Black, 64 GB)\" is entered at Master Search Text Box",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "Clicks on Search Submit button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Relevant Products must be listed",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "print the details of the product",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "add the product to cart",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "Place Order",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefs.flipkart_URL_is_Launched()"
});
formatter.result({
  "duration": 126002070,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "8778031582",
      "offset": 7
    },
    {
      "val": "Test@123",
      "offset": 24
    }
  ],
  "location": "LoginStepDefs.valid_and_is_entered_and_Click_Login(String,String)"
});
formatter.result({
  "duration": 1539821363,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefs.flipkart_Home_Page_must_be_displayed()"
});
formatter.result({
  "duration": 4992494816,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Redmi Note 5 Pro (Black, 64 GB)",
      "offset": 6
    }
  ],
  "location": "ProductsStepDefs.some_is_entered_at_Master_Search_Text_Box(String)"
});
formatter.result({
  "duration": 1390134889,
  "status": "passed"
});
formatter.match({
  "location": "ProductsStepDefs.clicks_on_Search_Submit_button()"
});
formatter.result({
  "duration": 538482251,
  "status": "passed"
});
formatter.match({
  "location": "ProductsStepDefs.relevant_Products_must_be_listed()"
});
formatter.result({
  "duration": 8111842987,
  "status": "passed"
});
formatter.match({
  "location": "ProductsStepDefs.print_the_details_of_the_product()"
});
formatter.result({
  "duration": 540524125,
  "status": "passed"
});
formatter.match({
  "location": "ProductsStepDefs.add_the_product_to_cart()"
});
formatter.result({
  "duration": 1502152359,
  "status": "passed"
});
formatter.match({
  "location": "ProductsStepDefs.place_Order()"
});
formatter.result({
  "duration": 19967509337,
  "status": "passed"
});
formatter.after({
  "duration": 7032002835,
  "status": "passed"
});
});