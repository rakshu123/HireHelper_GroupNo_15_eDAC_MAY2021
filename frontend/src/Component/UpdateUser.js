import React, { Component } from 'react'
import UserService from '../Service/UserService';

 class UpdateUser extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
        id: '',
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
 //  this.radioEventpro = this.radioEventpro(this);
  //  this.radioEvent = this.radioEvent.bind(this);
   // this.saveUser = this.saveUser.bind(this);
    this.updateUser = this.updateUser.bind(this);
    this.loadUser = this.loadUser.bind(this);
  }
  changeIDHandler= (event) =>{
    this.setState({id: event.target.value})
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

// onChange = (e) =>
//         this.setState({ [e.target.name]: e.target.value });

componentDidMount()
{
    this.loadUser();
}


   loadUser(){
       UserService.fetchUserById(window.localStorage.getItem("userId"))
       .then( (res) =>{
           let user = res.data;
           console.log(user);
           this.setState({
               id: user.id,
               fname: user.fname,
               mname: user.mname,
               lname: user.lname,
               email: user.email,
               address: user.address,
               contact: user.contact,
              gender: user.gender,
               username: user.username,
               password: user.password,
              role: user.role

           
           })
       }) ;

      
                
   }

  updateUser = (e) =>{
   // e.preventDefault();
    let user ={id: this.state.id,fname: this.state.fname, mname: this.state.mname, lname: this.state.lname, 
      email: this.state.email,username: this.state.username, contact: this.state.contact, address: this.state.address,
       password: this.state.password};
     //  alert('user =>' +JSON.stringify(user));


    UserService.editUser(user).then(res =>{
        this.setState({message : 'User details updated successfully.'});
      this.props.history.push('/list')
    })
 } 
  

  render() {
    return (
      
        <div className="update">
         <div className="container">
           <div className="row">
           <div className="card col-md-6 offset-md-3 offset-md-3">
       <div className="card-body">
         <h2>Update</h2>
         <form className="contact-form form-validate3" noValidate="novalidate">
        <div className="mb-3">
        <label style={{marginRight: '25rem'}}>ID</label>
         <div className="form-group">
           <input className="form-control" type="text" name="lname" value={this.state.id} onChange={this.changeIDHandler} readOnly="true" placeholder="Enter last name" id="lname"/>
         </div>
    
         <div className="form-group"> 

           <label for="exampleFormControlInput1" className="form-label" style={{marginRight: '25rem'}}>First Name</label>
           <input className="form-control" type="text" name="fname" onChange={this.changeFirstNameHandler} value={this.state.fname}  id="fname"/>
           </div>


         </div>
         <label style={{marginRight: '25rem'}}>Middle Name</label>
         <div className="form-group">
           <input className="form-control" type="text" name="mname" onChange={this.changeMiddletNameHandler} value={this.state.mname} placeholder="Enter middle name" id="mfname"/>

         </div>
         <label style={{marginRight: '25rem'}}>Last Name</label>
         <div className="form-group">
           <input className="form-control" type="text" name="lname" value={this.state.lname} onChange={this.changeLastNameHandler} placeholder="Enter last name" id="lname"/>
         </div>
    
         <label style={{marginRight: '25rem'}}>Email</label>
         <div className="form-group">
           <input className="form-control" type="text" name="email" value={this.state.email} onChange={this.changeEmailNameHandler} placeholder="Enter Email" id="email"/>
         </div>
         <label style={{marginRight: '25rem'}}>Username</label>
         <div className="form-group">
           <input className="form-control" type="text" name="username" defaultValue={this.state.username} onChange={this.changeUsernameNameHandler} placeholder="Enter Username" id="username"/>
         </div>

         <label style={{marginRight: '25rem'}}>Contact</label>
         <div className="form-group">
           <input className="form-control" type="text" name="contact" value={this.state.contact}  onChange={this.changeContactNameHandler} placeholder="Enter Contact Number" id="contact"/>
         </div>
         <label style={{marginRight: '25rem'}}>Address</label>
         <div className="form-group">
           <input className="form-control" type="text" name="address" value={this.state.address} onChange={this.changeAddressNameHandler} placeholder="Enter Address" id="address"/>
         </div>
         <label style={{marginRight: '25rem'}}>Password</label>
         <div className="form-group">
           <input className="form-control" type="password" name="password" value={this.state.password} onChange={this.changePasswordNameHandler} placeholder="Enter Password" id="password"/>
         </div>

         
                 <div className="form-group ">
         <label>Role</label>
         <div onChange={this.radioEventpro}>
         <input type="radio" name="role" id="role" value={this.state.role} value="CUSTOMER" style={{marginLeft: '.9rem'}}/>Customer
           
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
         {/* <input className="btn btn-primary" id="reg" type="submit" value="Update" onClick={this.updateUser} /> */}
         <button className="btn btn-success" onClick={this.updateUser}>Update</button>
         {'   '}
         <input className="btn btn-danger" id="reg" type="button" value="Cancel" style={{marginLeft: '.9rem'}}/>
        </div>

         </form>
         </div>
         </div>
       </div>
       </div>
   </div>

      
    )
  }
}
export default UpdateUser;

