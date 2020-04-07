import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [diceSum, setDiceSum] = useState(0);

  const diceRoll = numberOfDice => {
    let rolls = [];
    let rollSum = 0;

    for (let i = 0; i < numberOfDice; i++) {
      // add the 1 so the die number is not 0
      rolls[i] = Math.floor(Math.random() * 6) + 1;
      console.log(rolls[i]);
      rollSum += rolls[i];
    }
    setDiceSum(rollSum);
  };

  console.log("here", diceSum);

  return (
    <div className="App">
      <h1>Dice Roll Demo</h1>
      <button onClick={() => diceRoll(3)}> Click me </button>
    </div>
  );
}
