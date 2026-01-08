// src/components/search/SearchBar.jsx
import React from "react";

const SearchBar = ({ query, setQuery }) => {
  return (
    <div className="container mt-3">
      <input
        type="text"
        className="form-control"
        placeholder="Search products..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
