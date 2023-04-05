import React from "react";

function GuessInput({ onGuessSubmitted }) {
  const [guess, setGuess] = React.useState("");

  function onSubmit(event) {
    event.preventDefault();
    onGuessSubmitted(guess);
    setGuess("");
  }

  return (
    <form className="guess-input-wrapper" onSubmit={onSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={guess}
        onChange={(event) => setGuess(event.target.value.toUpperCase())}
        required={true}
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
      />
    </form>
  );
}

export default GuessInput;
