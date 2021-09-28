import React, { Component } from 'react'
import UserService from '../../Service/UserService';

export default class worker extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            ename: '',
            emname: '',
            elname: '',
            eemail: '',
            econtact: '',
            address: '',
            username: '',
            password: '',
            egender: '',
            role: '',
            yr_exp: '',
            rate: ''
      
        }
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeMiddletNameHandler = this.changeMiddletNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.changeEmailNameHandler = this.changeEmailNameHandler.bind(this);
        this.changeAddressNameHandler = this.changeAddressNameHandler.bind(this);
        this.changeContactNameHandler = this.changeContactNameHandler.bind(this);
        this.changePasswordNameHandler = this.changePasswordNameHandler.bind(this);
        this.changeRateHandler = this.changeRateHandler.bind(this);
        this.radioEvent = this.radioEvent.bind(this);
        this.radioEventpro = this.radioEventpro.bind(this)
        this.saveUser = this.saveUser.bind(this);
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
      
      saveUser = (e) =>{
        e.preventDefault();
        let user ={ename: this.state.ename, emname: this.state.emname, elname: this.state.elname, eemail: this.state.eemail, econtact: this.state.econtact, address: this.state.address, username: this.state.username,password: this.state.password, egender: this.state.egender, role: this.state.role, rate:this.state.rate, yr_exp:this.state.yr_exp };
        console.log('user =>' +JSON.stringify(user));
        alert("Register successfully!!!! our team will get back to you...");

    
        UserService.createEmployee(user).then(res =>{
          this.props.history.push('/workerlogin')
        })
      } 
     
    render() {
        return (
            <div>
                 <div className="worker">
         <div className="container">
           <div className="row">
           <div class="col-xl-6 d-none d-xl-block">
              <img
               // src="https://mdbootstrap.com/img/Photos/new-templates/bootstrap-registration/img4.jpg"
             //  src="images/hire.jfif"
               // src="https://mdbootstrap.com/img/Photos/new-templates/bootstrap-registration/img4.jpg" class="img-rounded" 

               // alt="Sample photo"class="img-fluid"
              //   class="img-rounded"
              //  style={{"border-top-left-radius": ".25rem","border-bottom-left-radius": ".25rem"}}
              />
            </div> 
        
            <div className="card col-md-6 offset-md-3 offset-md-3"> 
       <div className="card-body">
         <h2>Worker Registration</h2>
         <form className="contact-form form-validate3" noValidate="novalidate">
        <div className="mb-3">
         <div className="form-group">
           <label for="exampleFormControlInput1" className="form-label" style={{marginRight: '25rem'}}>First Name</label>
           <input className="form-control" type="text" name="ename" onChange={this.changeFirstNameHandler} placeholder="Enter first name" id="ename"/>
           </div>
         </div>
         <label style={{marginRight: '25rem'}}>Middle Name</label>
         <div className="form-group">
           <input className="form-control" type="text" name="emname" onChange={this.changeMiddletNameHandler} placeholder="Enter middle name" id="emname"/>

         </div>
         <label style={{marginRight: '25rem'}}>Last Name</label>
         <div className="form-group">
           <input className="form-control" type="text" name="elname" onChange={this.changeLastNameHandler} placeholder="Enter last name" id="elname"/>
         </div>
    
         <label style={{marginRight: '25rem'}}>Email</label>
         <div className="form-group">
           <input className="form-control" type="text" name="eemail" onChange={this.changeEmailNameHandler} placeholder="Enter Email" id="eemail"/>
         </div>
         <label style={{marginRight: '25rem'}}>Username</label>
         <div className="form-group">
           <input className="form-control" type="text" name="username" onChange={this.changeUsernameNameHandler} placeholder="Enter Username" id="username"/>
         </div>

         <label style={{marginRight: '25rem'}}>Contact</label>
         <div className="form-group">
           <input className="form-control" type="text" name="econtact" onChange={this.changeContactNameHandler} placeholder="Enter Contact Number" id="econtact"/>
         </div>
         <label style={{marginRight: '25rem'}}>Address</label>
         <div className="form-group">
           <input className="form-control" type="text" name="address" onChange={this.changeAddressNameHandler} placeholder="Enter Address" id="address"/>
         </div>
        
         <label style={{marginRight: '25rem'}}>Password</label>
         <div className="form-group">
           <input className="form-control" type="password" name="password" onChange={this.changePasswordNameHandler} placeholder="Enter Password" id="password"/>
         </div>

                <label style={{marginRight: '20rem'}}><b>Rate</b></label>
         <div className="form-group g-3 ">
           <input className="form-control" type="text" name="rate"  onChange={this.changeRateHandler} placeholder="Enter id_proof Number" id="rate"/>
         </div>
         <label style={{marginRight: '20rem'}}><b>Year of Experience</b></label>
         <div className="form-group g-3 ">
           <input className="form-control" type="text" name="yr_exp"  onChange={this.changeYearHandler} placeholder="Enter year of experience" id="yr_exp"/>
         </div>


         <div className="form-group ">
         <label>Role</label>
         <div onChange={this.radioEventpro}>
           <input type="radio" name="role" id="role" value="DRIVER"/>Driver
           {' '} 
           <input  type="radio" name="role" id="role" value="MAID"  style={{marginLeft: '.9rem'}}/>Maid
           {' '} 
           <input type="radio" name="role" id="role" value="LABOUR" style={{marginLeft: '.9rem'}}/>Labour
           </div>
         </div>
      

         <div className="form-group ">
         <label>Gender</label>
         <div onChange={this.radioEvent}>
           <input type="radio" name="egender" id="egender" value="Male"/>Male
           {' '} 
           <input  type="radio" name="egender" id="egender" value="Female"  style={{marginLeft: '.9rem'}}/>Female
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
           </div>
        )
    }
}
