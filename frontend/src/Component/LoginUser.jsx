import React, { Component } from 'react'
import UserService from '../Service/UserService';
import {withRouter} from 'react-router-dom';

class LoginUser extends Component {
constructor(props) {
    super(props)

    this.state = {
        username: '',
        password: '',
        message: null

    }
    this.loginUser = this.loginUser.bind(this);

}
loginUser = (event) => {
    event.preventDefault();
    let user = { username: this.state.username, password: this.state.password };
    console.log(user);
    UserService.loginUser(user)
        .then(response => {
            console.log(response.data);
            //this.setState({ message: 'User Login successful' });
            alert("login successful");
            this.props.history.push('/services');
        }).catch( err => {
            console.error("in error ", err.response.data);
            alert(err.response.data.message);
            this.props.history.push('/');
        })
}

onChange = (event) =>
        this.setState({ [event.target.name]: event.target.value });

    render() {
        return (
            <div>
                    <div className="container">
           <div className="row">
           <div className="card col-md-6 offset-md-3 offset-md-3">
       <div className="card-body">
         <h2>Login Page</h2>
         <form className="contact-form form-validate3" noValidate="novalidate">
        <div className="mb-3">
         <div className="form-group">
           <label for="exampleFormControlInput1" className="form-label" style={{marginRight: '25rem'}}>Username</label>
           <input className="form-control" type="text" name="username"  placeholder="Enter username" id="username" value={this.state.username} onChange={this.onChange}/>
           </div>
         </div>
         <label style={{marginRight: '25rem'}}>Password</label>
         <div className="form-group">
           <input className="form-control" type="password" name="password" placeholder="Enter password" id="password" value={this.state.password} onChange={this.onChange}/>

         </div>
         <div>   
         {/* <input className="btn btn-primary" id="reg" type="button" value="Login" onClick={this.loginUser} /> */}
         <button className="btn btn-primary" onClick={this.loginUser}>Login</button>

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

export default withRouter(LoginUser);