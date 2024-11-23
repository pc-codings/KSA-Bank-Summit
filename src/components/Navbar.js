import React from 'react';
import './Navbar.css';
import summit from "../assets/images/summit.png";
import { FiAlignJustify } from "react-icons/fi";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <a href="/" className="logo">
          <img src={summit} alt="Summit Logo" />
        </a>
      </div>
      <div className="navbar-center">
        <ul className="nav-links">
          <li>
            <a href="/products">Agenda</a>
          </li>
          <li className="dropdown">
            <a href="/about">Speaker & Experts</a>
            <ul className="dropdown-menu">
              <li><a href="/experts/keynote">Keynote Speakers</a></li>
              <li><a href="/experts/panel">Panel Experts</a></li>
            </ul>
          </li>
          <li>
            <a href="/talk">Talk</a>
          </li>
          <li className="dropdown">
            <a href="/masterclass">Masterclass</a>
            <ul className="dropdown-menu">
              <li><a href="/masterclass/beginner">Beginner</a></li>
              <li><a href="/masterclass/advanced">Advanced</a></li>
            </ul>
          </li>
          <li>
            <a href="/workshop">Workshop</a>
          </li>
          <li>
            <a href="/info">Info</a>
          </li>
          <li>
            <a href="/partners">Partners</a>
          </li>
        </ul>
      </div>
      <div className="navbar-right">
        <a href="/cart" className="cart-icon">
        <FiAlignJustify />

        </a>
        <a href="/account" className="user-icon">
          {/* <i className="fas fa-user"></i> */}
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
