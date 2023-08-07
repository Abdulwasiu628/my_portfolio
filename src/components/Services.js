import React from "react";
import "../stylesheets/services.css";
import image1 from "../images/software_development.png";
import image2 from "../images/app-development.png";
import image3 from "../images/database.png";
import image4 from "../images/backend.png";
import image5 from "../images/testing.png";
import image6 from "../images/continuous.png";
import image7 from "../images/consultant.png";
import image8 from "../images/optimization.png";

export const Services = () => {
  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Services</h2>
        </div>
        <div className="sectionInfo">
          <div className="serviceIcons">
            <img src={image1} alt="software_development" width={150} height={150}/>
            Software Development
          </div>
          <div className="serviceIcons">
            <img src={image2} alt="App_development" width={150} height={150}/>
            App Development
          </div>
          <div className="serviceIcons">
            <img src={image3} alt="Database Design" width={150} height={150} />
            Database Design and Management
          </div>
          <div className="serviceIcons">
            <img src={image4} alt="Backend Development" width={150} height={150}/>
            Backend Development
          </div>
          <div className="serviceIcons">
            <img src={image5} alt="Software testing" width={150} height={150} />
            Software Testing/Quality Assurance
          </div>
          <div className="serviceIcons">
            <img src={image6} alt="DevOps" width={150} height={150} />
            DevOps and CI/CD
          </div>
          <div className="serviceIcons">
            <img src={image7} alt="Technical Consulting" width={150} height={150} />
            Technical Consulting
          </div>
          <div className="serviceIcons">
            <img src={image8} alt="Performance Optimization" width={150} height={150} />
            Performance Optimization
          </div>
        </div>
        
      </div>
    </div>
  );
};
