// src/components/products/ProductCard.jsx
import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../slices/cartSlice";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div className="card p-3 h-100">
      <img src={product.image} alt={product.title} className="card-img-top" style={{ height: "150px", objectFit: "contain" }} />
      <div className="card-body d-flex flex-column">
        <h6 className="card-title">{product.title}</h6>
        <p className="card-text">${product.price}</p>
        <button
          className="btn btn-primary mt-auto"
          onClick={() => dispatch(addToCart(product))}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
