package com.app.springbackenddemo.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.stereotype.Repository;

import com.app.springbackenddemo.entity.Employee;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee,Integer> {
	
Optional<Employee> findByUsernameAndPassword(String username, String password);
	
Employee findByUsername(String username);


}
