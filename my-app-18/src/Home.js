import React, { useContext } from 'react';
import ContextValue from './CreateContext';

const Home = () => {
  const { mode, differentMode } = useContext(ContextValue);

  return (
    <div className='main' style={{ backgroundColor: mode === 'light' ? 'white' : 'black' }}>
      <button onClick={differentMode} style={{ backgroundColor: mode === 'light' ? 'black' : 'white', color: mode === 'light' ? 'white' : 'black' }}>
        {mode === 'light' ? 'dark' : 'light'}
        {mode === 'light' ? <i className="fa-solid fa-sun"></i> : <i className="fa-solid fa-moon"></i>}
      </button>
      <h1 style={{ color: mode === 'light' ? 'black' : 'white' }}>You are in {mode} mode</h1>
    </div>
  );
};

export default Home;
