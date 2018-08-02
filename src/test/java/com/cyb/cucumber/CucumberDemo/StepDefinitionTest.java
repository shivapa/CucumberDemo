package com.cyb.cucumber.CucumberDemo;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class StepDefinitionTest {
	
	WebDriver driver;
	@Given("^URL opened$")
	public void url_opened()  {
	    
	System.setProperty("webdriver.chrome.driver", "src/test/resources/chromedriver.exe");
	driver=new ChromeDriver();
	driver.manage().window().maximize();
	driver.get("http://newtours.demoaut.com/");
	
	}

	@Then("^enter username$")
	public void enter_username()  {

		driver.findElement(By.name("userName")).sendKeys("mercury");;
		
	}

	@Then("^enter password$")
	public void enter_password()  {
	   driver.findElement(By.name("password")).sendKeys("mercury");
	}

	@Then("^Click on login$")
	public void click_on_login()  {
	 
		driver.findElement(By.name("login")).click();
		
	}

	@Then("^Close Browser$")
	public void Close_Browser(){
		
		driver.quit();
	}

}
