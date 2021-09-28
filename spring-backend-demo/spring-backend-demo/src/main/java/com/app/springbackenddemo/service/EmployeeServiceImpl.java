package com.app.springbackenddemo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


import com.app.springbackenddemo.dto.WorkerResponse;
import com.app.springbackenddemo.entity.Employee;
import com.app.springbackenddemo.repository.EmployeeRepository;

@Service 
@Transactional 
public class EmployeeServiceImpl implements IEmployeeService {
	
	@Autowired 
	private EmployeeRepository employeeRepo;


	@Override
	public WorkerResponse validateUser(String userName, String password) {
		Employee user = employeeRepo.findByUsernameAndPassword(userName , password)
				.orElseThrow(() -> new RuntimeException("Incorrect UserName amd Password"));	
			return new WorkerResponse(user.getUsername() , employeeRepo.findByUsername(user.getUsername()));
		}
	

	@Override
	public List<Employee> getAllUsers() {
		return employeeRepo.findAll();
	}

	@Override
	public Employee addUser(Employee user) {
		// TODO Auto-generated method stub
		return employeeRepo.save(user);
	}


	@Override
	public Employee getDetails(int employeeId) {
		// TODO Auto-generated method stub
		return employeeRepo.findById(employeeId)
				.orElseThrow();
	}


	@Override
	public Employee update(Employee detachedUser) {
		// TODO Auto-generated method stub
			return employeeRepo.save(detachedUser);

	}

}
