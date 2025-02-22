import React from "react";
import "../styles/Navbar.css";


const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Transactions Dashboard</h1>
      <div className="theme-toggle">
        <button onClick={() => document.body.classList.toggle("dark-mode")}>🌙</button>
      </div>
    </nav>
  );
};

export default Navbar;
