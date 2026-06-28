import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.svg';//Navigation bar to be used across all pages
const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        <img src={logo} alt="HandyNear Logo" />
      </Link>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/browse">Find a Handyman</Link></li>
        <li><Link to="/how-it-works">How It Works</Link></li>
        <li><Link to="/contact">Post a Job</Link></li>
      </ul>
      <button className="hamburger" id="hamburger">&#9776;</button>
    </nav>
  );
};

export default Navbar;
