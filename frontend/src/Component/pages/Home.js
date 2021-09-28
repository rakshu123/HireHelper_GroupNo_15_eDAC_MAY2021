import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import Footer from '../Footer';

import HeroSection from '../HeroSection';
import ListUser from '../ListUser';
import Signin from '../Signin';
import { StudentSave } from '../StudentSave';
import { GetStudents } from '../GetStudents';
import UserCard from '../UserCard'
import LoginUser from '../LoginUser';


function Home() {
  return (
    < div>
    {/* <ListUser/>  */}

       {/* <HeroSection />  */}
       {/* <Signin/> */}
       {/* <GetStudents/> */}
       {/* <StudentSave/> */}
       <LoginUser/>
      <Cards/>
      <Footer/>
      {/* <UserCard/> */}
     
          </div>
  );
}

export default Home;
