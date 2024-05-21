import React, { useState } from 'react';

function SimpleCarousel() {
    const [images, setImages] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleFileInputChange = (e) => {
        const uploadedFiles = e.target.files;
        const imageUrls = [];
        for (let file of uploadedFiles) {
            imageUrls.push(URL.createObjectURL(file));
        }
        setImages(imageUrls);
    };

    const handlePrevClick = () => {
        setCurrentIndex(prevIndex => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const handleNextClick = () => {
        setCurrentIndex(prevIndex => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div>
            <input id="fileInput" type="file" style={{ display: "none" }} onChange={handleFileInputChange} multiple />
            <button onClick={() => document.getElementById('fileInput').click()}>Upload Images</button>
            
                <div style={{ Width: "80%", margin: "0 auto", position: "relative" }}>
                    <img src={images[currentIndex]} alt={`image-${currentIndex}`} style={{ width: "100%", height:"100vh " }} />
                    <button onClick={handlePrevClick} style={{ position: "absolute", top: "50%", left: "10px", transform: "translateY(-50%)" }}>Prev</button>
                    <button onClick={handleNextClick} style={{ position: "absolute", top: "50%", right: "10px", transform: "translateY(-50%)" }}>Next</button>
                </div>
            
        </div>
    );
}

export default SimpleCarousel;
