import React, { useState, useEffect } from 'react';
import ProductList from './ProductList'
function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  return (
    <div>
      <ProductList products={products} />
    </div>
  );
}

export default App;
