// NavBar.js
import React from 'react';
import '../Styles/NavBar.css';

const sunSVG = 'https://static.thenounproject.com/png/4808961-200.png';
const moonSVG = 'https://icons.veryicon.com/png/o/commerce-shopping/small-icons-with-highlights/night-mode-1.png';

const NavBar = ({ isDarkMode, toggleDarkMode, ishighlightQuestion }) => {
  return (
    <div className={`nav-bar ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <div className="title">React Multiple Questions</div>
      <div className="options">
        <button onClick={ishighlightQuestion}>
          Highlight Question
        </button>
        <button onClick={toggleDarkMode}>
          <img src={isDarkMode ? moonSVG : sunSVG} alt={isDarkMode ? 'Moon' : 'Sun'} width="30" height="30" />
        </button>
      </div>
    </div>
  );
};

export default NavBar;
