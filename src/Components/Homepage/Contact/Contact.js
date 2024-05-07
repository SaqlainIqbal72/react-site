import React from "react";
import "./contact.css";

function Contact() {
  return (
    <>
      <section className="contact">
        <div className="contact-left">
          <h1>Let’s talk!</h1>
          <p>
            To contact us, fill out the form below and we’ll get back to you
            within 24 hours.
          </p>
          <form>
            <label htmlFor="name">
              Your Name
              <input type="text" id="name"></input>
            </label>

            <label htmlFor="email">
              Your Email
              <input type="email" id="email"></input>
            </label>

            <label htmlFor="message">
              Your Message
              <textarea></textarea>
            </label>
          </form>
          <button>
            <a>Send Message</a>
          </button>
        </div>
        <div className="contact-right">
          <h3>Info</h3>
          <div className="flex">
            <img src="/Images/AboutImages/sms.png"></img>
            <p>Jumikstudios@12.com</p>
          </div>
          <div className="flex flex1">
            <img src="/Images/AboutImages/call.png"></img>
            <p>034444-0000888</p>
          </div>
          <div className="flex">
          <img src="/Images/AboutImages/clock.png"></img>

            <p>10am to 7pm</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
