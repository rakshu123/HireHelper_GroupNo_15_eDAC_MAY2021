package com.app.springbackenddemo.service;

import java.util.List;

import com.app.springbackenddemo.dto.LoginResponse;
import com.app.springbackenddemo.entity.User;


public interface IUserService {
	
	LoginResponse validateUser(String userName, String password);
	List<User> getAllUsers();
	User addUser(User user);
	User update(User detachedUser);
   User getDetails(int userId);
  
//	void deleteById(int id);
}
