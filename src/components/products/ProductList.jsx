// src/components/products/ProductList.jsx
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../../slices/productsSlice";
import ProductCard from "./ProductCard";

const ProductList = () => {
  const dispatch = useDispatch();
  const { items, status } = useSelector((state) => state.products);
  const [category, setCategory] = useState("all");

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const categories = ["all", ...new Set(items.map((p) => p.category))];

  const filteredProducts =
    category === "all" ? items : items.filter((p) => p.category === category);

  if (status === "loading") return <h2>Loading...</h2>;
  if (status === "failed") return <h2>Error loading products</h2>;

  return (
    <div className="container mt-4">
      <h2>Products</h2>
      <div className="mb-3">
        <select
          className="form-select w-25"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
      <div className="row g-3">
        {filteredProducts.map((product) => (
          <div className="col-md-3" key={product.id}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;


