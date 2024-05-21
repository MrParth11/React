import React from 'react';
import './App.css';

const ProductList = ({ products }) => {
  return (
    <div className="product-container">
      <h2>BUY THE LOOK</h2>
      <div className="product-items">
        {products.map(product => (
          <div key={product.id} className="product-item">
         
            <div>
              <img src={product.image} alt={product.name} />
              <p>{product.description}</p>
              <h1 className='price'>{product.discountedPrice} Price:{product.price}</h1>
              <button>ADD TO BAG</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
