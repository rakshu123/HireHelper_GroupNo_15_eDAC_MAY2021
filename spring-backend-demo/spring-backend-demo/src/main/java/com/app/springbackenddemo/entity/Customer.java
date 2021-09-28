package com.app.springbackenddemo.entity;




import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;



//import lombok.AllArgsConstructor;
//import lombok.Data;
//import lombok.NoArgsConstructor;
//import lombok.ToString;

//@Data
//@AllArgsConstructor
//@NoArgsConstructor
//@ToString

@Entity
@Table
public class Customer extends BaseEntity{
	
	
	
	@Column
	private String fname;
	@Column
	private String mname;
	@Column
	private String lname;
	@Column
	private String email;
	@Column
	private String contact;
	@Column
	private String address;
	@Column
	private String gender;
	@Column
	private String password;
	
	 public Customer()
	 {}

	public Customer(String fname, String mname, String lname, String email, String contact, String address,
			String gender, String password) {
		super();
		this.fname = fname;
		this.mname = mname;
		this.lname = lname;
		this.email = email;
		this.contact = contact;
		this.address = address;
		this.gender = gender;
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

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	@Override
	public String toString() {
		return "Customer [fname=" + fname + ", mname=" + mname + ", lname=" + lname + ", email=" + email
				+ ", contact=" + contact + ", address=" + address + ", gender=" + gender + ", password=" + password
				+ "]";
	}
	
	 
//	@OneToMany(targetEntity= Employee.class,cascade=CascadeType.ALL)
//	@JoinColumn(name="c_fk",referencedColumnName ="id")
//	 List<Employee> employees = new ArrayList<> ();
	
//	
	
}
