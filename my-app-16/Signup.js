import React, { useState } from "react";

function Signup() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");

    const handleSignup = () => {
        if (!name || !email || !pass) {
            alert("Please provide all required information.");
            return;
        }
        
        const users = JSON.parse(localStorage.getItem("users")) || [];
        
        if (users.some(user => user.email === email)) {
            alert("This email is already registered. Please use a different email.");
            return;
        }

        const userId = Date.now();
        const newUser = { id: userId, name, email, pass };
        const updatedUsers = [...users, newUser];
        
        localStorage.setItem("users", JSON.stringify(updatedUsers));
        alert("Signup successful!");
    };

    return (
        <div className="section">
            <div className="container">
                <div className="row full-height justify-content-center">
                    <div className="col-12 text-center align-self-center py-5">
                        <div className="section pb-5 pt-5 pt-sm-2 text-center">
                            <div className="card-3d-wrap mx-auto">
                                <div className="card-3d-wrapper">
                                    <div className="card-front">
                                        <div className="center-wrap">
                                            <h4 className="mb-4 pb-3">Sign Up</h4>
                                            <div className="form-group">
                                                <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="form-style" placeholder="Your Full Name" autoComplete="off" required />
                                                <i className="input-icon uil uil-user"></i>
                                            </div>    
                                            <div className="form-group mt-2">
                                                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-style" placeholder="Your Email" autoComplete="off" required />
                                                <i className="input-icon uil uil-at"></i>
                                            </div>    
                                            <div className="form-group mt-2">
                                                <input type="password" value={pass} onChange={(e) => setPass(e.target.value)} className="form-style" placeholder="Your Password" autoComplete="off" required />
                                                <i className="input-icon uil uil-lock-alt"></i>
                                            </div>
                                            <button type="button" className="btn mt-4" onClick={handleSignup}>Sign Up</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Signup;
