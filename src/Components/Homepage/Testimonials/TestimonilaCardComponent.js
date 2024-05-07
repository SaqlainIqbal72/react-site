import React from "react";

function TestimonilaCardComponent(props) {
  return (
    <>
      <div className="testimonial-card">
        <img src='/Images/TestimonialImages/man.png'></img>
        <p>{props.testimonialPra}</p>
        <div>
          <span>{props.name}</span>
          <span>{props.gmail}</span>
        </div>
      </div>
    </>
  );
}

export default TestimonilaCardComponent;
