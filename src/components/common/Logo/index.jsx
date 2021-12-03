import React from 'react';
import logo from './logo.png';
import './styles.css';
import { useSelector } from 'react-redux';

const Logo = () => {
  const user =useSelector(state=>state.user)
   return (
    <div className='header-content_logo'>
      <div>
      <a href="#" class="logo"><i class="fas fa-utensils"></i>      E-Menu</a>
     
      </div>
   
      <nav className="navMenu">
        <a href="#">Home</a>
        <a href="#">Admin</a>
        <a href="#">Waiter</a>
        <a href="#">Chef</a>
        <a href="#">Menu</a>
        <a href="#">About</a>
        {(user.isAuthentication)?<a className="login" href="#">{`Hello, ${user?.user?.lastName}`}</a>:<a className="login" href="#">Login</a>}
        
        
        <div className="dot"></div>
      </nav>
     
      
    
    </div>
  );
}

export default Logo;
