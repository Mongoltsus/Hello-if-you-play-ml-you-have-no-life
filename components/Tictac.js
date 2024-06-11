import React, { useState } from "react";
import "./XO.css";
const Tictac = () => {
  const [boxes, setBoxes] = useState(["", "", "", "", "", "", "", "", ""]);
  const [daralt, setDaralt] = useState(0);
  const onClick = (i) => {
    boxes[i] = daralt % 2 === 0 ? "O" : "X";
    setDaralt(daralt + 1);
    setBoxes([...boxes]);
  };

  return (
    <div className="container">
      <div className="tic-tac">
        {boxes.map((box, i) => (
          <div className="box" onClick={() => onClick(i)}>
            {box}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tictac;
