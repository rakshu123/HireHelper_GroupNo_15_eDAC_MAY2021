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

import com.app.springbackenddemo.entity.Booking;
import com.app.springbackenddemo.entity.User;
import com.app.springbackenddemo.repository.BookingRepository;
import com.app.springbackenddemo.service.IBookingService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v3/")

public class BookingController {
	
	@Autowired
	private BookingRepository bookingRepo;

	@Autowired
	private IBookingService service;
	
	
	
	//get all User
	@GetMapping("/booking")
	public List<Booking> getAllBookings()
	{
		return service.getAllBooking() ;
	}
	
	
	
	@PostMapping("/booking")
	public Booking AllBooking(@RequestBody Booking booking) {
		System.out.println("In fetch all users");
		return service.addBooking(booking);
	}
	
	
	@GetMapping("/booking/{id}")
	public ResponseEntity<?> getBookingDetails(@PathVariable int id) {
		System.out.println("in get user details " + id);
		// invoke service method to get user details
		
			return ResponseEntity.ok(service.getDetails(id));
			
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<Map<String, Boolean>> delete(@PathVariable int id) {
		Booking booking = bookingRepo.findById(id)
				.orElseThrow();
	bookingRepo.delete(booking);
		Map<String , Boolean> response = new HashMap<>();
		return ResponseEntity.ok(response);
		
	}

	@PutMapping("/{id}")
	public ResponseEntity<?> updateUserDetails(@RequestBody Booking detachedUser, @PathVariable int id) {
		System.out.println("in update user " + detachedUser + " " + id);
	
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
			Booking existingUser = service.getDetails(id);
			// => user is valid
		// existingUser => user details fetched from DB (stale)
//			// detachedUser => updated user details from front end.
		return ResponseEntity.ok(service.update(detachedUser));
		} catch (RuntimeException e) {
			System.out.println("err in get " + e);
			return new ResponseEntity<>( ("Updating User details failed"),
					HttpStatus.BAD_REQUEST);
		}


		 
	}




}
