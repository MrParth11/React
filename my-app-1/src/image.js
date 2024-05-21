
import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import './App.css';

const Image = ({ images }) => {
  const handleDragStart = (e) => e.preventDefault();
  return (
    <div className='main'>
<header>
                <div className="logo">
                    
                        <h1>ShreejiVilla</h1>       
                </div>
                  
                    <nav>        
                    <ul>
                      <li><a href="index.html" class="active">Home</a></li>
                      <li><a href="properties.html">Properties</a></li>
                      <li><a href="property-details.html">Property Details</a></li>
                      <li><a href="contact.html">Contact Us</a></li>
                      <li><a href="./login/dist/login.html"><i class="fa fa-calendar"></i> Login</a></li>
                  </ul>   
                  </nav>

  
            
  </header>
      <div className='Subheader'>
      <div className='image-slider'>
      <AliceCarousel autoPlay autoPlayInterval={3000}>
        {images.map((image, index) => (
          <div  key={index} onDragStart={handleDragStart}>
            <img src={image.src} alt={image.alt} />
         
          </div>
        ))}
      </AliceCarousel>
    </div>
      </div>
    </div>
  );
}

export default Image;
