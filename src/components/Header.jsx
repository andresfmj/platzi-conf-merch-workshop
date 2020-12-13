import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/Header.css';

const Header = () => (
  <div className="Header">
    <h1 className="Header-title">
      <Link to="/">PlatziConf Merch</Link>
    </h1>
    <div className="Header-checkout">
      <Link to="/checkout">
        <i className="fas fa-shopping-basket fa-2x" />
      </Link>
    </div>
  </div>
);

export default Header;
