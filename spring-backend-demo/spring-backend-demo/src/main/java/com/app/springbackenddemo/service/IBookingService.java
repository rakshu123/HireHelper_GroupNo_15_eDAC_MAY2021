package com.app.springbackenddemo.service;

import java.util.List;

import com.app.springbackenddemo.entity.Booking;
import com.app.springbackenddemo.entity.User;




public interface IBookingService {
	
	Booking addBooking(Booking booking);
	   Booking getDetails(int bookingId);
		List<Booking> getAllBooking();
		Booking update(Booking detachedUser);

}
