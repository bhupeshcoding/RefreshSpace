// Flashcard.js
import React, { useState } from "react";

function Flashcard1({ question, answer }) {
  const [showAnswer, setShowAnswer] = useState(false);
  const [correct, setCorrect] = useState(null);

  const handleAnswer = (userAnswer) => {
    if (userAnswer === answer) {
      setCorrect(true);
    } else {
      setCorrect(false);
    }
    setShowAnswer(true);
  };

  return (
    <div className="flashcard">
      <p>{question}</p>
      {showAnswer ? (
        <div>
          <p>{answer}</p>
          {correct !== null && (
            <p>{correct ? "Correct!" : "Incorrect, try again!"}</p>
          )}
        </div>
      ) : (
        <button onClick={() => setShowAnswer(true)}>Show Answer</button>
      )}
    </div>
  );
}

export default Flashcard1;
