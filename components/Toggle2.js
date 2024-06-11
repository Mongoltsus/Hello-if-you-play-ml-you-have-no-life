import React, { useState } from "react";
import toggle from "./components/toggle.css";
const Togglebutton = () => {
  const [text, setText] = useState(" OFF");

  return (
    <div>
      <button
        className="TSENGEL"
        onClick={() => setText(text === "ON" ? "OFF" : "ON")}
      >
        {text}
      </button>
    </div>
  );
};

export default Togglebutton;
