import React from "react";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import PastGuess from "../PastGuess";

function PastGuesses({ guesses, answer }) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((index) => (
        <PastGuess key={index} guess={guesses[index]} answer={answer} />
      ))}
    </div>
  );
}

export default PastGuesses;
