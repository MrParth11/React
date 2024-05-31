import React, { useContext } from 'react';
import { ProductContext } from './ProductContext';

const ProductList = ({ setEditProduct, searchTerm, sortBy }) => {
  const { state, dispatch } = useContext(ProductContext);

  const handleDelete = (id) => {
    dispatch({ type: 'DELETE_PRODUCT', payload: id });
  };

  const filteredAndSortedProducts = state.products
    .filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (sortBy === 'name') {
        return a.name.localeCompare(b.name);
      } else if (sortBy === 'price') {
        return a.price - b.price;
      }
      return 0;
    });

  return (
    <ul>
      {filteredAndSortedProducts.map((product) => (
        <li key={product.id}>
          <img src={product.image} alt={product.name} width="50" />
          <p>{product.name}</p>
          <p>${product.price}</p>
          <button onClick={() => setEditProduct(product)}>Edit</button>
          <button onClick={() => handleDelete(product.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default ProductList;
