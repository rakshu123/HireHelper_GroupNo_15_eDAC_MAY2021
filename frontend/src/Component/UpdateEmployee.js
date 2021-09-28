import React, { Component } from 'react'
import UserService from '../Service/UserService';

 class UpdateEmployee extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
        id: '',
      ename: '',
      emname: '',
      elname: '',
      eemail: '',
      username: '',
      econtact: '',
      address: '',
      password: '',
    rate: '',
     role: '',
      egender: '',
      yr_exp:""

       
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
    this.updateEmployee = this.updateEmployee.bind(this);
    this.loadUser = this.loadUser.bind(this);
  }
  changeFirstNameHandler= (event) =>{
    this.setState({ename: event.target.value})
  }
  changeMiddletNameHandler= (event) =>{
    this.setState({emname: event.target.value})
  }
  changeLastNameHandler= (event) =>{
    this.setState({elname: event.target.value})
  }
  changeEmailNameHandler= (event) =>{
    this.setState({eemail: event.target.value})
  }
  changeUsernameNameHandler= (event) =>{
    this.setState({username: event.target.value})
  }

  changeContactNameHandler= (event) =>{
    this.setState({econtact: event.target.value})
  }
  changeAddressNameHandler=(event) =>{
    this.setState({address: event.target.value})
  }
  changePasswordNameHandler=(event) =>{
    this.setState({password: event.target.value})
  }
  
  changeRateHandler= (event)=>{
    this.setState({rate: event.target.value})
  }
  changeRateHandler= (event)=>{
    this.setState({rate: event.target.value})
  }
  changeYearHandler= (event)=>{
    this.setState({yr_exp: event.target.value})
  }
 
 
  radioEvent= (event) =>{
    this.setState({egender: event.target.value})
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
       UserService.getEmployeeById(window.localStorage.getItem("userId"))
       .then( (res) =>{
           let user = res.data;
           console.log(user);
           this.setState({
               id: user.id,
               ename: user.ename,
               emname: user.emname,
               elname: user.elname,
               eemail: user.eemail,
               address: user.address,
               econtact: user.econtact,
              egender: user.egender,
               username: user.username,
               password: user.password,
               rate: user.rate,
               yr_exp: user.yr_exp,
              role: user.role

           
           })
       }) ;

      
                
   }

  updateEmployee = (e) =>{
   // e.preventDefault();
   let user ={id: this.state.id,ename: this.state.ename, emname: this.state.emname, elname: this.state.elname, eemail: this.state.eemail,
     econtact: this.state.econtact, address: this.state.address, username: this.state.username,password: this.state.password,
      egender: this.state.egender, role: this.state.role, rate:this.state.rate, yr_exp:this.state.yr_exp };

     //  alert('user =>' +JSON.stringify(user));


    UserService.editEmployee(user).then(res =>{
        this.setState({message : 'User details updated successfully.'});
      this.props.history.push('/list')
    })
 } 
  

  render() {
    return (
        <div className="employee">
        <div className="container">
     
     
          <div className="row">
         
           <div className="card col-md-6 offset-md-3 offset-md-3"> 
      <div className="card-body">
    
        <form className="contact-form form-validate3" noValidate="novalidate">
       <div className="mb-3">
       <div className="form-group">
          <label for="exampleFormControlInput1" className="form-label" style={{marginRight: '25rem'}}>ID</label>
          <input className="form-control" type="text" name="id" onChange={this.changeFirstNameHandler}  value={this.state.id}  readonly="true" placeholder="" id="id"/>
          </div>
        <div className="form-group">
          <label for="exampleFormControlInput1" className="form-label" style={{marginRight: '25rem'}}>First Name</label>
          <input className="form-control" type="text" name="ename" onChange={this.changeFirstNameHandler} value={this.state.ename} placeholder="Enter first name" id="ename"/>
          </div>
        </div>
        <label style={{marginRight: '25rem'}}>Middle Name</label>
        <div className="form-group">
          <input className="form-control" type="text" name="emname" onChange={this.changeMiddletNameHandler} value={this.state.emname} placeholder="Enter middle name" id="emname"/>

        </div>
        <label style={{marginRight: '25rem'}}>Last Name</label>
        <div className="form-group">
          <input className="form-control" type="text" name="elname" onChange={this.changeLastNameHandler} value={this.state.elname} placeholder="Enter last name" id="elname"/>
        </div>
   
        <label style={{marginRight: '25rem'}}>Email</label>
        <div className="form-group">
          <input className="form-control" type="text" name="eemail" onChange={this.changeEmailNameHandler} value={this.state.eemail} placeholder="Enter Email" id="eemail"/>
        </div>
        <label style={{marginRight: '25rem'}}>Username</label>
        <div className="form-group">
          <input className="form-control" type="text" name="username" onChange={this.changeUsernameNameHandler} value={this.state.username} placeholder="Enter Username" id="username"/>
        </div>

        <label style={{marginRight: '25rem'}}>Contact</label>
        <div className="form-group">
          <input className="form-control" type="text" name="econtact" onChange={this.changeContactNameHandler} value={this.state.econtact} placeholder="Enter Contact Number" id="econtact"/>
        </div>
        <label style={{marginRight: '25rem'}}>Address</label>
        <div className="form-group">
          <input className="form-control" type="text" name="address" onChange={this.changeAddressNameHandler} value={this.state.address} placeholder="Enter Address" id="address"/>
        </div>
       
        <label style={{marginRight: '25rem'}}>Password</label>
        <div className="form-group">
          <input className="form-control" type="password" name="password" onChange={this.changePasswordNameHandler} value={this.state.password} placeholder="Enter Password" id="password"/>
        </div>

               <label style={{marginRight: '20rem'}}><b>Rate</b></label>
        <div className="form-group g-3 ">
          <input className="form-control" type="text" name="rate"  onChange={this.changeRateHandler} value={this.state.rate} placeholder="Enter id_proof Number" id="rate"/>
        </div>
        <label style={{marginRight: '20rem'}}><b>Year of Experience</b></label>
        <div className="form-group g-3 ">
          <input className="form-control" type="text" name="yr_exp"  onChange={this.changeYearHandler} value={this.state.yr_exp} placeholder="Enter year of experience" id="yr_exp"/>
        </div>


        <div className="form-group ">
        <label>Role</label>
        <div onChange={this.radioEventpro}>
          <input type="radio" name="role"  value={this.state.role} id="role" value="DRIVER"/>Driver
          {' '} 
          <input  type="radio" name="role" id="role" value={this.state.role} value="MAID"  style={{marginLeft: '.9rem'}}/>Maid
          {' '} 
          <input type="radio" name="role" id="role" value={this.state.role} value="LABOUR" style={{marginLeft: '.9rem'}}/>Labour
          </div>
        </div>
     

        <div className="form-group ">
        <label>Gender</label>
        <div onChange={this.radioEvent}>
          <input type="radio" name="egender" value={this.state.egender} id="egender" value="Male"/>Male
          {' '} 
          <input  type="radio" name="egender" value={this.state.egender} id="egender" value="Female"  style={{marginLeft: '.9rem'}}/>Female
          </div>
        </div>
       
       

      <div>   
        <input className="btn btn-primary" id="reg" type="button" value="Update" onClick={this.updateEmployee} />
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
export default UpdateEmployee;

