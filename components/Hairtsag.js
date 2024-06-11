import React from "react";
import "./Amen.css";
const Hairtsag = ({ too, tailbar, color }) => {
  return (
    <div className={"Hairtsags " + color}>
      <h1>{too}</h1>
      <p1>{tailbar}</p1>
    </div>
  );
};

export default Hairtsag;
