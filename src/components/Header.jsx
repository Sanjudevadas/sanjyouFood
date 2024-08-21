import logo from '../utils/logo.png'
import { useEffect, useState } from 'react';
const Header = () => {

 const [btnName,setBtnName]= useState("Login")

useEffect(()=>{
  console.log("UseEffect Called")
},[btnName])
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={logo} alt="" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button className='login' onClick={()=>{
          btnName === "Login" ?
          setBtnName("Logout") : setBtnName("Login")

          }}>{btnName}</button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
