import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const Plus = () => setCount(count + 1);
  const Hasan = () => setCount(count - 1);
  const Reset = () => setCount(0);
  const PLUSULTRA = () => setCount(count + 100);

  return (
    <div>
      <p>{count}</p>
      <button onClick={Plus}>Nemeh</button>
      <button onClick={Hasan}>Hasah</button>
      <button onClick={Reset}>RESET</button>
      <button onClick={PLUSULTRA}>PLUSPLUS</button>
    </div>
  );
};

export default Counter;
