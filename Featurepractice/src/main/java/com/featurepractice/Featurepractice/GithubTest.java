package com.featurepractice.Featurepractice;

import static org.junit.Assert.fail;

import org.junit.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.PendingException;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class GithubTest {
	static WebDriver driver;
	//static Logger logg=Logger.getLogger(AlertExample.class.getName());
	
	
	@Before
	public void initialization() 
	{
		System.setProperty("webdriver.chrome.driver", "D:\\srinivas\\selenium\\chromedriver.exe");
		driver=new ChromeDriver();
		driver.manage().window().maximize();
	}
	@Test
	public void test() {
		try {
			i_have_github_login_account();
			i_enter_email_address_and_password();
			
		} catch (Throwable e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}finally
		{
			System.out.println("Logged in!");
		}
	}
	@Given("^I have github login account$")
	public void i_have_github_login_account() throws Throwable {
		 driver.get("https://github.com/login");
	}

	@When("^I enter email address and password$")
	public void i_enter_email_address_and_password() throws Throwable {
		driver.findElement(By.id("login_field")).sendKeys("kakilari97");
		   driver.findElement(By.id("password")).sendKeys("kavyakilari5697");
		   driver.findElement(By.name("commit")).click();
	}

	@Then("^the result should be logged in$")
	public void the_result_should_be_logged_in() throws Throwable {
	   
	}

	@Given("^I have google login account$")
	public void i_have_google_login_account() throws Throwable {
		 driver.get("https://signincorp.capgemini.com");
	}

	@When("^I enter valid email address and invalid password$")
	public void i_enter_valid_email_address_and_invalid_password() throws Throwable {
	    
	}

	@Then("^the result should be google login page$")
	public void the_result_should_be_google_login_page() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    throw new PendingException();
	}
	
	@After
	public void close() {
		driver.close();
	}
}
