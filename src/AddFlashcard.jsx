// AddFlashcard.js
import { useState } from "react";

function AddFlashcard({ addFlashcard }) {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (question && answer) {
      addFlashcard({ question, answer });
      setQuestion("");
      setAnswer("");
    }
  };

  return (
    <div className="add-flashcard">
      <h2 className="center">Add a Flashcard</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Question"
        />
        <input
          type="text"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          placeholder="Answer"
        />
        <button type="submit">Add Flashcard</button>
      </form>
    </div>
  );
}

export default AddFlashcard;
