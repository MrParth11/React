import React, { useState } from 'react';
import './App.css'; 

function FormWithMultipleInputs() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        age: '',
        file: null
    });
    const [submittedData, setSubmittedData] = useState([]);

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        const file = name === 'file' ? files[0] : null;

        setFormData(prevData => ({
            ...prevData,
            [name]: value,
            file
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmittedData(prevSubmittedData => [...prevSubmittedData, formData]);
        setFormData({
            name: '',
            email: '',
            age: '',
            file: null
        });
    };

    return (
        <div className="container">
            <div className="form">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name" className="label">Name:</label>
                        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="input-field" required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email" className="label">Email:</label>
                        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="input-field" required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="age" className="label">Age:</label>
                        <input type="number" id="age" name="age" value={formData.age} onChange={handleChange} className="input-field" required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="file" className="label">Upload File:</label>
                        <input type="file" id="file" name="file" onChange={handleChange} className="input-field" />
                    </div>

                    <button type="submit" className="submit-btn">Add Data</button>
                </form>
            </div>

            <div className="submitted-data">
                {submittedData.map((data, index) => (
                    <div key={index} className="submitted-item">
                       
                        {data.file && (
                            <div className="image-container">
                                <img src={URL.createObjectURL(data.file)} alt="Uploaded" className="uploaded-image" />
                                <p><strong>Name:</strong> {data.name}</p>
                                <p><strong>Email:</strong> {data.email}</p>
                                <p><strong>Age:</strong> {data.age}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default FormWithMultipleInputs;
