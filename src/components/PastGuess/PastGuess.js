import React from "react";
import { range } from "../../utils";

function PastGuess({ guess }) {
  return (
    <p className="guess">
      {range(5).map((index) => (
        <span className="cell" key={index}>
          {guess ? guess[index] : ""}
        </span>
      ))}
    </p>
  );
}

export default PastGuess;
