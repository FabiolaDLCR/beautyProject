import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
   <div className='header'>
   <h1>Cosset Beauty</h1>
    <nav>
        <NavLink to="/category/uñas" className={({ isActive }) => (isActive ? "active" : "")}>  Uñas  </NavLink>
        <NavLink to="/category/skincare" className={({ isActive }) => (isActive ? "active" : "")}>  Skincare  </NavLink>
        <NavLink to="/category/depilacion" className={({ isActive }) => (isActive ? "active" : "")}>  Depilación  </NavLink>
    
        <CartWidget />
    </nav>
    </div>
  );
};

export default NavBar;