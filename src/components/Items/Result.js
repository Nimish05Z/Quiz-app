import React from "react";

const Result = ({ userAnswers, questions, onRestart }) => {
  const correctAnswers = userAnswers.filter((answer, index) => {
    return answer === questions[index].options.find((opt) => opt.isCorrect).id;
  }).length;

  return (
    <div>
      <h2>Quiz Result</h2>
      <p>{`You got ${correctAnswers} out of ${questions.length} questions correct.`}</p>
      <button onClick={onRestart}>Restart Quiz</button>
    </div>
  );
};

export default Result;