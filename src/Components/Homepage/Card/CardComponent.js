import React from "react";

function CardComponent(props) {
  return (
    <>
      <div className="card">
        <div className="card-icon"> </div>
        <h3>{props.CardHeading}</h3>
        <p> {props.CardPara}</p>
        <button>
          <a>See Details</a>
        </button>
      </div>
    </>
  );
}

export default CardComponent;
