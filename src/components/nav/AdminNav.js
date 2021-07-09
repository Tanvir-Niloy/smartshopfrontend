import React from "react";
import { Link } from "react-router-dom";

const AdminNav = () => (
  <nav>
    <ul className="nav flex-column">
      <li className="nav-item mb-3">
        <Link to="/admin/dashboard" className="nav-link">
          Dashboard
        </Link>
      </li>

      <li className="nav-item mb-3">
        <Link to="/admin/product" className="nav-link">
         Create Product
        </Link>
      </li>

      <li className="nav-item mb-3">
        <Link to="/admin/products" className="nav-link">
          Products List
        </Link>
      </li>

      <li className="nav-item mb-3">
        <Link to="/admin/category" className="nav-link">
          Category
        </Link>
      </li>

      <li className="nav-item mb-3">
        <Link to="/admin/sub" className="nav-link">
          Sub Category
        </Link>
      </li>

      <li className="nav-item mb-3">
        <Link to="/admin/coupon" className="nav-link">
          Coupon
        </Link>
      </li>

      <li className="nav-item mb-3">
        <Link to="/user/password" className="nav-link">
          Password
        </Link>
      </li>
    </ul>
  </nav>
);

export default AdminNav;
