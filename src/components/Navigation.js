import React, {useEffect} from "react";
import "../stylesheets/navigation.css";
import image from "../images/felicityLogo.png";
import home from "../images/home.png";
import project from "../images/blueprint.png";
import contact from "../images/speech-bubble.png";
import services from "../images/repair-tools.png";
import about from "../images/info.png";
import skills from "../images/influence.png";
import "hover.css/css/hover.css";
import AOS from "aos";

export const Navigation = () => {

  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
  return (
    <nav id="menu" className="navbar">
      <div className="navContainer">
        <div
          className="navBar"
        >
          <div >
            <img src={image} alt="logo" width={50} height={50} id="logo" />
          </div>
          <ul>
            <li>
              <a href="#home" className="page-scroll hvr-pulse-shrink">
                <div className="icon-class">
                  Home
                  <span className="mobile-icon">
                    <img src={home} alt="" width={20} height={20}/>
                  </span>
                </div>
              </a>
            </li>
            <li>
              <a href="#about" className="page-scroll hvr-pulse-shrink">
                <div className="icon-class">
                  About
                  <span className="mobile-icon">
                    <img src={about} alt=""  width={20} height={20}/>
                  </span>
                </div>
              </a>
            </li>
            <li>
              <a href="#services" className="page-scroll hvr-pulse-shrink">
                <div className="icon-class">
                  Services
                  <span className="mobile-icon">
                    <img src={services} alt="" width={20} height={20}/>
                  </span>
                </div>
              </a>
            </li>
            <li>
              <a href="#skills" className="page-scroll hvr-pulse-shrink">
                <div className="icon-class">
                  Skills
                  <span className="mobile-icon">
                    <img src={skills} alt="" width={20} height={20}/>
                  </span>
                </div>
              </a>
            </li>
            <li>
              <a href="#projects" className="page-scroll hvr-pulse-shrink">
                <div className="icon-class">
                  Projects
                  <span className="mobile-icon">
                    <img src={project} alt="" width={20} height={20}/>
                  </span>
                </div>
              </a>
            </li>
            <li>
              <a href="#contact" className="page-scroll hvr-pulse-shrink">
                <div className="icon-class">
                  Contact
                  <span className="mobile-icon">
                    <img src={contact} alt="" width={20} height={20} />
                  </span>
                </div>
              </a>
            </li>
            <li>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
