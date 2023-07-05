import "./header.css";
import { Link } from "react-router-dom";

import React from "react";

const Header = () => {
  return (
    <div>
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/login">
          <li>Login</li>
        </Link>
      </ul>
    </div>
  );
};

export default Header;
