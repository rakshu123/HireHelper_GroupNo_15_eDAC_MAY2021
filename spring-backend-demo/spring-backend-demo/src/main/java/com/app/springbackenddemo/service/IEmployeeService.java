package com.app.springbackenddemo.service;

import java.util.List;

import com.app.springbackenddemo.dto.WorkerResponse;
import com.app.springbackenddemo.entity.Employee;
import com.app.springbackenddemo.entity.User;

public interface IEmployeeService {
	
	WorkerResponse validateUser(String userName, String password);
	List<Employee> getAllUsers();
	Employee addUser(Employee user);
	Employee getDetails(int employeeId);
	
	Employee update(Employee detachedUser);


}
