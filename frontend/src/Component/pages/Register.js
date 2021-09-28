import React, { Component } from 'react'
import UserService from '../../Service/UserService';

export default class Register extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      fname: '',
      mname: '',
      lname: '',
      email: '',
      username: '',
      contact: '',
      address: '',
      password: '',
  
      role: '',
      gender: ''

       
    }
    // this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
    // this.changeMiddletNameHandler = this.changeMiddletNameHandler.bind(this);
    // this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
    // this.changeEmailNameHandler = this.changeEmailNameHandler.bind(this);
    // this.changeAddressNameHandler = this.changeAddressNameHandler.bind(this);
    // this.changeContactNameHandler = this.changeContactNameHandler.bind(this);
    // this.changePasswordNameHandler = this.changePasswordNameHandler.bind(this);
    // this.changeProofNameHandler = this.changeProofNameHandler.bind(this);
    this.radioEvent = this.radioEvent.bind(this);
    this.saveUser = this.saveUser.bind(this);
  }
  changeFirstNameHandler= (event) =>{
    this.setState({fname: event.target.value})
  }
  changeMiddletNameHandler= (event) =>{
    this.setState({mname: event.target.value})
  }
  changeLastNameHandler= (event) =>{
    this.setState({lname: event.target.value})
  }
  changeEmailNameHandler= (event) =>{
    this.setState({email: event.target.value})
  }
  changeUsernameNameHandler= (event) =>{
    this.setState({username: event.target.value})
  }

  changeContactNameHandler= (event) =>{
    this.setState({contact: event.target.value})
  }
  changeAddressNameHandler=(event) =>{
    this.setState({address: event.target.value})
  }
  changePasswordNameHandler=(event) =>{
    this.setState({password: event.target.value})
  }
 
 
    radioEvent= (event) =>{
    this.setState({gender: event.target.value})
  }
  radioEventpro= (event) =>{
    this.setState({role: event.target.value})

  }
  saveUser = (e) =>{
    e.preventDefault();
    let user ={fname: this.state.fname, mname: this.state.mname, lname: this.state.lname, email: this.state.email,username: this.state.username, contact: this.state.contact, address: this.state.address, password: this.state.password, role: this.state.role, gender: this.state.gender };
    console.log('user =>' +JSON.stringify(user));
    alert("Register successful");


    UserService.saveUser(user).then(res =>{
      this.props.history.push('/')
    })
  } 
  
  render() {
    return (
      <div>
        <div className="register">

         <div className="container">
       
         <div className="row">
        
         <div class="col-xl-6 d-none d-xl-block">
              <img
              src="https://mdbootstrap.com/img/Photos/new-templates/bootstrap-registration/img4.jpg"
               // src="images/hire.jfif"
                alt="Sample photo"
                class="img-fluid"
                style={{"border-top-left-radius": ".25rem","border-bottom-left-radius": ".25rem"}}
              />
            </div>
           
           {/* <div className="card col-md-6 offset-md-3 offset-md-3"> */}
      
           <div className="card-body">

         <h2>Register</h2>
         <form className="contact-form form-validate3" noValidate="novalidate">
        <div className="mb-3">
         <div className="form-group">
           <label for="exampleFormControlInput1" className="form-label" style={{marginRight: '25rem'}}>First Name</label>
           <input className="form-control" type="text" name="fname"  onChange={this.changeFirstNameHandler} placeholder="Enter first name" id="fname"/>
           </div>
         </div>
         <label style={{marginRight: '25rem'}}>Middle Name</label>
         <div className="form-group">
           <input className="form-control" type="text" name="mname" onChange={this.changeMiddletNameHandler} placeholder="Enter middle name" id="mfname"/>

         </div>
         <label style={{marginRight: '25rem'}}>Last Name</label>
         <div className="form-group">
           <input className="form-control" type="text" name="lname" onChange={this.changeLastNameHandler} placeholder="Enter last name" id="lname"/>
         </div>
    
         <label style={{marginRight: '25rem'}}>Email</label>
         <div className="form-group">
           <input className="form-control" type="text" name="email" onChange={this.changeEmailNameHandler} placeholder="Enter Email" id="email"/>
         </div>
         <label style={{marginRight: '25rem'}}>Username</label>
         <div className="form-group">
           <input className="form-control" type="text" name="username" onChange={this.changeUsernameNameHandler} placeholder="Enter Username" id="username"/>
         </div>

         <label style={{marginRight: '25rem'}}>Contact</label>
         <div className="form-group">
           <input className="form-control" type="text" name="contact" onChange={this.changeContactNameHandler} placeholder="Enter Contact Number" id="contact"/>
         </div>
         <label style={{marginRight: '25rem'}}>Address</label>
         <div className="form-group">
           <input className="form-control" type="text" name="address" onChange={this.changeAddressNameHandler} placeholder="Enter Address" id="address"/>
         </div>
         <label style={{marginRight: '25rem'}}>Password</label>
         <div className="form-group">
           <input className="form-control" type="password" name="password" onChange={this.changePasswordNameHandler} placeholder="Enter Password" id="password"/>
         </div>

         
                 <div className="form-group ">
         <label>Role</label>
         <div onChange={this.radioEventpro}>
         <input type="radio" name="role" id="role" value="CUSTOMER" style={{marginLeft: '.9rem'}}/>Customer
           
           </div>
         </div>

         <div className="form-group ">
         <label>Gender</label>
         <div onChange={this.radioEvent}>
           <input type="radio" name="gender" id="gender" value="Male"/>Male
           {' '} 
           <input  type="radio" name="gender" id="gender" value="Female"  style={{marginLeft: '.9rem'}}/>Female
           </div>
         </div>
        
        

       <div>   
         <input className="btn btn-primary" id="reg" type="button" value="Register" onClick={this.saveUser} />
         {'   '}
         <input className="btn btn-danger" id="reg" type="button" value="Cancel" style={{marginLeft: '.9rem'}}/>
        </div>

         </form>
         </div>
         </div>
       </div>
       </div>
   </div>

      // </div>
    )
  }
}
