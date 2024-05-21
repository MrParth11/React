import React, { useState } from "react";
import './loin.css';

function Login({ products }) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);

    function handleLogout() {
        setIsLoggedIn(false);
    }

    function handleLogin(event) {
        event.preventDefault(); // Prevent default form submission
        setIsLoggedIn(true);
    }

    function handleProductSelect(product) {
        setSelectedProduct(product);
    }

    return (
        <>
            {isLoggedIn ? (
                <>
                    <div>
                        {selectedProduct ? (
                            <div className="product-details">
                                <img src={selectedProduct.image}  />
                                <h3>{selectedProduct.name}</h3>
                                <p>Quantity: {selectedProduct.quantity}</p>
                                <p>Price: {selectedProduct.price}</p>
                                <p>Expiry: {selectedProduct.expiry}</p>
                                <button type="button" className="btn" onClick={() => setSelectedProduct(null)}>Back</button>
                            </div>
                        ) : (
                            <div id="productList">
                                {products.map(product => (
                                    <div key={product.id} className="product">
                                        <img src={product.image} alt={product.name} />
                                        <div className="product-info">
                                            <h3>{product.name}</h3>
                                            <p>Price: {product.price}</p>
                                            <button type="button" className="btn" onClick={() => handleProductSelect(product)}>View Details</button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                        <button type="button" className="btn mt-4" id="opacity" onClick={handleLogout}>Logout</button>
                    </div>
                </>
            ) : (
                <section className="container">
                    <div className="login-container">
                        <div className="circle circle-one"></div>
                        <div className="form-container">
                            <img src="https://raw.githubusercontent.com/hicodersofficial/glassmorphism-login-form/master/assets/illustration.png" alt="illustration" className="illustration" />
                            <h1 className="opacity">LOGIN</h1>
                            <form onSubmit={handleLogin}>
                                <input type="text" placeholder="USERNAME" />
                                <input type="password" placeholder="PASSWORD" />
                                <button className="opacity" type="submit">SUBMIT</button>
                            </form>
                            <div className="register-forget opacity">
                                <a href="">REGISTER</a>
                                <a href="">FORGOT PASSWORD</a>
                            </div>
                        </div>
                        <div className="circle circle-two"></div>
                    </div>
                    <div className="theme-btn-container"></div>
                </section>
            )}
        </>
    );
}

export default Login;
