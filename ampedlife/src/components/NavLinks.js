import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/logo.png";

const NavLinks = () => {
  return (
    <ul id="navbar">
      <Link style={{ textDecoration: "none" }} to="/">
        <p>
          <li>
            Home
            <li />
          </li>
        </p>
      </Link>
      <Link style={{ textDecoration: "none" }} to="/about">
        <p>
          <li>About</li>
        </p>
      </Link>
      <Link style={{ textDecoration: "none" }} to="/services">
        <p>
          <li>Services</li>
        </p>
      </Link>
      <Link to="/">
        <img
          style={{ zindex: "999" }}
          src={Logo}
          alt="amped life logo"
          className="logo-transparent"
        />
      </Link>
      <Link style={{ textDecoration: "none" }} to="/blog">
        <p>
          <li>Blog</li>
        </p>
      </Link>
      <Link style={{ textDecoration: "none" }} to="/clientportal">
        <p>
          <li>Client Portal</li>
        </p>
      </Link>
      <Link style={{ textDecoration: "none" }} to="/contact">
        <p>
          <li>Contact</li>
        </p>
      </Link>
    </ul>
  );
};

export default NavLinks;
