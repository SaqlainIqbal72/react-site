import React from "react";
import "./headre.css";

function Header() {
  return (
    <>
      <header>
        <div className="logo">
          <img src="/Images/HeaderImages/logo.png" ></img>
        </div>
        <ul>
          <li>Home</li>
          <li>Our Services </li>
          <li>About Us</li>
          <li>Contact Us</li>
        </ul>
        <button><a>Contact Us</a></button>
        <img src="/Images/HeaderImages/blur.png" className="blur"></img>

      </header>
    </>
  );
}

export default Header;
