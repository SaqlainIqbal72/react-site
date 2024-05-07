import React from "react";
import "./footer.css";
function Footer() {
  return (
    <>
      <footer>
        <div className="footer2">
          <img src="/Images/Footer/logo.png" alt=""></img>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <div className=" flex">
            <img src="/Images/Footer/pic1.png" alt=""></img>
            <img src="/Images/Footer/fb.png"></img>
            <img src="/Images/Footer/in.png"></img>

          </div>
        </div>
        <div className="footer3">
          <ul>
            <h4>Home</h4>
            <a>Our services</a>
            <a>About us</a>
            <a>Contact us</a>
          </ul>
          <ul>
            <h4>About Us</h4>
            <a>Our products</a>
            <a>Ratings</a>
            <a>FAQ</a>
          </ul>
          <ul>
            <h4>Contact Us</h4>
            <div className="flex-icon">
               <img src="/Images/Footer/message.png"></img>
              <a>jumikstudios@gmail.com</a>
            </div>
            <div className="flex-icon">
            <img src="/Images/Footer/location.png"></img>
              <a>Near, chashma chok Danyore</a>
            </div>
            <div className="flex-icon">
            <img src="/Images/Footer/global.png"></img>
              <a>www.jumikstudios.com</a>
            </div>
          </ul>
        </div>
      </footer>
    </>
  );
}

export default Footer;
