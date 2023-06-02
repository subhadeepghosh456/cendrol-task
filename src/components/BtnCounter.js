import { useState } from "react";
import "./btnCounter.css";
import {randomColorArray} from '../constant/constant'

const BtnCounter = () => {
  const [counter, setCounter] = useState(1);
  const [buttonColor, setButtonColor] = useState(false);
  const [circleColor, setCircleColor] = useState("rgba(255, 214, 11, 0.954)");
  const handleCounter = () => {
    setCounter(counter + 1);
  };

  const formattedCounter = counter.toString().padStart(2, "0");

  const handleColorChange = () => {
    setButtonColor(!buttonColor);
    let random = Math.floor(Math.random() * randomColorArray.length);
    console.log(random);
    setCircleColor(randomColorArray[random]);
  };

  const circleStyle = {
    backgroundColor: circleColor,
    borderRadius: "50%",
    height: "9rem",
    width: "9rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  };

  return (
    <>
      <div className="container">
        <div style={circleStyle}>
          <h2>{formattedCounter}</h2>
          <span onClick={ handleCounter} className="btnStyle">
            click to increase counter
          </span>
        </div>
      </div>
      <button
        className="btn"
        style={buttonColor ? { background: "red" } : { background: "#00e6e6" }}
        onClick={handleColorChange}
      >
        Change Color
      </button>
    </>
  );
};

export default BtnCounter;
