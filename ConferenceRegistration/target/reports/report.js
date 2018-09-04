$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("ConferenceRegistration.feature");
formatter.feature({
  "line": 3,
  "name": "Conference Registration",
  "description": "I want to register for a conference",
  "id": "conference-registration",
  "keyword": "Feature"
});
formatter.before({
  "duration": 168828,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "Registration for a conference",
  "description": "",
  "id": "conference-registration;registration-for-a-conference",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 6,
      "name": "@executeregistration"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "User is on Conference room booking page",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "User select \u0027Next\u0027 link without entering \u0027FirstName\u0027",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "\u0027Please fill the First Name\u0027 message should display",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "User select \u0027Next\u0027 link without entering \u0027LastName\u0027",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "\u0027Please fill the Last Name\u0027 message should display",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "User select \u0027Next\u0027 link without entering \u0027Email\u0027",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "\u0027Please fill the Email\u0027 message should display",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "User select \u0027Next\u0027 link without entering \u0027Contact No\u0027",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "\u0027Please fill the Contact No.\u0027 message should display",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "User select \u0027Next\u0027 link without selecting  \u0027Number of people attending\u0027",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "\u0027Please fill the Number of people attending\u0027 message should display",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "User select \u0027Next\u0027 link without entereing  \u0027Building Name \u0026 Room No\u0027",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "\u0027Please fill the Building \u0026 Room No\u0027 message should display",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "User select \u0027Next\u0027 link without entereing  \u0027Area Name\u0027",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "\u0027Please fill the Area name\u0027 message should display",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "User select \u0027Next\u0027 link without selecting  \u0027City\u0027",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "\u0027Please select city\u0027 message should display",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "User select \u0027Next\u0027 link without selecting  \u0027State\u0027",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "\u0027Please select state\u0027 message should display",
  "keyword": "Then "
});
formatter.step({
  "line": 36,
  "name": "User select \u0027Next\u0027 link without selecting  \u0027MemeberShip Status\u0027",
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "\u0027Please Select MemeberShip status\u0027 message should display",
  "keyword": "Then "
});
formatter.step({
  "line": 39,
  "name": "User select \u0027Next\u0027 link after entering Valid set of information",
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "\u0027Personal details are validated.\u0027 message should display",
  "keyword": "Then "
});
formatter.step({
  "line": 42,
  "name": "User select \u0027MakePayment\u0027 link without selecting  \u0027Card Holder name\u0027",
  "keyword": "When "
});
formatter.step({
  "line": 43,
  "name": "\u0027Please fill the Card holder name\u0027 message should display",
  "keyword": "Then "
});
formatter.step({
  "line": 45,
  "name": "User select \u0027MakePayment\u0027 link without selecting  \u0027Debit Card Number\u0027",
  "keyword": "When "
});
formatter.step({
  "line": 46,
  "name": "\u0027Please fill the Debit card Number\u0027 message should display",
  "keyword": "Then "
});
formatter.step({
  "line": 48,
  "name": "User select \u0027MakePayment\u0027 link without selecting  \u0027CVV\u0027",
  "keyword": "When "
});
formatter.step({
  "line": 49,
  "name": "\u0027Please fill the CVV\u0027 message should display",
  "keyword": "Then "
});
formatter.step({
  "line": 51,
  "name": "User select \u0027MakePayment\u0027 link without selecting  \u0027expiration month\u0027",
  "keyword": "When "
});
formatter.step({
  "line": 52,
  "name": "\u0027Please fill expiration month\u0027 message should display",
  "keyword": "Then "
});
formatter.step({
  "line": 54,
  "name": "User select \u0027MakePayment\u0027 link without selecting  \u0027expiration year\u0027",
  "keyword": "When "
});
formatter.step({
  "line": 55,
  "name": "\u0027Please fill the expiration year\u0027 message should display",
  "keyword": "Then "
});
formatter.step({
  "line": 57,
  "name": "User select \u0027MakePayment\u0027 link after entering Valid set of information",
  "keyword": "When "
});
formatter.step({
  "line": 58,
  "name": "\u0027Conference Room Booking successfully done!!!\u0027 message should display",
  "keyword": "Then "
});
formatter.match({
  "location": "ConferenceRegistrationStepDefinition.user_is_on_Conference_room_booking_page()"
});
formatter.result({
  "duration": 8368609813,
  "status": "passed"
});
formatter.match({
  "location": "ConferenceRegistrationStepDefinition.user_select_Next_link_without_entering_FirstName()"
});
formatter.result({
  "duration": 129775290,
  "status": "passed"
});
formatter.match({
  "location": "ConferenceRegistrationStepDefinition.please_fill_the_First_Name_message_should_display()"
});
formatter.result({
  "duration": 25224634,
  "status": "passed"
});
formatter.match({
  "location": "ConferenceRegistrationStepDefinition.user_select_Next_link_without_entering_LastName()"
});
formatter.result({
  "duration": 156262797,
  "status": "passed"
});
formatter.match({
  "location": "ConferenceRegistrationStepDefinition.please_fill_the_Last_Name_message_should_display()"
});
formatter.result({
  "duration": 5640084,
  "status": "passed"
});
formatter.match({
  "location": "ConferenceRegistrationStepDefinition.user_select_Next_link_without_entering_Email()"
});
formatter.result({
  "duration": 137621425,
  "status": "passed"
});
formatter.match({
  "location": "ConferenceRegistrationStepDefinition.please_fill_the_Email_message_should_display()"
});
formatter.result({
  "duration": 5589795,
  "status": "passed"
});
formatter.match({
  "location": "ConferenceRegistrationStepDefinition.user_select_Next_link_without_entering_Contact_No()"
});
formatter.result({
  "duration": 550681726,
  "status": "passed"
});
formatter.match({
  "location": "ConferenceRegistrationStepDefinition.please_fill_the_Contact_No_message_should_display()"
});
formatter.result({
  "duration": 6683840,
  "status": "passed"
});
formatter.match({
  "location": "ConferenceRegistrationStepDefinition.user_select_Next_link_without_selecting_Number_of_people_attending()"
});
formatter.result({
  "duration": 174955484,
  "status": "passed"
});
formatter.match({
  "location": "ConferenceRegistrationStepDefinition.please_fill_the_Number_of_people_attending_message_should_display()"
});
formatter.result({
  "duration": 6523735,
  "status": "passed"
});
formatter.match({
  "location": "ConferenceRegistrationStepDefinition.user_select_Next_link_without_entereing_Building_Name_Room_No()"
});
formatter.result({
  "duration": 189232475,
  "status": "passed"
});
formatter.match({
  "location": "ConferenceRegistrationStepDefinition.please_fill_the_Building_Room_No_message_should_display()"
});
formatter.result({
  "duration": 5811477,
  "status": "passed"
});
formatter.match({
  "location": "ConferenceRegistrationStepDefinition.user_select_Next_link_without_entereing_Area_Name()"
});
formatter.result({
  "duration": 216084835,
  "status": "passed"
});
formatter.match({
  "location": "ConferenceRegistrationStepDefinition.please_fill_the_Area_name_message_should_display()"
});
formatter.result({
  "duration": 6583262,
  "status": "passed"
});
formatter.match({
  "location": "ConferenceRegistrationStepDefinition.user_select_Next_link_without_selecting_City()"
});
formatter.result({
  "duration": 141581954,
  "status": "passed"
});
formatter.match({
  "location": "ConferenceRegistrationStepDefinition.please_select_city_message_should_display()"
});
formatter.result({
  "duration": 6912707,
  "status": "passed"
});
formatter.match({
  "location": "ConferenceRegistrationStepDefinition.user_select_Next_link_without_selecting_State()"
});
formatter.result({
  "duration": 176498540,
  "status": "passed"
});
formatter.match({
  "location": "ConferenceRegistrationStepDefinition.please_select_state_message_should_display()"
});
formatter.result({
  "duration": 6486276,
  "status": "passed"
});
formatter.match({
  "location": "ConferenceRegistrationStepDefinition.user_select_Next_link_without_selecting_MemberShip_Status()"
});
formatter.result({
  "duration": 180814171,
  "status": "passed"
});
formatter.match({
  "location": "ConferenceRegistrationStepDefinition.please_Select_MemeberShip_status_message_should_display()"
});
formatter.result({
  "duration": 4424933,
  "status": "passed"
});
formatter.match({
  "location": "ConferenceRegistrationStepDefinition.user_select_Next_link_after_entering_Valid_set_of_information()"
});
formatter.result({
  "duration": 130543482,
  "status": "passed"
});
formatter.match({
  "location": "ConferenceRegistrationStepDefinition.personal_details_are_validated_message_should_display()"
});
formatter.result({
  "duration": 1003692662,
  "status": "passed"
});
formatter.match({
  "location": "ConferenceRegistrationStepDefinition.user_select_Next_link_without_selecting_Card_Holder_name()"
});
formatter.result({
  "duration": 171982778,
  "status": "passed"
});
formatter.match({
  "location": "ConferenceRegistrationStepDefinition.please_fill_the_Card_holder_name_message_should_display()"
});
formatter.result({
  "duration": 4436222,
  "status": "passed"
});
formatter.match({
  "location": "ConferenceRegistrationStepDefinition.user_select_Next_link_without_selecting_Debit_Card_Number()"
});
formatter.result({
  "duration": 119674865,
  "status": "passed"
});
formatter.match({
  "location": "ConferenceRegistrationStepDefinition.please_fill_the_Debit_card_Number_message_should_display()"
});
formatter.result({
  "duration": 6387236,
  "status": "passed"
});
formatter.match({
  "location": "ConferenceRegistrationStepDefinition.user_select_MakePayment_link_without_selecting_CVV()"
});
formatter.result({
  "duration": 142719617,
  "status": "passed"
});
formatter.match({
  "location": "ConferenceRegistrationStepDefinition.please_fill_the_CVV_message_should_display()"
});
formatter.result({
  "duration": 5438414,
  "status": "passed"
});
formatter.match({
  "location": "ConferenceRegistrationStepDefinition.user_select_Next_link_without_selecting_expiration_month()"
});
formatter.result({
  "duration": 117269196,
  "status": "passed"
});
formatter.match({
  "location": "ConferenceRegistrationStepDefinition.please_fill_expiration_month_message_should_display()"
});
formatter.result({
  "duration": 5289086,
  "status": "passed"
});
formatter.match({
  "location": "ConferenceRegistrationStepDefinition.user_select_Next_link_without_selecting_expiration_year()"
});
formatter.result({
  "duration": 472708379,
  "status": "passed"
});
formatter.match({
  "location": "ConferenceRegistrationStepDefinition.please_fill_expiration_year_message_should_display()"
});
formatter.result({
  "duration": 4899601,
  "status": "passed"
});
formatter.match({
  "location": "ConferenceRegistrationStepDefinition.user_select_MakePayment_link_after_entering_Valid_set_of_information()"
});
formatter.result({
  "duration": 120001231,
  "status": "passed"
});
formatter.match({
  "location": "ConferenceRegistrationStepDefinition.conference_Room_Booking_successfully_done_message_should_display()"
});
formatter.result({
  "duration": 1016255202,
  "status": "passed"
});
formatter.after({
  "duration": 208836011,
  "status": "passed"
});
});