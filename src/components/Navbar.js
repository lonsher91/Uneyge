import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Logo from "../images/Logoweb.png";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar-logo">
          <img src={Logo} height="80" width="110" alt="" />
        </Link>
        <div className="menu-icon">
          <i className="fas fa-times  fas fa-bars" />
        </div>
        <ul className="nav-menu active nav-menu">
          <li className="nav-item">
            <Link to="/us" className="nav-links">
              Nosotros
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/services" className="nav-links">
              Servicios
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/products" className="nav-links">
              Productos
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact-us" className="nav-links">
              Contáctanos
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
