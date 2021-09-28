import React, { Component } from 'react'
import UserService from '../Service/UserService'
import axios from 'axios'
import {withRouter} from 'react-router-dom';
import UpdateEmployee from './UpdateEmployee';

 class EmployeeList extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             users: []
        }
      //  this.editEmployee = this.editEmployee.bind(this);
        
    }
  
     componentDidMount(){

        UserService.getEmployeeList().then((res)=>
        {
            this.setState({users: res.data});
        })

     }
     deleteUser(id) {
        UserService.deleteEmployee(id)
           .then(res => {
               this.setState({message : 'User deleted successfully.'});
               this.setState({users: this.state.users.filter(users => users.id !== id)});
           })

    }


    editEmployee(id){
        window.localStorage.setItem("userId",id);
        this.props.history.push('/employee');

    }
  
//     componentDidMount(){
//        axios.get('http://localhost:8080/api/v2/employee')
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
            <div className="list1">
                <h2 className="text-center">Employees List</h2>
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
                                <td> Year of Experience</td>
                                <td> per day Rate </td>
                                <td> Password</td>
                                <td>Role</td>
                                <td>
                                    Actions
                                </td>
                                
                            </tr>
                        </thead> 
                         <tbody> 
                        
                        
                            {
                                this.state.users.map(
                                    users =>
                                    <tr key = {users.id}>
                                     <td>{users.ename}</td> 
                                        <td>{users.emname}</td>
                                        <td>{users.elname}</td>
                                        <td>{users.eemail}</td>
                                        <td>{users.econtact}</td>
                                        <td>{users.address}</td>
                                        <td>{users.egender}</td>
                                        <td>{users.username}</td>
                                        <td>{users.yr_exp}</td>
                                        <td>{users.rate}</td>

                                        <td>{users.password}</td>
                                        <td>{users.role}</td>
                                    <td>
                                    <div>
                                    <button onClick={ () => this.editEmployee(users.id)} className="btn btn-info">Update </button>
                                    
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteUser(users.id)} className="btn btn-danger">Delete </button>
                                      </div>          
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
export default withRouter(EmployeeList);