// src/components/AppLayout.jsx
import React from "react";
import { Outlet, Link } from "react-router-dom";
import { useSelector } from "react-redux";

const AppLayout = () => {
  // get cart items from redux
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link className="navbar-brand" to="/">Ecommerce</Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">Products</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/cart">
                  🛒 Cart{" "}
                  {cartItems.length > 0 && (
                    <span className="badge bg-primary ms-1">
                      {cartItems.length}
                    </span>
                  )}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default AppLayout;


