package com.app.springbackenddemo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.springbackenddemo.dto.AdminReponse;
import com.app.springbackenddemo.dto.LoginResponse;
import com.app.springbackenddemo.entity.Admin;
import com.app.springbackenddemo.entity.User;
import com.app.springbackenddemo.repository.AdminRepository;

@Service 
@Transactional 

public class AdminServiceImpl implements IAdminService {

	@Autowired
	private AdminRepository adminRepo;
	
	@Override
	public AdminReponse validateUser(String userName, String password) {
		Admin user = adminRepo.findByUsernameAndPassword(userName , password)
				.orElseThrow(() -> new RuntimeException("Incorrect UserName amd Password"));	
			return new AdminReponse(user.getUsername() , adminRepo.findByUsername(user.getUsername()));
	}

	@Override
	public List<Admin> getAllUsers() {
		// TODO Auto-generated method stub
		return adminRepo.findAll();
	}

	@Override
	public Admin addUser(Admin user) {
		// TODO Auto-generated method stub
		return adminRepo.save(user);
	}

	

}
