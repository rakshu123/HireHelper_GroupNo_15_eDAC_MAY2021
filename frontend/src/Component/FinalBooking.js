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

  



export default class FinalBooking extends Component {
    constructor(props) {
        super(props)


    
        this.state = {
             list:[],errmsg:''
        }
    }
    componentDidMount(){
        axios.get('http://localhost:8080/api/v2/employee;')
        .then(res=>{
            console.log(res)
            this.setState({list:res.data})  //list is array of objects (200 objects)
        })
        .catch(error=>{console.log(error)
            this.setState({errmsg:"Something went wrong"})
        })
    }
        render() {
        return (
            <div className="final">
                <h1>Driver List</h1>
                <div className="row">
                {
                    // this.state.list.map(li=>
                    this.state.list.filter(li=>li.profession=='Driver').map(li=>

                        <div className="card bg-muted m-2" style={{width:'250px'}} key={li.eid}>
                                <div className="card-body">
                                  <div> <label>Name:</label>
                                        
                                        {li.ename} {li.emname} {li.elname} 
                                        <div>
                                          <label>Profession:</label>
                                          {li.profession}
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

                                  
                         <Link
                to='/booking'
                className='nav-links'
               style={{color:'black'}}
              >
                Book Now
              </Link>

                                        </div>
                        </div>
                  )
                }
                </div>


                {this.state.errmsg}
            </div>
        )
    }
}
