import React from "react";
import "../skills/skillset.css";
const Skillset = () => {
  const skillset = [
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/tailwindcss.svg",
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
              src={skill}
              alt="HTML5"
              width="40"
              height="40"
              className="scroll-item"
              key={index}
            />
          ))}
        </div>
        <div className="scroll-content">
          {skillset.map((skill, index) => (
            <img
              src={skill}
              alt="HTML5"
              width="40"
              height="40"
              className="scroll-item"
              key={index}
            />
          ))}
        </div>
        <div className="scroll-content">
          {skillset.map((skill, index) => (
            <img
              src={skill}
              alt="HTML5"
              width="40"
              height="40"
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
