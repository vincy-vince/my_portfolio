import React from "react";
import "../header/header.css";
const Header = () => {
  return (
    <div className="header">
      <h2>Header</h2>
      <ul className="menu_container">
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li className="Resume">
          <a href="">Résumé</a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
