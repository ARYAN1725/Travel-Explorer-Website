import React from 'react'
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="navbarWrapper">
        <div className="navbar">
                <div className="company-name">
                    <h2>Travel World</h2>
                </div>
                <div className="navigation-links">
                    <ul className="navigationUl">
                        <li><a href="/">Home</a></li>
                        <li><a href="#tourCards">Plans</a></li>
                        <li><a href="/aboutus">About Us</a></li>
                        <li><a href="/login">LOGIN</a></li>
                    </ul>
                </div>
                </div>
    </div>
  )
}

export default Navbar