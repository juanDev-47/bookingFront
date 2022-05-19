import React from "react";
import "./navbar.css";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo">booking jp</span>
        <div className="navItems">
          <button className="navButton">Registro</button>  
          <button className="navButton">Login</button>  
        </div>
      </div>
    </div>
  );
};
