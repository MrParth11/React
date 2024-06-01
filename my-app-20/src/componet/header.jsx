import React from 'react';
import TypingEffect from '../TypingEffect';
import 'bootstrap-icons/font/bootstrap-icons.css'; // If using Bootstrap Icons

const Header = ({ toggleDarkMode }) => {
  return (
<>
<header id="header" className="fixed-top">
      <div className="container d-flex align-items-center justify-content-between">
        <h1 className="logo"><a href="index.html">DevFolio</a></h1>
        {/* Uncomment below if you prefer to use an image logo */}
        <a href="index.html" className="logo"><img src="assets/img/logo.png" alt="" className="img-fluid" /></a>

        <nav id="navbar" className="navbar">
          <ul>
            <li><a className="nav-link scrollto active" href="#hero">Home</a></li>
            <li><a className="nav-link scrollto" href="#about">About</a></li>
            <li><a className="nav-link scrollto" href="#services">Services</a></li>
            <li><a className="nav-link scrollto" href="#work">Work</a></li>
            <li><a className="nav-link scrollto" href="#blog">Blog</a></li>
            <li>   <button onClick={toggleDarkMode}>Toggle Dark Mode</button></li>
            <li className="dropdown">
              <a href="#"><span>Drop Down</span> <i className="bi bi-chevron-down"></i></a>
              <ul>
                <li><a href="#">Drop Down 1</a></li>
                <li className="dropdown">
                  <a href="#"><span>Deep Drop Down</span> <i className="bi bi-chevron-right"></i></a>
                  <ul>
                    <li><a href="#">Deep Drop Down 1</a></li>
                    <li><a href="#">Deep Drop Down 2</a></li>
                    <li><a href="#">Deep Drop Down 3</a></li>
                    <li><a href="#">Deep Drop Down 4</a></li>
                    <li><a href="#">Deep Drop Down 5</a></li>
                  </ul>
                </li>
                <li><a href="#">Drop Down 2</a></li>
                <li><a href="#">Drop Down 3</a></li>
                <li><a href="#">Drop Down 4</a></li>
              </ul>
            </li>
            <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
          </ul>
          <i className="bi bi-list mobile-nav-toggle"></i>
        </nav>
        {/* .navbar */}
      </div>
    </header>
    <div id="hero" className="hero route bg-image" style={{ backgroundImage: 'url(assets/img/hero-bg.jpg)' }}>
  <div className="overlay-itro"></div>
  <div className="hero-content display-table">
    <div className="table-cell">
      <div className="container">
        <h1 className="hero-title mb-4">I am Parth Amipara</h1>
        <p className="hero-subtitle">
        <TypingEffect />
        </p>
        <p className="pt-3">
          <a className="btn btn-primary btn js-scroll px-4" href="#about" role="button">Learn More</a>
        </p>
      </div>
    </div>
  </div>
</div>

</>
  );
};


export default Header;
