// App.js
import React, { useState } from 'react';
import NavBar from './components/Items/NavBar';
import QuestionBox from './components/Items/QuesionBox';
import './App.css'; // Import your global styles

const App = () => {
  const [isDarkMode, setDarkMode] = useState(false);
  const [ishighlightQuestion, setHighlightQuestion] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  const handleHighlightQuestion = () => {
    setHighlightQuestion((prevColor) => !prevColor);
    // Add logic to reset highlighting after a certain duration if needed
  };

  return (
    <div className={`app-container ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <NavBar
        isDarkMode={isDarkMode}
        toggleDarkMode={toggleDarkMode}
        highlightQuestion={handleHighlightQuestion}
      />
      <QuestionBox isHighlighted={ishighlightQuestion} isDarkMode={isDarkMode} />
    </div>
  );
};

export default App;
