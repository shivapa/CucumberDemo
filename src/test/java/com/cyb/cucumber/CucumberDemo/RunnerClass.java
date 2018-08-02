package com.cyb.cucumber.CucumberDemo;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)

	/*@CucumberOptions(

            features="src/test/java/demo.feature",

format={"pretty","html:target/Reports/cucmber.html"}

)*/

@CucumberOptions(plugin={"pretty","json:target/cucumber.json","html:target/cucumber-html-report_Login","junit:target/cucumber-junit-report.xml"}
,features = "src/test/resources/Demo.feature")
public class RunnerClass {

	
	
}
