package com.app.springbackenddemo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.springbackenddemo.entity.Booking;

public interface BookingRepository extends JpaRepository<Booking , Integer> {

	//BookingResponse save(BookingRequest bookingRequest);

}
