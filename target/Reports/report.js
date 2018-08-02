$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/demo.feature");
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
  "duration": 5037449048,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitionTest.enter_username()"
});
formatter.result({
  "duration": 73372579,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitionTest.enter_password()"
});
formatter.result({
  "duration": 61463589,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitionTest.click_on_login()"
});
formatter.result({
  "duration": 4777460718,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitionTest.Close_Browser()"
});
formatter.result({
  "duration": 601860105,
  "status": "passed"
});
});