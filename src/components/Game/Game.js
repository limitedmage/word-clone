import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import PastGuesses from "../PastGuesses";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import HappyBanner from "../HappyBanner";
import SadBanner from "../SadBanner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [status, setStatus] = React.useState("started"); // started | won | lost

  function onNewGuess(guess) {
    const nextGuesses = [...guesses, guess];
    setGuesses(nextGuesses);

    if (guess === answer) {
      setStatus("won");
    } else if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setStatus("lost");
    }
  }

  return (
    <>
      <PastGuesses guesses={guesses} answer={answer} />
      <GuessInput
        onGuessSubmitted={onNewGuess}
        disabled={status !== "started"}
      />

      {status === "won" && <HappyBanner numGuesses={guesses.length} />}
      {status === "lost" && <SadBanner answer={answer} />}
    </>
  );
}

export default Game;
