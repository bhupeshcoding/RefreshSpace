// FlashcardList.js
import Flashcard from "./Flashcard";

function FlashcardList({ flashcards }) {
  return (
    <div className="flashcard-list">
      {flashcards.map((flashcard, index) => (
        <Flashcard key={index} {...flashcard} />
      ))}
    </div>
  );
}

export default FlashcardList;
