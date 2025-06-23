import React from "react";
import "../about/about.css";
import Projects from "../projects/projects.jsx";
import Developer from "../developer/developer.jsx";
const About = () => {
  return (
    <div id="about" className="about_container">
      <div className="about">
        <div className="about-container">
          <div>
            <h1>About Me</h1>
          </div>
          <div className="about-content">
            <div>
              Hi, I'm Vincy Vince, a passionate Front-End Developer from
              Thiruvallur, Tamil Nadu. I specialize in building responsive and
              interactive user interfaces using technologies like HTML, CSS,
              Tailwind CSS, JavaScript, and React. I'm currently learning
              Next.js to strengthen my skills in creating dynamic and seamless
              web applications.
            </div>

            <div>
              I love crafting beautiful, smooth, and user-friendly interfaces
              that not only look great but also deliver a great user experience.
              I also enjoy solving real-world problems, especially when it comes
              to bug fixing and performance improvements.
            </div>
          </div>
          <div>
            <Projects />
          </div>
        </div>
      </div>
      <div className="developer">
        <Developer />
      </div>
    </div>
  );
};

export default About;
