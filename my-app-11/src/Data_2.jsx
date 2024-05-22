// Data_2.js
import React from 'react';
import Hoc from './Hoc';
import './App.css'; // Import CSS file for styling

function Data_2({ money2, handleIncreaseNew }) {
  return (
    <div className="data-container">
      <h1 className="title">Harshil: {money2}</h1>
      <button className="button" onClick={handleIncreaseNew}>Click Me!</button>
    </div>
  );
}

export default Hoc(Data_2);
