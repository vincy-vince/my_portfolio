import React from "react";
import "../hero/hero.css";
const Hero = () => {
  return (
    <div className="hero-container">
      <div className="introSec">
        <div>
          <h1 style={{ marginTop: "100px" }}>Vincy Vince</h1>
        </div>
        <div>
          <h2>Front End Developer</h2>
        </div>
      </div>
      <div className="imageSec">
        <img src="vincy2.jpeg" alt="vincy-vince" />
      </div>
    </div>
  );
};

export default Hero;
