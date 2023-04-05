import React from "react";

function PastGuesses({ guesses }) {
  return (
    <div className="guess-results">
      {guesses.map(({ guess, key }) => (
        <p className="guess" key={key}>
          {guess}
        </p>
      ))}
    </div>
  );
}

export default PastGuesses;
