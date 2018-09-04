Feature: Github
  I want to login to github account
  
     Scenario: Correct email address and correct password
    Given I have github login account
    When I enter email address and password
    Then the result should be logged in 

  Scenario: Correct email address and wrong password
    Given I have google login account
    When I enter valid email address and invalid password
    Then the result should be google login page


    #Examples: 
      #| name  | value | status  |
      #| name1 |     5 | success |
      #| name2 |     7 | Fail    |
