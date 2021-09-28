package com.app.springbackenddemo.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.app.springbackenddemo.entity.Customer;

@Repository
//@Transactional

public interface CustomerRepository extends JpaRepository<Customer,Integer> {
	//@Query("select u.id from Customer u where u.email = :uemail and u.password = :upassword")
  //public Customer findByEmailandPassword(String email , String password);
	
	@Query("SELECT u FROM Customer u WHERE u.email = :email and u.password = :password")
	public Customer findByEmailandPassword(@Param("email") String email, 
	  @Param("password") String password);


}
