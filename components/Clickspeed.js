import React, { useState } from "react";
import "./Amen.css";
import Hairtsag from "./Hairtsag";
const Clickspeed = () => {
  const [daralt, setDaralt] = useState(0);
  const [second, setSecond] = useState(0);
  const handleClick = () => {
    if (daralt === 0) {
      setInterval(() => {
        setSecond((second) => second + 10);
      }, 10);
    }
    setDaralt(daralt + 1);
  };

  const clickSec = ((daralt / second) * 1000).toFixed(2);
  return (
    <div>
      <div className="Container">
        <Hairtsag too={second / 1000} tailbar={"Timer"} color={"pink"} />
        <Hairtsag too={clickSec} tailbar={"Click/S"} color={"orange"} />
        <Hairtsag too={daralt} tailbar={"Score"} color={"green"} />
      </div>
      <button className="darah-heseg" onClick={handleClick}>
        end darah
      </button>
    </div>
  );
};

export default Clickspeed;
