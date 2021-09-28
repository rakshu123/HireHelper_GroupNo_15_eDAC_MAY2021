package com.app.springbackenddemo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.springbackenddemo.dto.LoginRequest;
import com.app.springbackenddemo.entity.Admin;
import com.app.springbackenddemo.service.IAdminService;

@RestController
@RequestMapping("/admin")
@CrossOrigin(origins = "http://localhost:3000")

public class AdminController {
	
	@Autowired
	private IAdminService service;
	
	public AdminController() {
		System.out.println("in constructor of " + getClass().getName());
	}
	
	@PostMapping("/login1")
	public ResponseEntity<?> validateUser(@RequestBody LoginRequest request) {
		System.out.println("in login user " + request);
		// invoke service layer's method for validating user details
		return ResponseEntity.ok(service.validateUser(request.getUsername() , request.getPassword()));
	}

	@GetMapping("/admin1")
	public List<Admin> fetchAllUsers() {
		System.out.println("In fetch all users");
		return service.getAllUsers();
	}


}
