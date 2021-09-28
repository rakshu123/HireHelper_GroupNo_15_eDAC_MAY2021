package com.app.springbackenddemo.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.Table;

@Entity
@Table(name="adminTable")

public class Admin extends BaseEntity {
	
	@Column(unique=true, length=20)
	private String username;
	@Column(length=20)
	private String password;
	
	@Enumerated(EnumType.STRING)
    @Column(length = 10)
    private Role role;
	
	public Admin() {}

	public Admin(String username, String password, Role role) {
		super();
		this.username = username;
		this.password = password;
		this.role = role;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public Role getRole() {
		return role;
	}

	public void setRole(Role role) {
		this.role = role;
	}

	@Override
	public String toString() {
		return "Admin [username=" + username + ", password=" + password + ", role=" + role + "]";
	}

	
	

}
