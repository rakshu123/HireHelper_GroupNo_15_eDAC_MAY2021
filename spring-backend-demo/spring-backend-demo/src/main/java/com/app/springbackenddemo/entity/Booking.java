package com.app.springbackenddemo.entity;



import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;


@Entity
@Table(name="booking")
public class Booking extends BaseEntity{
	
	
	@Column
	private String fname;
	@Column
	private String ename;
	@Column
	private String elname;
	@Column
	private String econtact;
	@Column
	private String rate;
	@Column
	private String role;

	@Column
	private String lname;

	@Column
	private String email;
	@Column
	private String cont_num;
	@Column
	private String start_date;
	@Column
	private String end_date;
	@Column
	private String city;
	@Column
	private String address;
	@Column
	private Integer id;

//	@ManyToOne(fetch = FetchType.LAZY)
//	@JoinColumn(name="user_id")
//    private User user;
//	
//	@ManyToOne(fetch = FetchType.LAZY)
//	@JoinColumn(name="employee_id")
//    private Employee employee;
//
//	@ManyToMany
//	@JoinTable(name = "booking_driver", 
//	joinColumns = @JoinColumn(name = "booking_id"), 
//	inverseJoinColumns = @JoinColumn(name = "driver_id"))
//	private Set<Role> roles = new HashSet<>();
	
  public Booking() {
	  
  }

public Booking(String fname, String ename, String elname, String econtact, String rate, String role, String lname,
		String email, String cont_num, String start_date, String end_date, String city, String address, Integer id) {
	super();
	this.fname = fname;
	this.ename = ename;
	this.elname = elname;
	this.econtact = econtact;
	this.rate = rate;
	this.role = role;
	this.lname = lname;
	this.email = email;
	this.cont_num = cont_num;
	this.start_date = start_date;
	this.end_date = end_date;
	this.city = city;
	this.address = address;
	this.id = id;
}

public String getFname() {
	return fname;
}

public void setFname(String fname) {
	this.fname = fname;
}

public String getEname() {
	return ename;
}

public void setEname(String ename) {
	this.ename = ename;
}

public String getElname() {
	return elname;
}

public void setElname(String elname) {
	this.elname = elname;
}

public String getEcontact() {
	return econtact;
}

public void setEcontact(String econtact) {
	this.econtact = econtact;
}

public String getRate() {
	return rate;
}

public void setRate(String rate) {
	this.rate = rate;
}

public String getRole() {
	return role;
}

public void setRole(String role) {
	this.role = role;
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

public String getCont_num() {
	return cont_num;
}

public void setCont_num(String cont_num) {
	this.cont_num = cont_num;
}

public String getStart_date() {
	return start_date;
}

public void setStart_date(String start_date) {
	this.start_date = start_date;
}

public String getEnd_date() {
	return end_date;
}

public void setEnd_date(String end_date) {
	this.end_date = end_date;
}

public String getCity() {
	return city;
}

public void setCity(String city) {
	this.city = city;
}

public String getAddress() {
	return address;
}

public void setAddress(String address) {
	this.address = address;
}

public Integer getId() {
	return id;
}

public void setId(Integer id) {
	this.id = id;
}

@Override
public String toString() {
	return "Booking [fname=" + fname + ", ename=" + ename + ", elname=" + elname + ", econtact=" + econtact + ", rate="
			+ rate + ", role=" + role + ", lname=" + lname + ", email=" + email + ", cont_num=" + cont_num
			+ ", start_date=" + start_date + ", end_date=" + end_date + ", city=" + city + ", address=" + address
			+ ", id=" + id + "]";
}
  
  

}
