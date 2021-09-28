import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { Button } from './Button';
import Dropdown from './Dropdown';
import { MenuItems} from './MenuItems';




function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };



  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

 
  window.addEventListener('resize', showButton);
  

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            Hire Helper
            <i class='fab fa-typo3' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>     

            <li className='nav-item'>
              <Link
                to='/about'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                About us
              </Link>
            </li>

             
                          {/* <li
            className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to='/services'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Services <i className='fas fa-caret-down' />
            </Link>
            {dropdown && <Dropdown/>}
          </li>    */}
               {/* <li className='nav-item'>
              <Link
                to='/services'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Services
              </Link>
            </li>  */}
                    {/* <li className="nav-items">
          {MenuItems.map((item) => {
            if (item.title === "Services") {
              return (
                <li
                  key={item.id}
                  className={item.cName}
                  onMouseEnter={() => setDropdown(true)}
                  onMouseLeave={() => setDropdown(false)}
                >
                  <Link to={item.path}>{item.title}</Link>
                  {dropdown && <Dropdown />}
                </li>
              );
            }
            return (
              <li key={item.id} className={item.cName}>
                <Link to={item.path}>{item.title}</Link>
              </li>
            );
          })}
        </li> */}


            <li className='nav-item'>
              <Link
                to='/contacts'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Contact
              </Link>
            </li>
           
            {/* <li className='nav-item'>
              <Link to='/register' className='nav-links' onClick={closeMobileMenu}>
                Register
              </Link>

            </li>
           */}
            {/* <li className='nav-item'>
              <Link to='/admin' className='nav-links' onClick={closeMobileMenu}>
                Admin
              </Link>
            </li> */}


             <li>
              <Link
                to='/workerlogin'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Worker
              </Link>
            </li> 
            <li className='nav-item'>
              <Link
                to='/admin'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Admin
              </Link>
            </li>

             <li> 
               <Link
                to='/register'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Register
              </Link>
            </li> 
            {/* <li>
              <Link
                to='/admin'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Admin
              </Link>
            </li>
            */}
          </ul> 

           {button && <Button buttonStyle='btn--outline'>Register</Button>} 
        
           {/* {button && <Button buttonStyle='btn--outline' >Register</Button>} */}
           
           {/* {button && <Button buttonStyle='btn--outline'>Admin</Button>}   */}
        </div>
        
      </nav>
      
    </>
  );
}

export default Navbar;
