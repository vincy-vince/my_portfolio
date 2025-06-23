import React from "react";
import "../skills/skillset.css";
const Skillset = () => {
  const skillset = [
    "HTML",
    "CSS",
    "Tailwind CSS",
    "JavaScript",
    "React.js",
    "Next.js",
  ];
  return (
    <div id="skills" className="skill-container">
      <h1>Skillset</h1>
      <div className="scroll-container">
        <div className="scroll-content">
          {skillset.map((skill, index) => (
            <div className="scroll-item" key={index}>
              {skill}
            </div>
          ))}
        </div>
        <div className="scroll-content">
          {skillset.map((skill, index) => (
            <div className="scroll-item" key={index}>
              {skill}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skillset;
