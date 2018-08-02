$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/Demo.feature");
formatter.feature({
  "line": 1,
  "name": "demotoursTesting",
  "description": "",
  "id": "demotourstesting",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "NewToursLogin",
  "description": "",
  "id": "demotourstesting;newtourslogin",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "URL opened",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "enter username",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "enter password",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Click on login",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "Close Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionTest.url_opened()"
});
formatter.result({
  "duration": 5064099733,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitionTest.enter_username()"
});
formatter.result({
  "duration": 92775422,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitionTest.enter_password()"
});
formatter.result({
  "duration": 61969296,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitionTest.click_on_login()"
});
formatter.result({
  "duration": 4006833573,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitionTest.Close_Browser()"
});
formatter.result({
  "duration": 607544797,
  "status": "passed"
});
});