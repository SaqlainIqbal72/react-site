import React from "react";
import TestimonilaCardComponent from "./TestimonilaCardComponent";
import "./testimonials.css";

function Testimonial() {
  return (
    <>
      <section className="testimonials">
        <div className="testimonials-top">
          <h1>Testimonials</h1>
          <p>
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="testimonials-bottom">
          <TestimonilaCardComponent
            testimonialPra="Lorem ipsum dolor sit amet, consectet adipiscing elit. Phasellus feugiat lacus vitae neque ornare,  adipiscing lacus vitae libero!"
            name="Antonia Jonathan"
            gmail="@antoniojth"
          />
          <TestimonilaCardComponent
            testimonialPra="Lorem ipsum dolor sit amet, consectet adipiscing elit. Phasellus feugiat lacus vitae neque ornare,  adipiscing lacus vitae libero!"
            name="Antonia Jonathan"
            gmail="@antoniojth"
          />
          <TestimonilaCardComponent
            testimonialPra="Lorem ipsum dolor sit amet, consectet adipiscing elit. Phasellus feugiat lacus vitae neque ornare,  adipiscing lacus vitae libero!"
            name="Antonia Jonathan"
            gmail="@antoniojth"
          />
        </div>
      </section>
    </>
  );
}

export default Testimonial;
