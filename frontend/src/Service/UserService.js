import axios from 'axios'

const USER_API_BASE_URL = "http://localhost:8080/user/admin;";
const USER_API_BASE_URL_EMP = "http://localhost:8080/api/v2/employee1;";
const USER_API_BASE_URL_Booking = "http://localhost:8080/api/v3/booking";
const USER_API_BASE_URL_LOGIN = 'http://localhost:8080/user/login';
const USER_API_BASE_URL_ADMIN = 'http://localhost:8080/admin/login1';
const USER_API_BASE_URL_User = 'http://localhost:8080/user/admin1';
const USER_API_BASE_URL_LOGIN_EMP = 'http://localhost:8080/api/v2/login';
const USER_API_BASE_URL_User1 = "http://localhost:8080/user/users";
const USER_API_BASE_URL_EMP1 = "http://localhost:8080/api/v2/employee";
const USER_API_BASE_URL_Delete ="http://localhost:8080/user";
const Fetch ="http://localhost:8080/user/fetch";
const Delete ="http://localhost:8080/api/v2";
const Delete_Booking ="http://localhost:8080/api/v3";
const FetchBooking ="http://localhost:8080/api/v3"
const UpdateEmployee ="http://localhost:8080/api/v2/fetch";


class UserService {

    getUsers(){
        return axios.get(USER_API_BASE_URL);
    }

    createUser(customer){
        return axios.post(USER_API_BASE_URL, customer);
    }
    getEmployee(){
        return axios.get(USER_API_BASE_URL_EMP);
    }

    createEmployee(employees){
        return axios.post(USER_API_BASE_URL_EMP, employees);
    }

    getBooking(){
        return axios.get(USER_API_BASE_URL_Booking);
    }

    createBooking(bookings){
        return axios.post(USER_API_BASE_URL_Booking, bookings);
    }
    loginUser(user) {
        return axios.post(USER_API_BASE_URL_LOGIN, user);
    }
    loginEmp(user) {
        return axios.post(USER_API_BASE_URL_LOGIN_EMP, user);
    }

    fetchUser() {
        return axios.get(USER_API_BASE_URL_LOGIN + '/user/admin');
    }
    fetchUserEmp() {
        return axios.get(USER_API_BASE_URL_LOGIN_EMP + '/api/v2/login');
    }

    adminUser(user) {
        return axios.post(USER_API_BASE_URL_ADMIN, user);
    }

    fetchUser1() {
        return axios.get(USER_API_BASE_URL_LOGIN + '/admin/admin1');
    }
    fetchUser2() {
        return axios.get(USER_API_BASE_URL_User + '/user/admin');
    }
    saveUser(user) {
        return axios.post(USER_API_BASE_URL_User, user);
    }
    getUser(){
        return axios.get(USER_API_BASE_URL_User1);
    }
    getEmployeeList(){
        return axios.get(USER_API_BASE_URL_EMP1);
    }
    getUserById(userId){
        return axios.get(USER_API_BASE_URL_User1 + '/' + userId);
    }

    getUserById1(userid){
        return axios.get(USER_API_BASE_URL_User1+ '/' + userid);
    }

    deleteUser1(id) {
        return axios.delete(USER_API_BASE_URL_Delete + '/' + id);
    }
    deleteBooking(id) {
        return axios.delete(Delete_Booking + '/' + id);
    }

    deleteEmployee(id) {
        return axios.delete(Delete + '/' + id);
    }

    fetchUserById(userId) {
        return axios.get(Fetch + '/' + userId);
    }
    fetchBookingById(userId) {
        return axios.get(FetchBooking + '/' + userId);
    }


    editUser(user) {
       // alert(user.id,user);
        return axios.put( USER_API_BASE_URL_User1 + '/' + user.id, user);
    }
    editEmployee(user) {
        // alert(user.id,user);
         return axios.put( UpdateEmployee + '/' + user.id, user);
     }

    getEmployeeById(userId){
        return axios.get(Delete + '/' + userId);
    }
    getBookingById(userId){
        return axios.get(USER_API_BASE_URL_Booking + '/' + userId);
    }

    editBooking(user) {
        // alert(user.id,user);
         return axios.put( Delete_Booking + '/' + user.id, user);
     }


}
export default new UserService()