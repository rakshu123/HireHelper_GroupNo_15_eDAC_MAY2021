package com.app.springbackenddemo.dto;

import com.app.springbackenddemo.entity.User;

public class LoginResponse {
	private String userName;
	private User user;
	
	public LoginResponse() {}

	public LoginResponse(String userName, User user) {
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

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	@Override
	public String toString() {
		return "LoginResponse [userName=" + userName + ", user=" + user + "]";
	}
	
	
	

}
