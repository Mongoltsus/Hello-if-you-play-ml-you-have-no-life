import React from "react";
import Moviii from "./Moviii";
import Avengers from "../image/Avengers.png";

const Movies = () => {
  const agro = [
    {
      name: "The Avenegers",
      desc: "Superhearos team up to save the world",
      image: Avengers,
    },
    {
      name: "The Avenegers",
      desc: "Superhearos team up to save the world",
      image: Avengers,
    },
    {
      name: "The Avenegers",
      desc: "Superhearos team up to save the world",
      image: Avengers,
    },
    {
      name: "The Avenegers",
      desc: "Superhearos team up to save the world",
      image: Avengers,
    },
  ];
  return (
    <div className="mur">
      {agro.map((moviii) => (
        <Moviii name={moviii.name} desc={moviii.desc} image={moviii.image} />
      ))}
    </div>
  );
};

export default Movies;
