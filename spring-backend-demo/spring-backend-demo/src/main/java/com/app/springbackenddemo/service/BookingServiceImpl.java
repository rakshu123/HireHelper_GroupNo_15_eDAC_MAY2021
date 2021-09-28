package com.app.springbackenddemo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.springbackenddemo.entity.Booking;
import com.app.springbackenddemo.repository.BookingRepository;

@Service 
@Transactional 
public class BookingServiceImpl implements IBookingService {
	@Autowired
	private BookingRepository bookingRepo;


	@Override
	public Booking addBooking(Booking booking) {
		// TODO Auto-generated method stub
		return bookingRepo.save(booking);
	}


	@Override
	public Booking getDetails(int bookingId) {
		// TODO Auto-generated method stub
		return bookingRepo.findById(bookingId)
				.orElseThrow();	

}


	@Override
	public List<Booking> getAllBooking() {
		// TODO Auto-generated method stub
		return bookingRepo.findAll();
	}


	@Override
	public Booking update(Booking detachedUser) {
		// TODO Auto-generated method stub
		return bookingRepo.save(detachedUser);
	}
}
