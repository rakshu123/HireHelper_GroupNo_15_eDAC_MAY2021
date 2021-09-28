package com.app.springbackenddemo.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.springbackenddemo.entity.Admin;


public interface AdminRepository  extends JpaRepository<Admin , Integer>{

Optional<Admin> findByUsernameAndPassword(String username, String password);
	
	Admin findByUsername(String username);

}
