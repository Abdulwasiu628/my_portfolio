import React, { useState} from "react";
import "../stylesheets/skills.css";
import jobInterview from "../images/job_interview.png";
import {
  skills,
  proficiency,
  performanceMetric,
  certifications,
} from "../data/value";
import {
  BsFillArrowLeftSquareFill,
  BsFillArrowRightSquareFill,
} from "react-icons/bs";
import LinearProgress from "@mui/material/LinearProgress";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import AddSkill from "./AddSkill";
import QuestionModal from "./QuestionModal";
import OpenPage from "./OpenPage";
import FinalModal from "./FinalModal";
import PropTypes from "prop-types";

const Skills = () => {
  const [cardIndex, setCardIndex] = useState(0);
  const [analyzer, setAnalyzer] = useState([skills[1]]);
  
  const [open, setOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(true);
  const [getOpenPage, setOpenPage] = useState(false);
  const [getQuestionModal, setQuestionModal] = useState(false);
  const [getFinalPage, setFinalPage] = useState(false);
  const [finalPageCount, setFinalPageCount] = useState(0);
  const [addskills, setAddSkills] = useState(null);

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
  };
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    height: 500,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    overflowY: "scroll",
  };


  const showNextCards = () => {
    if (cardIndex + 3 < skills.length) {
      setCardIndex(cardIndex + 1);
      const skill = skills[cardIndex + 2].name;
      const profileAnalysis0 = skills.filter((profile) => {
        return profile.name === skill;
      });
      setAnalyzer(profileAnalysis0);
      //console.log(skills[cardIndex+2].name)
    } else {
      setCardIndex(0);
    }
  };

  const showPreviousCards = () => {
    if (cardIndex - 1 >= 0) {
      setCardIndex(cardIndex - 1);
      const skill = skills[cardIndex].name;
      const profileAnalysis1 = skills.filter((profile) => {
        return profile.name === skill;
      });
      setAnalyzer(profileAnalysis1);
    } else {
      setCardIndex(skills.length - 3);
    }
  };
  return (
    <div id="skills">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="white"
          fillOpacity="1"
          d="M0,224L80,202.7C160,181,320,139,480,112C640,85,800,75,960,64C1120,53,1280,43,1360,37.3L1440,32L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
        ></path>
      </svg>
      <div className="skillsContainer">
        <div className="skillsHeader">
          <p>Skills</p>
        </div>
        <div className="skillsBody">
          <div className="skills">
            <button className="arrow" onClick={showPreviousCards}>
              <BsFillArrowLeftSquareFill id="arrow" />
            </button>
            {skills.slice(cardIndex, cardIndex + 3).map((element, index) => (
              <CardBoard
                key={index}
                name={element.name}
                image={element.image}
                isActive={index === 1}
                setAnalysis={setAnalyzer}
              />
            ))}

            <button className="arrowright" onClick={showNextCards}>
              <BsFillArrowRightSquareFill id="arrow" />
            </button>
          </div>
          <div className="profile">
            <div className="skill_analysis">
              {analyzer.map((element, index) => (
                <div className="analyzer" key={index}>
                  <p id="analyzer_tag">{element.name}</p>
                  <p>Years of Experience: {element.yearsOfExperience}</p>
                  <Box sx={{ width: "100%" }}>
                    <LinearProgress
                      variant="determinate"
                      value={element.yearsOfExperience * 20}
                    />
                  </Box>
                  <p> Proficiency Level: {element.proficiency}</p>
                  <Box sx={{ width: "100%" }}>
                    <LinearProgress
                      variant="determinate"
                      value={
                        (proficiency.indexOf(element.proficiency) + 1) * 20
                      }
                    />
                  </Box>
                  <p>
                    Performance Metric[Projects]: {element.performanceMetric}
                  </p>
                  <Box sx={{ width: "100%" }}>
                    <LinearProgress
                      variant="determinate"
                      value={
                        (performanceMetric.indexOf(element.performanceMetric) +
                          1) *
                        20
                      }
                    />
                  </Box>
                  <p>Num of Certifications: {element.certifications}</p>
                  <Box sx={{ width: "100%" }}>
                    <LinearProgress
                      variant="determinate"
                      value={
                        (certifications.indexOf(element.certifications) + 1) *
                        20
                      }
                    />
                  </Box>
                </div>
              ))}{" "}
              <br />
              <Button variant="contained" onClick={handleOpen}>
                Add More Skills
              </Button>
            </div>
          </div>
        </div>

        {/* Skill Modal here */}
        <div className="modal">
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style} className="box">
              {isOpen && (
                <div>
                  <div className="modalPic">
                    <img
                      src={jobInterview}
                      alt="adding skills"
                      width={200}
                      height={200}
                    />
                  </div>
                  <AddSkill
                    parseForm={true}
                    closeHandler={setIsOpen}
                    openPageHandler={setOpenPage}
                    getSkills={setAddSkills}
                  />
                </div>
              )}
              {getOpenPage && (
                <OpenPage
                  questionModalHandler={setQuestionModal}
                  openPageHandler={setOpenPage}
                />
              )}
              {getQuestionModal && (
                <QuestionModal
                  questionModalHandler={setQuestionModal}
                  closeHandler={setIsOpen}
                  finalPageHandler={setFinalPage}
                  finalPageCountHandler={setFinalPageCount}
                />
              )}
              {getFinalPage && (
                <FinalModal
                  counter={finalPageCount}
                  closeModal={handleClose}
                  openPageHandler={setOpenPage}
                  skill={addskills}
                />
              )}
            </Box>
          </Modal>
        </div>
      </div>
    </div>
  );
};

const CardBoard = ({ name, image, isActive, setHandler}) => {
  return (
    <div
      className={`carousel-card-container ${isActive ? "card-active" : ""}`}
      onClick={() => setHandler(name)}
    >
      <center>
        <img src={image} alt={name} width={90} height={90} />
        <p>{name}</p>
      </center>
    </div>
  );
};

CardBoard.propTypes = {
  name: PropTypes.string.isRequired, 
  image: PropTypes.string.isRequired, 
  isActive: PropTypes.bool, 
  setHandler: PropTypes.func, 
};

export default Skills;
