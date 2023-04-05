import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import PastGuesses from "../PastGuesses";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);

  function onNewGuess(guess) {
    setGuesses([...guesses, guess]);
  }

  return (
    <>
      <PastGuesses guesses={guesses} />
      <GuessInput onGuessSubmitted={onNewGuess} />
    </>
  );
}

export default Game;
