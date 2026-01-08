
// src/components/Header.jsx
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const count = useSelector((state) =>
    state.cart.items.reduce((total, item) => total + item.quantity, 0)
  );

  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Srihari's E-Commerce</Link>
        <Link className="btn btn-outline-light" to="/cart">
          Cart ({count})
        </Link>
      </div>
    </nav>
  );
};

export default Header;
