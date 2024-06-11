import React from "react";
import "./puuz.css";
import Togglebutton from "./Togglebutton";
const Puuz = ({ name, image, desc }) => {
  return (
    <div>
      <img src={image} alt="" />
      <div className="product-details">
        <h1 className="garchig ">{name}</h1>
        <p className="mur">{desc}</p>
        <Togglebutton />
      </div>
    </div>
  );
};

export default Puuz;
