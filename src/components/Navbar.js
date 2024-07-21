import React, { useState } from "react";
import logo from "../assets/logo.png";
import './Navbar.css';

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };


  return (
    <nav className="navbar-container">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="hamburger" onClick={handleToggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <div className={`menu ${menuOpen ? 'show' : ''}`}>
        <button className="button">Refer & Earn</button>
        <button className="button">Resources</button>
        <button className="button">About Us</button>
        <button className="button login-button">Login</button>
        <button className="button try-button">Try for Free</button>
        </div>
    </nav>
  );
};

export default Navbar;
