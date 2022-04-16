import React from "react";
import { Link } from "react-router-dom";
import useFirebase from "../../hooks/useFirebase";
import './Header.css';

const Header = () => {
  const { user,handleSignOut} = useFirebase();
  return (
    <div className="header">
      <nav>
        <Link to="/">Home </Link>
        <Link to="/products"> Products</Link>
        <Link to="/order">Order</Link>
        <Link to="/register">Register</Link>
        <span>{user?.displayName && user.displayName }</span>
        {
          user?.uid? <button onClick={handleSignOut}>sign out</button>:<Link Link to="/login">Login</Link>}
      </nav>
    </div>
  );
};

export default Header;