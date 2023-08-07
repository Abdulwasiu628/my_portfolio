
import React, { useState, useEffect, useRef } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import successImg from "../images/success.png";
import failure from "../images/failure.png";
import Button from "@mui/material/Button";
import "../stylesheets/finalmodal.css";
import { firestore } from "../utils/firebase";
import {collection, addDoc} from "firebase/firestore";
import { skills } from "../data/value";
import PropTypes from "prop-types";

const FinalModal = ({
  counter,
  closeModal,
 
}) => {
  // eslint-disable-next-line no-unused-vars
  const [open, setOpen] = useState(true);
  const [value, setValue] = useState(0);
  const [info, setInfo] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const formReader = useRef();
  let addDataToCollection;

  const handleSubmit = () => {
    const value = formReader.current.value;
    console.log(value);
    const expected = "value";
    if (value !== expected) {
      const message =
        "Unfortunately you can't add a skill, try asking the owner the right passkey";
      console.log(message);
    } else {
      addDataToCollection = async (collections, data) => {
        try {
          const dataCollection = await addDoc(collection(firestore, collections), {
            skill: data
          });
          
          if (dataCollection) {
            setSuccess("You have successfully added a skill");
            console("data added");
            setError("");
          } else {
            const message ="Try again, skill not added. Seems you don't have the skill";
            console.log(message);
            setError(
              "Try again, skill not added. Seems you don't have the skill"
              
            );
            setSuccess("");
          }
        } catch (error) {
          setError(error.message);
          console.log(error.message);
          setSuccess("");
        }
      };
      addDataToCollection("skills", skills);
    }
  };
  const closeHandler = () => {
    closeModal();
    setOpen(!open);
  };
  useEffect(() => {
    setValue(counter);
    if (value > 0) {
      const message =
        "I can see you didn't go through my portfolio very well. Thanks for taking your time, I look forward to receiving your message";
      setInfo(message);
    }
    if (value <= 0) {
      const message =
        "Thank you for taking your time to read through my portfolio, I look forward to receiving your message";
      setInfo(message);
    }
  }, [
    value,
    info,
    setValue,
    counter,
    error,
    success,
  ]);

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
    transform: "translateX(-1rem)",
  };

  return (
    <div className="modal">
      <Modal
        open={open}
        onClose={closeHandler}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="box">
          <div className="modalPic">
            <img
              src={value > 0 ? failure : successImg}
              alt="adding skills"
              width={250}
              height={250}
              style={picStyle}
            />
          </div>

          <div className="infoPage">{info}</div>
          <div className="passKey">
            <label htmlFor="passkey">PassKey</label>
            <input type="text" ref={formReader} />
            <Button onClick={handleSubmit}>Submit</Button>
          </div>
          <div>
            {success ? success: error}
          </div>
          <div className="errorInfo">
            I am so sorry, you need to have my personals passkey to add to my
            skills collection.
          </div>
        </Box>
      </Modal>
    </div>
  );
};
FinalModal.propTypes = {
  questionModalHandler: PropTypes.func,
  openPageHandler: PropTypes.func,
  counter: PropTypes.number.isRequired, // Add counter prop type here
  closeModal: PropTypes.func,
  skill: PropTypes.string,
};

export default FinalModal;
