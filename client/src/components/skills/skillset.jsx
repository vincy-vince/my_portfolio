import React from "react";
import "../skills/skillset.css";
const Skillset = () => {
  const skillset = [
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    "https://tailwindcss.com/_next/static/media/tailwindcss-mark.d52e9897.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  ];
  return (
    <div id="skills" className="skill-container">
      <h1>Skillset</h1>
      <div className="scroll-container">
        <div className="scroll-content">
          {skillset.map((skill, index) => (
            <img
              style={{ width: "40px", height: "40px" }}
              src={skill}
              alt="HTML5"
              className="scroll-item"
              key={index}
            />
          ))}
        </div>
        <div className="scroll-content">
          {skillset.map((skill, index) => (
            <img
              style={{ width: "40px", height: "40px" }}
              src={skill}
              alt="HTML5"
              className="scroll-item"
              key={index}
            />
          ))}
        </div>
        <div className="scroll-content">
          {skillset.map((skill, index) => (
            <img
              style={{ width: "40px", height: "40px" }}
              src={skill}
              alt="HTML5"
              className="scroll-item"
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skillset;
