/* eslint-disable no-unused-vars */
import React, {useState} from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import answerQuestion from "../images/answer_question.png";
import Button from "@mui/material/Button";
import PropTypes from "prop-types";

const OpenPage = ({questionModalHandler, openPageHandler}) => {
  const [open, setOpen] = useState(true);

  const handleOpen = () => setOpen(true);
  const handleClosePage = () => {
    questionModalHandler(true);
    openPageHandler(false);
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
    p: 3,
    overflowY: "scroll",
  };
  const picStyle = {
    transform: "translateX(-1rem)"
  };
  const style1 = {
    textAlign: "justify",
  };
  return (
    <div className="modal">
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="box">
          <div className="modalPic">
            <img src={answerQuestion} alt="adding skills" width={250} height={250} style={picStyle} />
          </div>
          <Typography
            id="modal-modal-description"
            sx={{ mt: 2 }}
            style={style1}
          >
                Since you were tempted to check if this works, answer some questions about what you have known so far about me. Dont worry its not going to be tricky

            <Button onClick={handleClosePage}>Lets Get Started</Button>

          </Typography>
        </Box>
      </Modal>
    </div>
  );
};
OpenPage.propTypes = {
  questionModalHandler: PropTypes.func.isRequired,
  openPageHandler: PropTypes.func.isRequired,
};

export default OpenPage;