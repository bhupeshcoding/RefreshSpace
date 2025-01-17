// // Flashcard.js
// import React, { useState } from "react";

// function Flashcard({ question, answer }) {
//   const [showAnswer, setShowAnswer] = useState(false);
//   const [correct, setCorrect] = useState(null);

//   const handleAnswer = (userAnswer) => {
//     if (userAnswer === answer) {
//       setCorrect(true);
//     } else {
//       setCorrect(false);
//     }
//     setShowAnswer(true);
//   };

//   return (
//     <div className="flashcard">
//       <p>{question}</p>
//       {showAnswer ? (
//         <div>
//           <p>{answer}</p>
//           {correct !== null && (
//             <p>{correct ? "Correct!" : "Incorrect, try again!"}</p>
//           )}
//         </div>
//       ) : (
//         <button onClick={() => setShowAnswer(true)}>Show Answer</button>
//       )}
//     </div>
//   );
// }

// export default Flashcard;

import React, { useState } from "react";

function Flashcard({ question, answer }) {
  const [userAnswer, setUserAnswer] = useState("");
  const [showAnswer, setShowAnswer] = useState(false);
  const [isCorrect, setIsCorrect] = useState(null);

  const handleSubmit = () => {
    setIsCorrect(
      userAnswer.trim().toLowerCase() === answer.trim().toLowerCase()
    );
    setShowAnswer(true);
  };

  const resetCard = () => {
    setUserAnswer("");
    setShowAnswer(false);
    setIsCorrect(null);
  };

  return (
    <div className="flashcard">
      <p>{question}</p>
      {showAnswer ? (
        <div>
          <p>Correct Answer: {answer}</p>
          <p>{isCorrect ? "Correct!" : "Incorrect, try again!"}</p>
          <button onClick={resetCard}>Reset</button>
        </div>
      ) : (
        <div>
          <input
            type="text"
            value={userAnswer}
            onChange={(e) => setUserAnswer(e.target.value)}
            placeholder="Type your answer"
          />
          <button onClick={handleSubmit}>Submit</button>
        </div>
      )}
    </div>
  );
}

export default Flashcard;
