
import './App.css';
import Navbar from './Component/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button,Row,Col,Container
} from 'reactstrap';

import Home from './Component/pages/Home';
import ListUser from './Component/ListUser';
import Register from './Component/pages/Register';
import Worker from './Component/pages/Worker';
import Driver from './Component/pages/Driver';
import Admin from './Component/pages/Admin';
import Services from './Component/pages/Services';
//import UserCard from './Component/UserCard';
import BookingForm from './Component/BookingForm';
import LoginWorker from './Component/pages/LoginWorker';
import FinalBooking from './Component/FinalBooking';
// import LoginUser from './Component/LoginUser';
import EmployeeList from './Component/EmployeeList';
import UpdateUser from './Component/UpdateUser';
import About from './Component/pages/About';
import { lightGreen } from '@material-ui/core/colors';
import contact from './Component/pages/contact';
import UserCard from './Component/UserCard';
import DriverList from './Component/DriverList';
import MaidCard from './Component/MaidCard';
import LabourCard from './Component/LabourCard';
import FetchBooking from './Component/FetchBooking';
import UpdateEmployee from './Component/UpdateEmployee';
import UpdateBooking from './Component/UpdateBooking';
//import LoginWorker from './Component/pages/LoginWorker';
import BookingList from './Component/BookingList';
import Booked from './Component/Booked';
import EmployeeBooking from './Component/EmployeeBooking'

function App() {
  return (
    <div className="App" >
      <>
      <Router>
      <Navbar/>
      {/* <BookingForm/> */}
      {/* <LoginUser/> */}
   
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/register" exact component={Register}/>
  
        <Route path="/worker" exact component={Worker}/>
        <Route path="/driver" exact component={Driver}/>
        <Route path="/admin" exact component={Admin}/>
        <Route path="/services" exact component={Services}/>
      
        <Route path="/booking" exact component={BookingForm}/>
        <Route path="/list" exact component={ListUser}/>
        <Route path="/workerlogin" exact component={LoginWorker}/>
        <Route path="/final" exact component={FinalBooking}/>
        <Route path="/list1" exact component={EmployeeList}/>
        <Route path="/update" exact component={UpdateUser}/>
        <Route path="/about" exact component={About}/>
        <Route path="/contacts" exact component={contact}/>
        <Route path="/driver1" exact component={DriverList}/>
        <Route path="/maid" exact component={MaidCard}/>
        <Route path="/labour" exact component={LabourCard}/>
        <Route path="/fetchbooking" exact component={FetchBooking}/>
        {/* <Route path="/employee" exact component={UpdateEmployee}/> */}
        <Route path="/employee" exact component={UpdateEmployee}/>
        <Route path="/updatebooking" exact component={UpdateBooking}/>
        <Route path="/list3" exact component={BookingList}/>
        <Route path="/book" exact component={Booked}/>

        <Route path="/employeeBooking" exact component={EmployeeBooking}/>

         
         
      
      </Switch>
      </Router>
      
    </>
    </div>
  );
}

export default App;
