package com.app.springbackenddemo.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.Table;



@Entity
@Table
public class Employee extends BaseEntity {
	
		
	@Column
	private String ename;
	@Column
	private String emname;
	@Column
	private String elname;
	@Column
	private String eemail;
	@Column
	private String econtact;
	@Column
	private String address;
	@Column
	private String egender;
	@Column
	private String password;
	@Column(unique=true, length=20)
	private String username;
	
	@Enumerated(EnumType.STRING)
    @Column(length = 10)
    private Role role;
	@Column
	private String yr_exp;
	@Column
	private String rate;
	
	
	public Employee() {
	}


	public Employee(String ename, String emname, String elname, String eemail, String econtact, String address,
			String egender, String password, String username, Role role, String yr_exp, String rate) {
		super();
		this.ename = ename;
		this.emname = emname;
		this.elname = elname;
		this.eemail = eemail;
		this.econtact = econtact;
		this.address = address;
		this.egender = egender;
		this.password = password;
		this.username = username;
		this.role = role;
		this.yr_exp = yr_exp;
		this.rate = rate;
	}


	public String getEname() {
		return ename;
	}


	public void setEname(String ename) {
		this.ename = ename;
	}


	public String getEmname() {
		return emname;
	}


	public void setEmname(String emname) {
		this.emname = emname;
	}


	public String getElname() {
		return elname;
	}


	public void setElname(String elname) {
		this.elname = elname;
	}


	public String getEemail() {
		return eemail;
	}


	public void setEemail(String eemail) {
		this.eemail = eemail;
	}


	public String getEcontact() {
		return econtact;
	}


	public void setEcontact(String econtact) {
		this.econtact = econtact;
	}


	public String getAddress() {
		return address;
	}


	public void setAddress(String address) {
		this.address = address;
	}


	public String getEgender() {
		return egender;
	}


	public void setEgender(String egender) {
		this.egender = egender;
	}


	public String getPassword() {
		return password;
	}


	public void setPassword(String password) {
		this.password = password;
	}


	public String getUsername() {
		return username;
	}


	public void setUsername(String username) {
		this.username = username;
	}


	public Role getRole() {
		return role;
	}


	public void setRole(Role role) {
		this.role = role;
	}


	public String getYr_exp() {
		return yr_exp;
	}


	public void setYr_exp(String yr_exp) {
		this.yr_exp = yr_exp;
	}


	public String getRate() {
		return rate;
	}


	public void setRate(String rate) {
		this.rate = rate;
	}


	@Override
	public String toString() {
		return "Employee [ename=" + ename + ", emname=" + emname + ", elname=" + elname + ", eemail=" + eemail
				+ ", econtact=" + econtact + ", address=" + address + ", egender=" + egender + ", password=" + password
				+ ", username=" + username + ", role=" + role + ", yr_exp=" + yr_exp + ", rate=" + rate + "]";
	}



		}
	
	
	
	



