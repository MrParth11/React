import React from 'react';
import './App.css';
import Image from './image';

function App() {
  const images = [
    { src: require('./images/banner-01.jpg'), alt: 'Image 1' },
    { src: require('./images/banner-02.jpg'), alt: 'Image 2' },
    { src: require('./images/banner-03.jpg'), alt: 'Image 3' }
  ];

  return (
    <div className='App'>
      <Image images={images} />
    </div>
  );
}

export default App;