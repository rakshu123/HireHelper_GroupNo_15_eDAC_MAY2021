package com.app.springbackenddemo.service;

import java.util.List;

import com.app.springbackenddemo.dto.AdminReponse;
import com.app.springbackenddemo.entity.Admin;

public interface IAdminService {
	
	AdminReponse validateUser(String userName, String password);
	List<Admin> getAllUsers();
	Admin addUser(Admin user);


}
