// App.js
import React, { useState } from 'react';
import NavBar from './components/Items/NavBar';
import QuestionBox from './components/Items/QuesionBox';
import './App.css'; // Import your global styles

const App = () => {
  const [isDarkMode, setDarkMode] = useState(false);
  const [isHighlighting, setHighlighting] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  const toggleHighlighting = () => {
    setHighlighting((prevHighlighting) => !prevHighlighting);
  };

  return (
    <div className={`app-container ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <NavBar
        isDarkMode={isDarkMode}
        toggleDarkMode={toggleDarkMode}
        toggleHighlighting={toggleHighlighting}
        isHighlighting={isHighlighting}
      />
      <QuestionBox isHighlighted={isHighlighting} isDarkMode={isDarkMode} />
    </div>
  );
};

export default App;
