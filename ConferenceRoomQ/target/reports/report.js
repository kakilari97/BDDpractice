$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 2,
  "name": "Login",
  "description": "to login to a site",
  "id": "login",
  "keyword": "Feature"
});
formatter.before({
  "duration": 122131,
  "status": "passed"
});
formatter.before({
  "duration": 2109077,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "Logging into a site",
  "description": "",
  "id": "login;logging-into-a-site",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@execute"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I have the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I have correct username and password",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "login to the site",
  "keyword": "Then "
});
formatter.match({
  "location": "ConferenceStepDefinition.i_have_the_login_page()"
});
formatter.result({
  "duration": 6943374113,
  "status": "passed"
});
formatter.match({
  "location": "ConferenceStepDefinition.i_have_correct_username_and_password()"
});
formatter.result({
  "duration": 9547771871,
  "status": "passed"
});
formatter.match({
  "location": "ConferenceStepDefinition.login_to_the_site()"
});
formatter.result({
  "duration": 50022579,
  "status": "passed"
});
formatter.after({
  "duration": 184924463,
  "status": "passed"
});
});