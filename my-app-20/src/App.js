// App.js
import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './componet/header';
import About from './componet/About';
import ContactSection from './componet/ContactSection';
import CounterSection from './componet/CounterSection';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const body = document.body;
    if (isDarkMode) {
      body.classList.add('dark-mode');
    } else {
      body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return (
    <div className="App">
      <Header toggleDarkMode={toggleDarkMode} />
      <About />
      <ContactSection />
      <CounterSection />
    </div>
  );
}

export default App;
