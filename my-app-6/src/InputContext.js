import React, { useState, useRef } from 'react';

function InputContext(props) {
    const [text, setText] = useState('');
    const [mystyle, setMystyle] = useState({
        color: 'gray',
        background: 'white'
    });

    const inputRef = useRef(null); // Ref to the input element
    
    const handleInputChange = () => {
        const newText = inputRef.current.value;
        setText(newText);
    };

    const handleclick = () => {
        const newText = text.toUpperCase();
        console.log(newText);
        setText(newText);
    };

    const handletoggle = () => {
        const newColor = mystyle.color === 'white' ? 'black' : 'white';
        const newBackground = mystyle.background === 'gray' ? 'white' : 'gray';
        setMystyle({
            color: newColor,
            background: newBackground
        });
    };
  
    return (
        <div>
            <input 
                type='text' 
                style={mystyle} 
                ref={inputRef} 
                onChange={handleInputChange} 
                value={text} 
            />

            <p style={mystyle}>{text}</p>
            <h1 style={mystyle}>{text.length}</h1>
            <button onClick={handleclick} style={mystyle}>click</button>
        
            <div className="form-check form-switch">
                <input 
                    className="form-check-input" 
                    type="checkbox" 
                    id="flexSwitchCheckDefault" 
                    onChange={handletoggle} 
                />
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Default switch checkbox input</label>
            </div>
        </div>
    );
}

export default InputContext;
