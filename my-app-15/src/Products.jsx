import React, { useReducer, useState } from 'react';
import ProductForm from './components/ProductForm';
import ProductList from './components/ProductList';
import { ProductContext, productReducer, initialState } from './components/ProductContext';

const Products = () => {
  const [state, dispatch] = useReducer(productReducer, initialState);
  const [editProduct, setEditProduct] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('name');

  const handleSearch = (e) => setSearchTerm(e.target.value);
  const handleSort = (e) => setSortBy(e.target.value);

  return (
    <ProductContext.Provider value={{ state, dispatch }}>
      <div>
        <h2>Products</h2>
        <ProductForm editProduct={editProduct} setEditProduct={setEditProduct} />
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={handleSearch}
        />
        <select value={sortBy} onChange={handleSort}>
          <option value="name">Sort by Name</option>
          <option value="price">Sort by Price</option>
        </select>
        <ProductList
          setEditProduct={setEditProduct}
          searchTerm={searchTerm}
          sortBy={sortBy}
        />
      </div>
    </ProductContext.Provider>
  );
};

export default Products;
