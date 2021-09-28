package com.app.springbackenddemo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.app.springbackenddemo.entity.Customer;
import com.app.springbackenddemo.repository.CustomerRepository;
import com.app.springbackenddemo.service.CustomerService;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class HomeController {
	
	@Autowired
	private CustomerRepository customerRepository;


    @Autowired
	private CustomerService customerService ;

	
	//get all User
	@GetMapping("/users")
	public List<Customer> getAllCustomer()
	{
		return customerRepository.findAll();
	}
	
	
	//create user 
	@PostMapping("/users")
	public Customer createUser(@RequestBody Customer customer) 
	{
		return customerRepository.save(customer);
	}
	
	
	
//	//create user 
//	public Customer booking(@RequestBody BookingRequest request)
//	{
//		 return customerRepository.save(request.getCustomer());
//	}
//	
	
	@PostMapping("/login")
	public Customer loginUser(@RequestBody Customer customer) throws Exception
	{
//	String Emailid = customer.getEmail();
//	String tempass = customer.getPassword();
	Customer userObj = null;

	if(customer.getEmail()!= null &&  customer.getPassword()!= null )
	
	{
		userObj= customerService.fetchUserByEmailandPassword(customer.getEmail(), customer.getPassword());
	}
	if(userObj == null )
	{
		throw new Exception("Bad Credentials");
	}
	return userObj;
	}
	
//	@GetMapping("/login")
//	public Customer loginUser(@RequestBody String email, @RequestBody String password){
//		return customerService.fetchUserByEmailandPassword(email, password);
//		
//	}


}
