import React from 'react';
import '../css/Navbar.css';
import '../js/Navbar.js';


let logo_name = "SiteName";

export default function Navbar() {
  return (
      <div>
        {/* _____________________________ navbar start */}
                 
            <div className="wrapper">
            <div className='nav'>
                <input type="checkbox" id="show-search"/>
                <input type="checkbox" id="show-menu"/>
                <label for="show-menu" className="menu-icon"><i className="fas fa-bars"></i></label>
                <div className="nav-content">
                <a href="">
                    <div className="logo">
                        <img src="resources\images\logo.png" alt=""/>
                        <div className="logo_text">
                            <h1>Well<span>Care</span></h1>
                            <p>Care at Your Doorstep</p>
                        </div>
                    </div>
                </a>
                <ul className="links">
                    <li><a className='active' href="#">Home</a></li>
                    <li><a href="#">Contact Us</a></li>
                    <li><a href="#">Pro-Care Giverr</a></li>
                    <li><a href="#">Pro-Care Taker</a></li>
                    {/* <li>
                    <a href="#" className="desktop-link">Services <i className="fa-solid fa-angle-down"></i></a>
                    <input type="checkbox" id="show-services"/>
                    <label for="show-services">Services <i className="fa-solid fa-angle-down"></i></label>
                    <ul>
                        <li><a href="#">Drop Menu 1</a></li>
                        <li><a href="#">Drop Menu 2</a></li>
                        <li><a href="#">Drop Menu 3</a></li>
                    </ul>
                    </li> */}
                    <li><a href="#" className="nav-login">Sign In</a></li>
                    <li><a className="nav-sign_up" href="#">Sign Up</a></li>
                </ul>
                </div>
            </div>
            </div>

        {/* _____________________________ navbar end */}

    </div>
  )
}

