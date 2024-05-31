import React, { useState, useEffect, useContext } from 'react';
import { ProductContext } from './ProductContext';

const ProductForm = ({ editProduct, setEditProduct }) => {
  const { dispatch } = useContext(ProductContext);
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productImage, setProductImage] = useState(null);

  useEffect(() => {
    if (editProduct) {
      setProductName(editProduct.name);
      setProductPrice(editProduct.price);
      setProductImage(editProduct.image);
    }
  }, [editProduct]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const product = {
      id: editProduct ? editProduct.id : Date.now(),
      name: productName,
      price: productPrice,
      image: productImage
    };
    if (editProduct) {
      dispatch({ type: 'UPDATE_PRODUCT', payload: product });
    } else {
      dispatch({ type: 'ADD_PRODUCT', payload: product });
    }
    setEditProduct(null);
    setProductName('');
    setProductPrice('');
    setProductImage(null);
  };

  const handleImageChange = (e) => {
    setProductImage(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Product Name:
        <input
          type="text"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          required
        />
      </label>
      <label>
        Product Price:
        <input
          type="number"
          value={productPrice}
          onChange={(e) => setProductPrice(e.target.value)}
          required
        />
      </label>
      <label>
        Product Image:
        <input
          type="file"
          onChange={handleImageChange}
          accept="image/*"
        />
      </label>
      <button type="submit">{editProduct ? 'Update' : 'Add'} Product</button>
    </form>
  );
};

export default ProductForm;
