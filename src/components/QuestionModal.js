/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { questions } from "../data/value";
import Button from "@mui/material/Button";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import writing from "../images/writing.png";
import PropTypes from "prop-types";

const QuestionModal = ({ questionModalHandler, closeHandler, finalPageHandler, finalPageCountHandler }) => {
  const [open, setOpen] = useState(true);
  const [isNumber, setIsNumber] = useState(0);
  const [value, setValue] = useState("");
  const [disable, setDisable] = useState(false);
  const [arr, setArr] = useState([]);
  const answer = ["Wasiu", "Node/Python", "App Development & Database Management", "Node, Typescript, SQL, NoSql"];
  const [count, setCount] = useState(0);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    questionModalHandler(false);
    closeHandler(true);
  };
  const handleChange = (e) => {
    const value = e.target.value;
    setValue(value);
    setArr((prevArr) => [...prevArr, value]);
    
  };
  const increment = () => {
    setIsNumber(isNumber + 1);
    if(isNumber === questions.length -1){
      for(let value of arr){
        if(!answer.includes(value)){
          setCount(count+1);
        }
      }
    }
  };
  const decrement = () => {
    setIsNumber(isNumber - 1);
  };
  useEffect(() => {
    if (isNumber === 0) {
      setDisable(true);
    }
    if (isNumber > 0) {
      setDisable(false);
    }
    if (isNumber === questions.length) {
      finalPageHandler(true);
      console.log(arr);
    }
    if(count > 0){
      finalPageCountHandler(count);
    }
  }, [disable, isNumber, finalPageHandler,arr, count, finalPageCountHandler]);
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

  const listStyle = {
    display: "flex",
    flexDirection: "row",
    gap: "10px",
  };

  const smallListStyle = {
    display: "flex",
    flexDirection: "row",
    gap: "20px",
  };
  return (
    <div className="modal">
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="box">
          <div className="modalPic">
            <img src={writing} alt="adding skills" width={200} height={200} />
          </div>

          {questions.map((question, index) => (
            <div key={index}>
              {index === isNumber && (
                <div>
                  <div className="questionHead">
                    <p>
                      <h3>{questions[index].question}</h3>
                    </p>
                  </div>
                  <div className="questionOptions">
                    {questions[index].answers.map((answer, index) => (
                      <ul key={index} style={listStyle}>
                        <li style={smallListStyle}>
                          <FormControl>
                            <RadioGroup
                              aria-labelledby="demo-radio-buttons-group-label"
                              defaultValue={questions[index].answers[0]}
                              name={`options-${index}`}
                              value={value}
                              onChange={handleChange}
                            >
                              <FormControlLabel
                                value={answer}
                                control={<Radio />}
                                label={answer}
                              />
                            </RadioGroup>
                          </FormControl>
                        </li>
                        {/*  */}
                      </ul>
                    ))}
                  </div>
                  <div style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "30px"
                  }}>
                    <Button variant="contained" onClick={increment}>
                      Next
                    </Button>
                    <Button
                      variant="contained"
                      onClick={decrement}
                      disabled={disable}
                    >
                      Previous
                    </Button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </Box>
      </Modal>
    </div>
  );
};
QuestionModal.propTypes = {
  questionModalHandler: PropTypes.func.isRequired,
  closeHandler: PropTypes.func.isRequired,
  finalPageHandler: PropTypes.func.isRequired,
  finalPageCountHandler: PropTypes.func.isRequired,
};

export default QuestionModal;
