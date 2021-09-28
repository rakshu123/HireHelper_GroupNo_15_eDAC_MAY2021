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
import com.app.springbackenddemo.entity.User;
import com.app.springbackenddemo.repository.UserRepository;
import com.app.springbackenddemo.service.IUserService;


@RestController
@RequestMapping("/user")
@CrossOrigin
(origins = "http://localhost:3000")

public class UserController {
	
	@Autowired
	private IUserService service;
	@Autowired
	private UserRepository userRepo;
	
	public UserController() {
		System.out.println("in constructor of " + getClass().getName());
	}
	
	@PostMapping("/login")
	public ResponseEntity<?> validateUser(@RequestBody LoginRequest request) {
		System.out.println("in login user " + request);
		// invoke service layer's method for validating user details
		return ResponseEntity.ok(service.validateUser(request.getUsername() , request.getPassword()));
	}

	@GetMapping("/admin")
	public List<User> fetchAllUsers() {
		System.out.println("In fetch all users");
		return service.getAllUsers();
	}
	
	
	@PostMapping("/admin1")
	public User AllUsers(@RequestBody User user) {
		System.out.println("In fetch all users");
		return (User) service.addUser(user);
	}
	
	// update employee rest api
	
	@PutMapping("/users/{id}")
	public ResponseEntity<User> update(@PathVariable int id, @RequestBody User user){
		//() -> new ResourceNotFoundException("User not exist with id :" + id)
		//User user1 = service.getDetails(id);
				
//		User user1 = userRepo.findById(id)
//				.orElseThrow();
	//    user1.setFname(user.getFname());
//	    user1.setMname(user.getMname());
//	    user1.setLname(user.getLname());
//	 	user1.setUsername(user.getUsername());
//	    user1.setPassword(user.getPassword());
//		user1.setContact(user.getContact());
//		user1.setAddress(user.getAddress());
//		user1.setGender(user.getGender());	
//		user1.setEmail(user.getEmail());
//		user1.setRole(user.getRole());
//	
		user.setId(id);
		User updatedUser = service.update(user);
     	return ResponseEntity.ok(updatedUser);

        
//		User updatedUser = service.update(user);
//		return ResponseEntity.ok(updatedUser);
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<Map<String, Boolean>> delete(@PathVariable int id) {
		User user = userRepo.findById(id)
				.orElseThrow();
		userRepo.delete(user);
		Map<String , Boolean> response = new HashMap<>();
		return ResponseEntity.ok(response);
		
	}

	

//	// get User by id rest api
//		@GetMapping("/{id}")
//		public ResponseEntity<Optional<User>> getEmployeeById(@PathVariable Integer id) {
//			Optional<User> user = userRepo.findById(id);
//				
//			return ResponseEntity.ok(user);
//			
//	}
	
	
	// add REST API to get user details by id
		@GetMapping("/fetch/{id}")
		public ResponseEntity<?> getUserDetails(@PathVariable int id) {
			System.out.println("in get user details " + id);
			// invoke service method to get user details
			
				return ResponseEntity.ok(service.getDetails(id));
				
		}
			

	
	
		// add REST API to get user details by id
//		@GetMapping("/users/{id}")
//		public ResponseEntity<User> getUserDetails(@PathVariable int id) {
//			System.out.println("in get user details " + id);
//			// invoke service method to get user details
//			
//				return ResponseEntity.ok(service.getDetails(id));
//		}
		
		@PutMapping("/fetch/{id}")
		public ResponseEntity<?> updateUserDetails(@RequestBody User detachedUser, @PathVariable int id) {
			System.out.println("in update user " + detachedUser + " " + id);
//		
//				// invoke service layer method for validating user id
//				User existingUser = service.getDetails(id);
//				// => user is valid
//				// existingUser => user details fetched from DB (stale)
//				// detachedUser => updated user details from front end.
//			//	existingUser= service.update(detachedUser);
//				return ResponseEntity.ok(service.update(detachedUser));
//				
//				//return ResponseEntity.ok(detachedUser);
			try {
				// invoke service layer method for validating user id
				User existingUser = service.getDetails(id);
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
