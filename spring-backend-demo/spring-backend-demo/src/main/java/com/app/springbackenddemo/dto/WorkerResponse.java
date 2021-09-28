package com.app.springbackenddemo.dto;

import com.app.springbackenddemo.entity.Employee;

public class WorkerResponse {

	
	private String userName;
	private Employee user;
	
	
	public WorkerResponse()  {}


	public WorkerResponse(String userName, Employee user) {
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


	public Employee getUser() {
		return user;
	}


	public void setUser(Employee user) {
		this.user = user;
	}


	@Override
	public String toString() {
		return "WorkerResponse [userName=" + userName + ", user=" + user + "]";
	}
	
	

}
