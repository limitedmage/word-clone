import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Cell({ letter, status }) {
  const className = status ? `cell ${status}` : "cell";

  return <span className={className}>{letter}</span>;
}

function PastGuess({ guess, answer }) {
  const checkedGuess = guess ? checkGuess(guess, answer) : null;

  return (
    <p className="guess">
      {range(5).map((index) => (
        <Cell
          key={index}
          letter={checkedGuess?.[index].letter}
          status={checkedGuess?.[index].status}
        />
      ))}
    </p>
  );
}

export default PastGuess;
