import React from "react";
import { projects } from "../../js/projects";
import "../projects/projects.css";
const Projects = () => {
  return (
    <div id="projects" className="project_cards_container">
      <h1>Projects</h1>
      <div className="project_cards">
        {projects.map((data, i) => (
          <div key={i}>
            <div className="cards" key={i}>
              <a
                target="_blank"
                style={{ background: "none", boxShadow: "none" }}
                href={data.weblink}
              >
                <div className="proj_card_img">
                  <img src={data.img} alt="" />
                </div>
                <h3>{data.title}</h3>
                <p>{data.explanation}</p>
                <h4>
                  Tech Stack:{" "}
                  {data["Tech Stack"].map((ele, i) => (
                    <ul key={i} className="tech_stack">
                      <li>{ele}</li>
                    </ul>
                  ))}
                </h4>
                <a href={data.view} target="_blank">
                  View Project
                </a>
                <a
                  style={{ marginLeft: "6px" }}
                  href={data.weblink}
                  target="_blank"
                >
                  Web Link
                </a>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
