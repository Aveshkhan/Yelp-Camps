import React from "react";
import { NavLink } from "react-router-dom";

const Card = (props) => {
  return (
    <div>
      <div className="card">
        <img src={props.cardImg} alt="" />
        <h5>{props.title}</h5>
        <p>{props.para}</p>
        <button className="btn2">{props.btn}</button>
      </div>
    </div>
  );
};

export default Card;
