import React, { useState, useEffect} from "react";
import "../stylesheets/about.css";
import { VscSmiley } from "react-icons/vsc";
import img2 from "../images/receptionist.png";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { value } from "../data/value";
import AOS from "aos";
import "aos/dist/aos.css";

export const About = () => {
  
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

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
  const style1 = {
    textAlign: "justify",
  };
  return (
    <div id="about">
      <div className="aboutContainer">
        <div className="aboutMe" >
          <p data-aos="fade-up">
            About Me <VscSmiley id="coolSmiley" />
          </p>
        </div>
        <div className="profile">
          <div className="profilePic">
            <img src="./img/image.png" alt="Pic" id="img1" width={50} height={50} />
          </div>
          <div className="profileInfo">
            <div className="infoAboutMe">
              <div id="infoHeading" data-aos="fade-left">
                Experienced Node.js/Python Developer: Harnessing the Power of
                JavaScript for Efficient Web Development
              </div>
              <div id="infoDetails">
                <p data-aos="zoom-in">
                  I am a dedicated and highly skilled Node.js and Python
                  developer with three years of experience in the field. I have
                  a deep passion for building robust and scalable web
                  applications that leverage the full potential of JavaScript
                  and Node.js, Python and Django to deliver exceptional user
                  experiences.
                  <br />
                  Throughout my career, I have honed my expertise in JavaScript
                  and server-side development, Python and Django, allowing me to
                  design and implement efficient web solutions that meet and
                  exceed client expectations.{" "}
                  <Button onClick={handleOpen}>Continue Reading...</Button>
                </p>
              </div>
              <div className="modal">
                <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box sx={style} className="box">
                    <div className="modalPic">
                      <img
                        src={img2}
                        alt="reception"
                        width={200}
                        height={200}
                      />
                    </div>
                    <Typography
                      id="modal-modal-description"
                      sx={{ mt: 2 }}
                      style={style1}
                    >
                      {value}
                    </Typography>
                  </Box>
                </Modal>
              </div>
            </div>
          </div>
        </div>
      </div>
      <svg
        className="aboutcontainerClosing"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="white"
          fillOpacity="1"
          d="M0,256L360,128L720,160L1080,192L1440,224L1440,320L1080,320L720,320L360,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
};
