import React from "react";
import QuestionCard from "./Components/QuestionCard";

function App() {
  const startTrivia = async () => {};

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {};

  const nextQuestion = () => {};

  return (
    <div className="App">
      <h1>REACT QUIZZ</h1>
      <button className="start" onClick={startTrivia}>
        START
      </button>
      <p className="score">Score:</p>
      <p>Loading Questions...</p>
      <QuestionCard></QuestionCard>
      <button className="next" onClick={nextQuestion}>
        Next Question
      </button>
    </div>
  );
}

export default App;
