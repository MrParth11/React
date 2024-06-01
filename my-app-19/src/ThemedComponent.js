import React, { useContext } from 'react';
import ThemeContext from './ThemeContext';

const ThemedComponent = () => {
  const { theme, themeStyles, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="main" style={{ backgroundColor: themeStyles.background }}>
      <button
        onClick={toggleTheme}
        style={{
          backgroundColor: themeStyles.buttonBackground,
          color: themeStyles.buttonColor,
        }}
      >
        {theme === 'light' ? 'dark' : 'light'}
        {theme === 'light' ? <i className="fa-solid fa-sun"></i> : <i className="fa-solid fa-moon"></i>}
      </button>
      <h1 style={{ color: themeStyles.color }}>You are in {theme} mode</h1>
    </div>
  );
};

export default ThemedComponent;
