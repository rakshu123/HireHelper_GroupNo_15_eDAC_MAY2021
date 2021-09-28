package com.app.springbackenddemo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.springbackenddemo.entity.Customer;
import com.app.springbackenddemo.repository.CustomerRepository;

@Service
public class CustomerService {
	
	  @Autowired
	  private CustomerRepository  customerRepository;
	  
	public Customer fetchUserByEmailandPassword(String email , String password) {
		return customerRepository.findByEmailandPassword(email, password);
		}

}
