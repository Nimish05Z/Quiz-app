// QuestionBox.js
import React from 'react';
import '../Styles/QuestionBox.css';

const QuestionBox = ({ isDarkMode, question }) => {
  return (
    <div className={`question-box ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <p>{question}</p>
    </div>
  );
};

export default QuestionBox;
