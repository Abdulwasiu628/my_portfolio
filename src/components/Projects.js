import React from "react";
import "../stylesheets/project.css";
import {projects} from "../data/value";
import Tooltip from "@mui/material/Tooltip";

const Projects = () => {
  
  return (
    <section className="section" id="projects">
      <div className="projectContainer">
        <div className="projectHeading">
          <h3>Projects</h3>
        </div>
        <div className="projectSection">
          {projects.map((project, index) => (
            <div className="firstClass" key={index}>
              <img src={project.image} alt="" />
              <Tooltip 
                title={
                  <div>
                    <p> {project.status}</p>
                    <p>{project.link}</p>
                  </div>
                }>
                <button id="content">
                  {project.name}
                </button>
              </Tooltip>
             
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
