// QuestionBox.js
import React, { useState, useEffect } from "react";
import "../Styles/QuestionBox.css";
import questions from "../../questions"; // Adjust the import path based on your project structure

const QuestionBox = ({ isDarkMode, isHighlighted }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [userAnswers, setUserAnswers] = useState([]);

  const handleAnswerClick = (answerId) => {
    setSelectedAnswer(answerId);

    // Automatically move to the next question after 3 seconds
    setTimeout(() => {
      setUserAnswers((prevAnswers) => [...prevAnswers, answerId]);
      setSelectedAnswer(null);
      setCurrentQuestion((prevQuestion) => prevQuestion + 1);
    }, 600);
  };

  // Check if there are more questions
  const hasMoreQuestions = currentQuestion < questions.length;

  const handleRestart = () => {
    setCurrentQuestion(0);
    setUserAnswers([]);
  };

  const calculateResult = () => {
    const correctAnswers = userAnswers.reduce((count, answer, index) => {
      const isCorrect =
        answer === questions[index].options.find((opt) => opt.isCorrect).id;

      return isCorrect ? count + 1 : count;
    }, 0);

    return correctAnswers;
  };

  const calculatePercentage = () => {
    const percentage = (calculateResult() / questions.length) * 100;
    return isNaN(percentage) ? 0 : percentage.toFixed(2);
  };

  return (
    <div
      className={`modal-container ${isDarkMode ? "dark-mode" : "light-mode"} ${
        isHighlighted ? "highlighted" : ""
      }`}
    >
      <div className="modal-content">
        {hasMoreQuestions ? (
          <>
            <h3 className="question-text">
              {`${currentQuestion + 1}. ${questions[currentQuestion].text}`}
            </h3>
            <ul className="options-list">
              {questions[currentQuestion].options.map((option) => (
                <li key={option.id}>
                  <button
                    className={`option-button ${
                      selectedAnswer === option.id
                        ? option.isCorrect
                          ? "selected-correct"
                          : "selected-wrong"
                        : ""
                    }`}
                    onClick={() => handleAnswerClick(option.id)}
                    disabled={selectedAnswer !== null} // Disable the button after selecting an option
                  >
                    {option.text}
                  </button>
                </li>
              ))}
            </ul>
          </>
        ) : (
          <>
            <h3 className="resultText">Your Result:</h3>
            <p className="resultText second">{`You answered ${calculateResult()} out of ${
              questions.length
            } questions correctly.`}</p>
            <p className="resultText third">{`${calculatePercentage()}%`}</p>
            <button className="restartButton" onClick={handleRestart}>
              Restart Quiz
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default QuestionBox;
