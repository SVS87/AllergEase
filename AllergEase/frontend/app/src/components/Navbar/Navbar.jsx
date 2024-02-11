import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import  Hamburger  from "../../assets/Hamburger.png";
import  Logofull  from "../../assets/Logofull.png";

import './navbar.css';

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <img src={Logofull} alt="logo"></img>
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <img src={Hamburger} alt="menu" className="menu-icon-image"></img>
        </div>
        <div className={`nav-elements  ${showNavbar && 'active'}`}>
          <ul>
            <li>
              <NavLink to="/">Overview</NavLink>
            </li>
            <li>
              <NavLink to="/get-started" className="get-started-but"><b>Get Starte</b></NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
