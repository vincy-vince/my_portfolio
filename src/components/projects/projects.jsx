import React from "react";
import { projects } from "../../js/projects";
import "../projects/projects.css";
const Projects = () => {
  return (
    <div id="projects" className="project_cards_container">
      <h1>Projects</h1>
      <div className="project_cards">
        {projects.map((data, i) => (
          <div>
            <div className="cards" key={i}>
              <div className="proj_card_img">
                <img src="public/vincy2.jpeg" alt="" />
              </div>
              <h3>{data.title}</h3>
              <p>{data.explanation}</p>
              <h4>
                Tech Stack:{" "}
                {data["Tech Stack"].map((ele) => (
                  <ul className="tech_stack">
                    <li > {ele}</li>
                  </ul>
                ))}
              </h4>
              <a href="">{data.view}</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
