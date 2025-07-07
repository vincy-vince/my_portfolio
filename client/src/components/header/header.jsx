import React from "react";
import "../header/header.css";
const Header = () => {
  return (
    <div className="header">
      <svg
        className="logo"
        width="200"
        height="200"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="vGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00ffff" stopOpacity="1" />
            <stop offset="50%" stopColor="#ffff00" stopOpacity="1" />
            <stop offset="100%" stopColor="#ff69b4" stopOpacity="1" />
          </linearGradient>

          <linearGradient
            id="borderGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#ff69b4" stopOpacity="1" />
            <stop offset="50%" stopColor="#800080" stopOpacity="1" />
            <stop offset="100%" stopColor="#00ffff" stopOpacity="1" />
          </linearGradient>
        </defs>

        <circle
          cx="100"
          cy="100"
          r="99"
          fill="none"
          stroke="url(#borderGradient)"
          strokeWidth="2"
        />

        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          fontSize="140"
          fontFamily="'Raleway', 'Montserrat', sans-serif"
          fontWeight="600"
          fill="url(#vGradient)"
        >
          V
        </text>
      </svg>

      <ul className="menu_container">
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#skills  ">Skills</a>
        </li>
        <li className="Resume">
          <a
            title="Download Resume"
            href="vincy-vince-developer-resume.pdf"
            download="vincy-vince-developer-resume.pdf"
          >
            Résumé
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
