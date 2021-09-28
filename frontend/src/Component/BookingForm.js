import React, {Component} from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'

import Row from 'react-bootstrap/Row'
import UserService from '../Service/UserService';

class BookingForm extends Component{
constructor(props) {
  super(props)

  this.state = {
    fname:'',
    lname:'',
    email:'',
    cont_num:'',
    address:'',
    start_date:'',
    end_date:'',
  city:''
  }
  this.BookUser=this.BookUser.bind(this);
}

// componentDidMount()
// {
//     this.loadUser();
// }

  
BookUser=(b)=>
{
  b.preventDefault();
  let bookings={fname:this.state.fname,lname:this.state.lname,email:this.state.email,cont_num:this.state.cont_num,address:this.state.address,city:this.state.city,start_date:this.state.start_date,end_date:this.state.end_date};
  console.log(JSON.stringify(bookings));

  UserService.createBooking(bookings).then(res=>{
    this.props.history.push('/book');
  });
}
cancel(){
  
  this.props.history.push('/register');

}
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





    render () {
        

        return (
            <div className="booking">
            <div className="container">
   <Row className="mb-3">
    <Form.Group as={Col} >
      <Form.Label>First Name</Form.Label>
      <Form.Control type="text" placeholder="Enter First Name" 
                value={this.state.fname} onChange={this.changeFnameHandler}
  
      />
    </Form.Group>
    <Form.Group as={Col}>
      <Form.Label>Last name</Form.Label>
      <Form.Control type="text" placeholder="Enter Last Name"
                      value={this.state.lname} onChange={this.changeLnameHandler}

      />
    </Form.Group>
    </Row>
   <Row>
   <Form.Group as={Col} >
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" placeholder="Enter Email"
                      value={this.state.email} onChange={this.changeEmailHandler}

      />
    </Form.Group>
    <Form.Group as={Col}  >
      <Form.Label>Contact No</Form.Label>
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
      <Form.Label> Address</Form.Label>
      <Form.Control type="text" 
           value={this.state.address} onChange={this.changeAddressHandler}

      />
    </Form.Group>
    <Form.Group as={Col}>
      <Form.Label> City</Form.Label>
      <Form.Control type="text"
             value={this.state.city} onChange={this.changeCityHandler}

      />
    </Form.Group>
   
    </Row>
   
  {/* <Button style={{marginLeft: '30rem'}}>
      Book Now
  </Button> */}
<div>   
         <input className="btn btn-primary" id="reg" type="buttton" value="Book" onClick={this.BookUser} />
         <input className="btn btn-danger" id="reg" type="buttton" value="Cancel" onClick={this.cancel} />
        </div>


</div>
</div>
        )
    }
    }


export default BookingForm;