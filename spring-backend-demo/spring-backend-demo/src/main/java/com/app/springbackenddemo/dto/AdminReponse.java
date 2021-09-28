package com.app.springbackenddemo.dto;

import com.app.springbackenddemo.entity.Admin;

public class AdminReponse {
	
	private String userName;
	private Admin user;
	
	public AdminReponse()  {}

	public AdminReponse(String userName, Admin user) {
		super();
		this.userName = userName;
		this.user = user;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public Admin getUser() {
		return user;
	}

	public void setUser(Admin user) {
		this.user = user;
	}

	@Override
	public String toString() {
		return "AdminReponse [userName=" + userName + ", user=" + user + "]";
	}

	
	
}
