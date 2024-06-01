import React from 'react';
import ThemeProvider from './ThemeProvider';
import ThemedComponent from './ThemedComponent';
import './App.css'

const App = () => {
  return (
    <ThemeProvider>
      <ThemedComponent />
    </ThemeProvider>
  );
};

export default App;
