import { useState } from "react";
import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";
import "./Lesson45.css";
import XO from "./Tictac";
import Clickspeed from "./Clickspeed";
import Sneakers from "./Sneakers";
import Movies from "./Movies";
const Lesson45 = () => {
  const [creation, setCreation] = useState(0);
  const itsTictac = () => {
    setCreation(1);
  };
  const itsClickspeed = () => {
    setCreation(2);
  };
  const itsSneakers = () => {
    setCreation(3);
  };
  const itsMovies = () => {
    setCreation(4);
  };
  const { width, height } = useWindowSize();
  return (
    <div>
      <Confetti width={width} height={height} />
      <div className="tovch">
        <button onClick={itsClickspeed}>FastClickspeed</button>
        <button onClick={itsTictac}>Tictac</button>
        <button onClick={itsSneakers}> puuz</button>
        <button onClick={itsMovies}>movie</button>
      </div>
      <div className="its">
        {creation === 1 && <XO />}
        {creation === 2 && <Clickspeed />}
        {creation === 3 && <Sneakers />}
        {creation === 4 && <Movies />}
      </div>
    </div>
  );
};

export default Lesson45;
