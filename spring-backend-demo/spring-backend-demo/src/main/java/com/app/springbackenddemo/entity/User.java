package com.app.springbackenddemo.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.Table;

@Entity
@Table(name="usertable")
public class User extends BaseEntity {
	
	@Column(unique=true, length=20)
	private String username;
	@Column(length=20)
	private String password;
	@Column(length=20)
	private String fname;
	@Column(length=20)
	private String mname;
	@Column(length=20)
	private String lname;
	@Column(length=20)
	private String email;
	@Column(length=20)
	private String contact;
	@Column(length=20)
	private String address;
	
	@Column(length=20)
	private String gender;
	
	@Enumerated(EnumType.STRING)
    @Column(length = 10)
    private Role role;
	
	
	
	
	
      public User() {}

	public User(String username, String password, String fname, String mname, String lname, String email,
			String contact, String address, String gender, Role role) {
		super();
		this.username = username;
		this.password = password;
		this.fname = fname;
		this.mname = mname;
		this.lname = lname;
		this.email = email;
		this.contact = contact;
		this.address = address;
		this.gender = gender;
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

	public String getFname() {
		return fname;
	}

	public void setFname(String fname) {
		this.fname = fname;
	}

	public String getMname() {
		return mname;
	}

	public void setMname(String mname) {
		this.mname = mname;
	}

	public String getLname() {
		return lname;
	}

	public void setLname(String lname) {
		this.lname = lname;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getContact() {
		return contact;
	}

	public void setContact(String contact) {
		this.contact = contact;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public Role getRole() {
		return role;
	}

	public void setRole(Role role) {
		this.role = role;
	}

//	@Override
//	public String toString() {
//		return "User [username=" + username + ", password=" + password + ", fname=" + fname + ", mname=" + mname
//				+ ", lname=" + lname + ", email=" + email + ", contact=" + contact + ", address=" + address
//				+ ", gender=" + gender + ", role=" + role + "]";
//	}

	
}
