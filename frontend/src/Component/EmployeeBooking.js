import React, { Component } from 'react'
import UserService from '../Service/UserService';
import {withRouter} from 'react-router-dom';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'

import Row from 'react-bootstrap/Row'


 class EmployeeBooking extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
        id: '',
      ename: '',
      emname: '',
      elname: '',
    //   eemail: '',
    //   username: '',
      econtact: '',
    //   address: '',
    //   password: '',
    rate: '',
     role: '',
    //   egender: '',
    //   yr_exp:""
    fname:'',
    lname:'',
    email:'',
    cont_num:'',
    address:'',
    start_date:'',
    end_date:'',
  city:''
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
    // this.updateEmployee = this.updateEmployee.bind(this);
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
//   changeEmailNameHandler= (event) =>{
//     this.setState({eemail: event.target.value})
//   }
//   changeUsernameNameHandler= (event) =>{
//     this.setState({username: event.target.value})
//   }

  changeContactNameHandler= (event) =>{
    this.setState({econtact: event.target.value})
  }
//   changeAddressNameHandler=(event) =>{
//     this.setState({address: event.target.value})
//   }
//   changePasswordNameHandler=(event) =>{
//     this.setState({password: event.target.value})
//   }
  
  changeRateHandler= (event)=>{
    this.setState({rate: event.target.value})
  }
//   changeRateHandler= (event)=>{
//     this.setState({rate: event.target.value})
//   }
//   changeYearHandler= (event)=>{
//     this.setState({yr_exp: event.target.value})
//   }
 
 
//   radioEvent= (event) =>{
//     this.setState({egender: event.target.value})
//   }
  radioEventpro= (event) =>{
    this.setState({role: event.target.value})
  }
// // onChange = (e) =>
// //         this.setState({ [e.target.name]: e.target.value });

changeFnameHandler=(event)=>{
    this.setState({fname:event.target.value});
  }
  changeLnameHandler=(event)=>{
    this.setState({lname:event.target.value});
  }
  changeEmailHandler=(event)=>{
    this.setState({email:event.target.value});
  }
  changeContactHandler=(event)=>{
    this.setState({cont_num:event.target.value});
  }
  changeAddressHandler=(event)=>{
    this.setState({address:event.target.value});
  }
  
  changeCityHandler=(event)=>{
    this.setState({city:event.target.value});
  }
  
  
  changeEdateHandler=(event)=>{
    this.setState({end_date:event.target.value});
  }
  changeSdateHandler=(event)=>{
    this.setState({start_date:event.target.value});
  }
  


  changeFirstNameHandler= (event) =>{
    this.setState({ename: event.target.value})
  }
    changeLastNameHandler= (event) =>{
    this.setState({elname: event.target.value})
  }
  
  changeContactNameHandler= (event) =>{
    this.setState({econtact: event.target.value})
  }
  
  changeRateHandler= (event)=>{
    this.setState({rate: event.target.value})
  }
 

  

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
            //    eemail: user.eemail,
            //    address: user.address,
               econtact: user.econtact,
            //   egender: user.egender,
            //    username: user.username,
            //    password: user.password,
              rate: user.rate,
            //    yr_exp: user.yr_exp,
              role: user.role

           
           })
       }) ;

      
                
   }

//   updateEmployee = (e) =>{
//    // e.preventDefault();
//    let user ={id: this.state.id,ename: this.state.ename, emname: this.state.emname, elname: this.state.elname,
//      econtact: this.state.econtact
//       , role: this.state.role, rate:this.state.rate};

//      //  alert('user =>' +JSON.stringify(user));


//     UserService.editEmployee(user).then(res =>{
//         this.setState({message : 'User details updated successfully.'});
//       this.props.history.push('/list')
//     })
//  } 
BookUser=(b)=>
{
  b.preventDefault();
  let bookings={fname:this.state.fname,lname:this.state.lname,email:this.state.email,cont_num:this.state.cont_num,address:this.state.address,city:this.state.city,
    start_date:this.state.start_date,end_date:this.state.end_date
};
  console.log(JSON.stringify(bookings));

  UserService.createBooking(bookings).then(res=>{
    this.props.history.push('/book');
  });
}
  

  render() {
    return (
        <div className="employeeBooking">
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
          <input className="form-control" type="text" name="ename" onChange={this.changeFirstNameHandler}  readonly="true" value={this.state.ename} placeholder="Enter first name" id="ename"/>
          </div>
        </div>
        <label style={{marginRight: '25rem'}}>Middle Name</label>
        <div className="form-group">
          <input className="form-control" type="text" name="emname" onChange={this.changeMiddletNameHandler}  readonly="true" value={this.state.emname} placeholder="Enter middle name" id="emname"/>

        </div>
        <label style={{marginRight: '25rem'}}>Last Name</label>
        <div className="form-group">
          <input className="form-control" type="text" name="elname" onChange={this.changeLastNameHandler}  readonly="true" value={this.state.elname} placeholder="Enter last name" id="elname"/>
        </div>
   
        <label style={{marginRight: '25rem'}}>Contact</label>
        <div className="form-group">
          <input className="form-control" type="text" name="econtact" onChange={this.changeContactNameHandler}  readonly="true" value={this.state.econtact} placeholder="Enter Contact Number" id="econtact"/>
        </div>
        
               <label style={{marginRight: '20rem'}}><b>Rate</b></label>
        <div className="form-group g-3 ">
          <input className="form-control" type="text" name="rate"  onChange={this.changeRateHandler}  readonly="true" value={this.state.rate} placeholder="Enter id_proof Number" id="rate"/>
        </div>
         
          <Row className="mb-3">
    <Form.Group as={Col} >
      <Form.Label>Customer First Name</Form.Label>
      <Form.Control type="text" placeholder="Enter First Name" 
                value={this.state.fname} onChange={this.changeFnameHandler}
  
      />
    </Form.Group>
    <Form.Group as={Col}>
      <Form.Label>Customer Last name</Form.Label>
      <Form.Control type="text" placeholder="Enter Last Name"
                      value={this.state.lname} onChange={this.changeLnameHandler}

      />
    </Form.Group>
    </Row>
   <Row>
   <Form.Group as={Col} >
      <Form.Label>Customer Email</Form.Label>
      <Form.Control type="email" placeholder="Enter Email"
                      value={this.state.email} onChange={this.changeEmailHandler}

      />
    </Form.Group>
    <Form.Group as={Col}  >
      <Form.Label>Customer Contact No</Form.Label>
      <Form.Control type="number" placeholder="Enter Your Number" 
                      value={this.state.cont_num} onChange={this.changeContactHandler}

      />
    </Form.Group>
   
       </Row>
    <Row className="mb-3">
    <Form.Group as={Col}>
      <Form.Label> From Date</Form.Label>
      <Form.Control type="date" 
         value={this.state.start_date} onChange={this.changeSdateHandler}

      />
    </Form.Group>
    <Form.Group as={Col}>
      <Form.Label> To Date</Form.Label>
      <Form.Control type="date"
               value={this.state.end_date} onChange={this.changeEdateHandler}

      />
    </Form.Group>
   
    </Row>
    <Row className="mb-3">
    <Form.Group as={Col}>
      <Form.Label>Customer Address</Form.Label>
      <Form.Control type="text" 
           value={this.state.address} onChange={this.changeAddressHandler}

      />
    </Form.Group>
    <Form.Group as={Col}>
      <Form.Label>Customer City</Form.Label>
      <Form.Control type="text"
             value={this.state.city} onChange={this.changeCityHandler}

      />
    </Form.Group>
   
    </Row>


        {/* <div className="form-group ">
        <label>Role</label>
        <div onChange={this.radioEventpro}>
          <input type="radio" name="role"  value={this.state.role} id="role" value="DRIVER"/>Driver
          {' '} 
          <input  type="radio" name="role" id="role" value={this.state.role} value="MAID"  style={{marginLeft: '.9rem'}}/>Maid
          {' '} 
          <input type="radio" name="role" id="role" value={this.state.role} value="LABOUR" style={{marginLeft: '.9rem'}}/>Labour
          </div>
        </div>
      */}

       

      <div>   
        <input className="btn btn-primary" id="reg" type="button" value="Book" onClick={this.BookUser} />
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
export default  withRouter(EmployeeBooking);

