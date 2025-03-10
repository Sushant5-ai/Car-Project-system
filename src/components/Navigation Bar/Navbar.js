import React from "react";
import { Link } from "react-router-dom";
import"./style.css" // Import CSS for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2>Car Rental Website</h2>
      <ul>
        <li>Home</li>
        <li>Cars</li>
        <li>Abouts</li>
        <li>Contacts</li>
      </ul>
    </nav>
  );
};

export default Navbar;