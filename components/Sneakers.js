import React from "react";
import Puuz from "./Puuz";
import sneaker from "../image/sneaker.png";

const Sneakers = () => {
  const puuz = [
    {
      name: "nike bladzer 1",
      desc: "NIKEEE",
      image: sneaker,
    },
    {
      name: "nike bladzer 1",
      desc: "NIKEEE",
      image: sneaker,
    },
  ];
  return (
    <div className="mur">
      {puuz.map((sneaker) => (
        <Puuz name={sneaker.name} desc={sneaker.desc} image={sneaker.image} />
      ))}
    </div>
  );
};

export default Sneakers;
