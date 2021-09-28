package com.app.springbackenddemo.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.springbackenddemo.dto.LoginRequest;
import com.app.springbackenddemo.entity.Employee;
import com.app.springbackenddemo.entity.User;
import com.app.springbackenddemo.repository.EmployeeRepository;
import com.app.springbackenddemo.service.IEmployeeService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v2/")
public class EmployeeController {
	
	@Autowired
	private IEmployeeService service;
	@Autowired
	private EmployeeRepository employeeRepo;
	
	public EmployeeController() {
		System.out.println("in constructor of " + getClass().getName());
	}

	
	@PostMapping("/login")
	public ResponseEntity<?> validateUser(@RequestBody LoginRequest request) {
		System.out.println("in login user " + request);
		// invoke service layer's method for validating user details
		return ResponseEntity.ok(service.validateUser(request.getUsername() , request.getPassword()));
	}

	@GetMapping("/employee")
	public List<Employee> fetchAllUsers() {
		System.out.println("In fetch all users");
		return service.getAllUsers();
	}
	@PostMapping("/employee1")
	public Employee AllUsers(@RequestBody Employee user) {
		System.out.println("In fetch all users");
		return (Employee) service.addUser(user);
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<Map<String, Boolean>> delete(@PathVariable int id) {
		Employee employee = employeeRepo.findById(id)
				.orElseThrow();
		employeeRepo.delete(employee);
		Map<String , Boolean> response = new HashMap<>();
		return ResponseEntity.ok(response);
		
	}

	@GetMapping("/{id}")
	public ResponseEntity<?> getUserDetails(@PathVariable int id) {
		System.out.println("in get user details " + id);
		// invoke service method to get user details
		
			return ResponseEntity.ok(service.getDetails(id));
			
	}
	
	@PutMapping("/fetch/{id}")
	public ResponseEntity<?> updateEmployeeDetails(@RequestBody Employee detachedUser, @PathVariable int id) {
		System.out.println("in update employee " + detachedUser + " " + id);
//	
//			// invoke service layer method for validating user id
//			User existingUser = service.getDetails(id);
//			// => user is valid
//			// existingUser => user details fetched from DB (stale)
//			// detachedUser => updated user details from front end.
//		//	existingUser= service.update(detachedUser);
//			return ResponseEntity.ok(service.update(detachedUser));
//			
//			//return ResponseEntity.ok(detachedUser);
		try {
			// invoke service layer method for validating user id
			Employee existingUser = service.getDetails(id);
			// => user is valid
			// existingUser => user details fetched from DB (stale)
			// detachedUser => updated user details from front end.
			return ResponseEntity.ok(service.update(detachedUser));
		} catch (RuntimeException e) {
			System.out.println("err in get " + e);
			return new ResponseEntity<>( ("Updating User details failed"),
					HttpStatus.BAD_REQUEST);
		}


		 
	}



}
