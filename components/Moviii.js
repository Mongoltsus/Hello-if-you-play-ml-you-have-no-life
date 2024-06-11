import React from "react";

const Moviii = ({ name, image, desc }) => {
  return (
    <div className="huree">
      <img src={image} alt="" />
      <div className="product-details">
        <h1 className="garchig">{name}</h1>
        <p className="mur">{desc}</p>
        {/* <Counter /> */}
      </div>
    </div>
  );
};

export default Moviii;
