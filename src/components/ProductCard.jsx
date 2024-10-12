// src/components/ProductCard.js
import React from 'react';

const ProductCard = ({ product, onEdit, onDelete }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">Price: ${product.price}</p>
        <p className="card-text">Quantity: {product.quantity}</p>
        <button className="btn btn-primary me-2" onClick={() => onEdit(product.id)}>
          Edit
        </button>
        <button className="btn btn-danger" onClick={() => onDelete(product.id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
