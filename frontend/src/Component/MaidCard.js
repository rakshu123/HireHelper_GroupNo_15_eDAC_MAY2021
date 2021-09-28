//import { Button } from '@material-ui/core'
import axios from 'axios'
import { Link } from 'react-router-dom';
import React, { Component } from 'react'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Row,Col
  } from 'reactstrap';
  import Form from 'react-bootstrap/Form'
//import Button from 'react-bootstrap/Button'
// import Col from 'react-bootstrap/Col'
// import Row from 'react-bootstrap/Row'

  



export default class MaidCard extends Component {
    constructor(props) {
        super(props)

        this.getForm = this.getForm.bind(this);

    
        this.state = {
             list:[],errmsg:''
        }
    }
    componentDidMount(){
         axios.get('http://localhost:8080/api/v2/employee')
      // axios.get('http://localhost:8080/user/admin')

        .then(res=>{
            console.log(res)
            this.setState({list:res.data})  //list is array of objects (200 objects)
        })
        .catch(error=>{console.log(error)
            this.setState({errmsg:"Something went wrong"})
        })
    }

    editBooking(id){
      window.localStorage.setItem("userId",id);
    this.props.history.push('/employeebooking');

}


    getForm = (e) => {
        return (


<div className="booking">
            <div className="container">
                <div><h2>Booking Form</h2></div>
   <Row className="mb-3">
    <Form.Group as={Col} >
      <Form.Label>First Name</Form.Label>
      <Form.Control type="text" placeholder="Enter First Name" />
    </Form.Group>
    <Form.Group as={Col}>
      <Form.Label>Last name</Form.Label>
      <Form.Control type="text" placeholder="Enter Last Name" />
    </Form.Group>
    </Row>
   <Row>
   <Form.Group as={Col} >
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" placeholder="Enter Email" />
    </Form.Group>
    <Form.Group as={Col}  >
      <Form.Label>Contact No</Form.Label>
      <Form.Control type="number" placeholder="Enter Your Number" />
    </Form.Group>
   
       </Row>
    <Row className="mb-3">
    <Form.Group as={Col}>
      <Form.Label> From Date</Form.Label>
      <Form.Control type="date"  />
    </Form.Group>
    <Form.Group as={Col}>
      <Form.Label> To Date</Form.Label>
      <Form.Control type="date" />
    </Form.Group>
   
    </Row>
   
    <Form.Group className="mb-3" controlId="formGridAddress1">
    <Form.Label>Address</Form.Label>
    <Form.Control placeholder="1234 Main St" />
  </Form.Group>
  
  {/* <Button style={{marginLeft: '30rem'}}>
      Book Now
  </Button> */}
</div>
</div>
        );
    }

    render() {
        return (
          <div className="container">
            <div className="maid">
                <h1>HOUSEHELP List</h1>
                <div className="row">
                {
                    // this.state.list.map(li=>
                    this.state.list.filter(li=>li.role=='MAID').map(li=>

                        <div className="card bg-muted m-2" style={{width:'250px'}} key={li.id}>
                                <div className="card-body">
                                  <div> <label>Name:</label>
                                        
                                        {li.ename} {li.emname} {li.elname} 
                                        <div>
                                          <label>Profession:</label>
                                          {li.role}
                                          </div>
                                          <div>
                                          <label>Contact:</label>
                                          {li.econtact}
                                          </div>
                                          <div>
                                          <label>Rate:</label>
                                          {li.rate}
                                          </div>



        </div>  
                                                                
                               
                                {li.email}
                                    </div>
                                    <div className="card-footer">
                                        {/* <link href="#" className="btn btn-danger">Book Now</link> */}
                                        {/* <Button href="/services"   onClick={closeMobileMenu} >Book</Button> */}
                                        {/* <Link to="/register" className="btn btn-primary">Sign up</Link> */}
                                        {/* <button onClick={()=> history.push('/register')}>Book</button> */}
                                        {/* <Link
                to='/register'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Register
              </Link> */}
              {/* {button && <Button buttonStyle='btn--outline'>Register</Button>}  */}
              {/* <form>
              <Button variant="btn btn-success" onClick={() => history.push('/Products')}>Click button to view products</Button>
              </form> */}
                         {/* <Link href="/register" className="btn btn-primary">Book Now</Link>  */}
                         {/* <Button className="btn btn primary" onClick={this.getForm}>Book Now</Button>                         */}

                                  
                         {/* <Link
                to='/booking'
                className='nav-links'
               style={{color:'black'}}
              >
                Book Now
              </Link> */}
                   <button onClick={ () => this.editBooking(li.id)} className="btn btn-info">Book Now </button>


                                        </div>
                        </div>
                  )
                }
                </div>


                {this.state.errmsg}
            </div>
            </div>
        )
    }
}
