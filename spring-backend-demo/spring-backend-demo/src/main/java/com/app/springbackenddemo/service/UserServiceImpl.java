package com.app.springbackenddemo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.springbackenddemo.dto.LoginResponse;
import com.app.springbackenddemo.entity.User;
import com.app.springbackenddemo.repository.UserRepository;
@Service 
@Transactional 

public class UserServiceImpl implements IUserService {
	
	@Autowired 
	private UserRepository userRepo;

	@Override
	public LoginResponse validateUser(String userName, String password) {
		User user = userRepo.findByUsernameAndPassword(userName , password)
			.orElseThrow(() -> new RuntimeException("Incorrect UserName amd Password"));	
		return new LoginResponse(user.getUsername() , userRepo.findByUsername(user.getUsername()));
	}

	@Override
	public List<User> getAllUsers() {
		return userRepo.findAll();

		
	}

	@Override
	public User addUser(User user) {
		// TODO Auto-generated method stub
		return userRepo.save(user);
	}

	@Override
	public User update(User detachedUser) {
		// TODO Auto-generated method stub
		return userRepo.save(detachedUser);
	}

	@Override
	public User getDetails(int userId) {
		// TODO Auto-generated method stub
		return userRepo.findById(userId)
				.orElseThrow();
	}

//	@Override
//	public User getDetails(int userId) {
//		// TODO Auto-generated method stub
//		return userRepo.findById(userId).
//				orElseThrow();
//
//	}


	
}
