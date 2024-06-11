import React, { useState } from "react";
import "./1A.css";
const TooTahTogloom = () => {
  const [sanamsarguiToo, setSanamsarguiToo] = useState(
    Math.floor(Math.random() * 100)
  );
};
console.log(sanamsarguiToo);
const [taasanToo, setTaasanToo] = useState("");
const handleChange = (e) => {
  const text = e.target.value;
  console.log(text);
  setTaasanToo(text);
};
const handleClick = () => {
  console.log(sanamsarguiToo, taasanToo);
  if (sanamsarguiToo == taasanToo) {
    setHariu(" TA TAHOJLOO");
  } else if (taasanToo > sanamsarguiToo) {
    const uldsenBolomj = bolomj - 1;
    setBolomj(uldsenBolomj);

    setHariu("IH BN, Uldsen bolomj" + uldsenBolomj);
  } else {
    const uldsenBolomj = bolomj - 1;
    setBolomj(uldsenBolomj);
    setHariu("BAGA BN, Uldsen bolomj" + uldsenBolomj);
  }
  return (
    <div className="container">
      <h1>Sanasan too hed ve?</h1>
      <p1>1-100-n hoorond baigaa toog taa</p1>
      <div>
        <input
          onChange={handleChange}
          type="number"
          placeholder="taah togoo oruul nuu!"
        />
        <button onClick={handleClick}>taah</button>
      </div>
      <h3>hairuu:</h3>
    </div>
  );
};

export default TooTahTogloom;
