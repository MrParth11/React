import React, { useState } from "react";
import './App.css';

function Form() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const [error, setError] = useState("");

    const handleLogin = (e) => {
        e.preventDefault(); // Prevent form submission

        if (!username || !email || !password || !password2) {
            setError("Please provide all required information.");
            return;
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setError("Please provide a valid email address.");
            return;
        }
        if (password !== password2) {
            setError("Passwords do not match.");
            return;
        }
        alert("Login successful!");
    };

    return (
        <div className="background">
            <div className="shape"></div>
            <div className="shape"></div>
            <form onSubmit={handleLogin}>
                <h3>Login Here</h3>

                <label htmlFor="username">Username</label>
                <input type="text" placeholder="Your name" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />

                <label htmlFor="email">Email</label>
                <input type="email" placeholder="Email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />

                <label htmlFor="password">Password</label>
                <input type="password" placeholder="Password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                
                <label htmlFor="password2">Confirm Password</label>
                <input type="password" placeholder="Confirm Password" id="password2" value={password2} onChange={(e) => setPassword2(e.target.value)} />

                {error && <p className="error">{error}</p>}

                <button type="submit">Log In</button>
                <div className="social">
                    <div className="go"><i className="fab fa-google"></i>  Google</div>
                    <div className="fb"><i className="fab fa-facebook"></i>  Facebook</div>
                </div>
            </form>
        </div>
    );
}

export default Form;
