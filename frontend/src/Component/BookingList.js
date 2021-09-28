import React, { Component } from 'react'
import axios from 'axios'
import UserService from '../Service/UserService'
import {withRouter} from 'react-router-dom';

 class BookingList extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             users: []

             
        }
        this.editBooking = this.editBooking.bind(this);
    }
    componentDidMount(){

        UserService.getBooking().then((res)=>
        {
            this.setState({users: res.data});
        })



     }

     deleteUser(id) {
        UserService.deleteBooking(id)
           .then(res => {
               this.setState({message : 'Booking deleted successfully.'});
               this.setState({users: this.state.users.filter(users => users.id !== id)});
           })

    }

    
    editBooking(id){
        window.localStorage.setItem("userId",id);
        this.props.history.push('/updatebooking');

    }


//     componentDidMount(){
//         axios.get('http://localhost:8080/api/v3/booking')
//      // axios.get('http://localhost:8080/user/admin')

//        .then(res=>{
//            console.log(res)
//            this.setState({list:res.data})  //list is array of objects (200 objects)
//        })
//        .catch(error=>{console.log(error)
//            this.setState({errmsg:"Something went wrong"})
//        })
//    }

    render() {
        return (
            <div>
                    <div className="list3">
                {/* <EmployeeList/> */}
                <h2 className="text-center">Booking List</h2>
                <div className="row">
                     <table className="table table-striped table-bordered"> 
                    

                        <thead>
                            <tr>
                                <td> First Name</td>
                                <td> Last Name</td>
                                <td> Email</td>
                                <td> Contact</td>
                                <td> Address</td>
                                <td> Start Date of Booking</td>
                                <td> End Date of Booking</td>
                                 <td>User ID</td>
                                 <td>Employee ID</td>
                                <td> City</td>
                                <td>Actions</td>
                                
                            </tr>
                        </thead> 
                         <tbody> 
                        
                        
                            {
                                this.state.users.map(
                                    users =>
                                    <tr key = {users.id}>
                                     <td>{users.fname}</td> 
                                        <td>{users.lname}</td>
                                        <td>{users.email}</td>
                                        <td>{users.contact}</td>
                                        <td>{users.address}</td>
                                        <td>{users.city}</td>
                                        <td>{users.start_date}</td>

                                        <td>{users.end_date}</td>
                                        <td>{users.user}</td>
                                        <td>{users.employee}</td>


                                        
                                     <td>
                                    <button onClick={ () => this.editBooking(users.id)} className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteUser(users.id)} className="btn btn-danger">Delete </button>
                                                 {/* <button style={{marginLeft: "10px"}} onClick={ () => this.viewUser(users.id)} className="btn btn-info">View </button> */}
                                    </td> 
                                    

                                        


                                     </tr> 

                                )
                            }
                         </tbody> 
                      

                     </table> 

                </div>
            </div>
            </div>
        )
    }
}
export default withRouter(BookingList);