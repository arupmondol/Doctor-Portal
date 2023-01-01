import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

  const menuItems = <React.Fragment>
    <li><Link to='/'>Home</Link></li>
    <li><Link to='/about'>About</Link></li>
    <li><Link to='/reviews'>Reviews</Link></li>
    <li><Link to='/login'>Login</Link></li>
    <li><Link to='/register'>Register</Link></li>
    <li><Link to='/appointment'>Appointment</Link></li>
  </React.Fragment>
  return (
    <div>
      <div className="navbar bg-base-100 flex justify-between">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
      
        {
          menuItems
        }
      </ul>
    </div>
    <Link className="btn btn-ghost normal-case text-xl">Doctots Portal</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal p-0">
      {
        menuItems
      }
    </ul>
  </div>
 </div>
    </div>
  );
};

export default Header;