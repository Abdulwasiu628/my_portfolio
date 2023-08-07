/* eslint-disable no-unused-vars */
import React, {useState} from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import mailRecieved from "../images/mailing.gif";
import PropTypes from "prop-types";

const ContactMessage = ({opener, message, openHandler}) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => opener;
  const handleClose = () => openHandler(!opener);
   
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 450,
    height: 200,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 3,
    overflowY: "scroll",
  };
  const picStyle = {
    transform: "translateX(0rem)"
  };
  const style1 = {
    textAlign: "justify",
  };
  return (
    <div className="modal">
      <Modal
        open={opener}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="box">
          <div className="modalPic">
            <img
              src={mailRecieved}
              alt="adding skills"
              width={200}
              height={150}
              style={picStyle}
            />
          </div>
          <Typography
            id="modal-modal-description"
            sx={{ mt: 2 }}
            style={style1}
          >
            {message}
          </Typography>
          <div>
            <Button onClick={handleClose} variant="contained">Close Message</Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
};
ContactMessage.propTypes = {
  opener: PropTypes.bool, 
  message: PropTypes.string, 
  openHandler: PropTypes.func
};
export default ContactMessage;