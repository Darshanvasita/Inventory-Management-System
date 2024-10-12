// src/components/ProductList.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import ProductCard from './ProductCard';
import './ProductList.css';

const ProductList = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [error, setError] = useState('');

  // Fetch products from the JSON server
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:3001/products');
        setProducts(response.data);
      } catch (error) {
        setError('Error fetching products. Please try again later.');
      }
    };

    fetchProducts();
  }, []);

  const handleEdit = (productId) => {
    navigate(`/update/${productId}`);
  };

  const handleDelete = async (productId) => {
    try {
      await axios.delete(`http://localhost:3001/products/${productId}`); // Ensure URL matches fetch
      setProducts((prevProducts) => prevProducts.filter(product => product.id !== productId));
      alert('Product deleted successfully');
    } catch (error) {
      setError('Error deleting product. Please try again.');
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Product Inventory</h1>
      {error && <div className="alert alert-danger text-center">{error}</div>}
      <div className="row">
        {products.length > 0 ? (
          products.map((product) => (
            <div className="col-md-4 mb-4" key={product.id}>
              <ProductCard
                product={product}
                onEdit={handleEdit}
                onDelete={handleDelete}
              />
            </div>
          ))
        ) : (
          <div className="col-12 text-center">
            <h2>No products available.</h2>
            <span>Please add a product.</span>
            <div className="mt-3">
              <button
                className="btn btn-success w-25"
                onClick={() => navigate('/AddProduct')}
              >
                Add New Product
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductList;
