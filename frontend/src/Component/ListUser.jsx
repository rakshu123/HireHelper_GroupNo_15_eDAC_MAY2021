import React, { Component } from 'react'
import UserService from '../Service/UserService'
import axios from 'axios'
import EmployeeList from '../Component/EmployeeList'
import BookingList from '../Component/BookingList'

export default class ListUser extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             users: []
        }
        this.editUser = this.editUser.bind(this);
        this.deleteUser = this.deleteUser.bind(this);
        
    }

    editUser(id){
        window.localStorage.setItem("userId",id);
        this.props.history.push('/update');

    }
  
     componentDidMount(){

        UserService.getUsers().then((res)=>
        {
            this.setState({users: res.data});
        })

     }

    
    deleteUser(id) {
        UserService.deleteUser1(id)
           .then(res => {
               this.setState({message : 'User deleted successfully.'});
               this.setState({users: this.state.users.filter(users => users.id !== id)});
           })

    }




//     componentDidMount(){
//         axios.get('http://localhost:8080/user/admin')
//      //  axios.get('http://localhost:8080/user/admin')

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
            <div className="list">
                <EmployeeList/>
                <BookingList/>
                <h2 className="text-center">UserList</h2>
                <div className="row">
                     <table className="table table-striped table-bordered"> 
                    

                        <thead>
                            <tr>
                                <td> First Name</td>
                                <td> Middle Name</td>
                                <td> Last Name</td>
                                <td> Email</td>
                                <td> Contact</td>
                                <td> Address</td>
                                <td> Gender</td>
                                <td> Username</td>

                                <td> Password</td>
                                <td>Role</td>
                                <td>Actions</td>
                                
                            </tr>
                        </thead> 
                         <tbody> 
                        
                        
                            {
                                this.state.users.map(
                                    users =>
                                    <tr key = {users.id}>
                                     <td>{users.fname}</td> 
                                        <td>{users.mname}</td>
                                        <td>{users.lname}</td>
                                        <td>{users.email}</td>
                                        <td>{users.contact}</td>
                                        <td>{users.address}</td>
                                        <td>{users.gender}</td>
                                        <td>{users.username}</td>

                                        <td>{users.password}</td>
                                        <td>{users.role}</td>
                                     <td>
                                    <button onClick={ () => this.editUser(users.id)} className="btn btn-info">Update </button>
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
        )
    }
}
