import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <img className="logo" src={logo} alt="" />
            <nav>
                <NavLink to="/Shop">Shop</NavLink>
                <NavLink to="/OrderReview">Order Review</NavLink>
                <NavLink to="/Inventory">Manage Inventory</NavLink>
            </nav>
        </div>
    );
};

export default Header;