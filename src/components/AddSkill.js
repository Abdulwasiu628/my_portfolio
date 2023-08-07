
import React, { useReducer } from "react";
//import { addSkills } from "../data/skillRedux";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
// import { skills } from "../data/value";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import PropTypes from "prop-types";

const initialState = {
  proficiency: "",
  yearsOfExperience: 0,
  performanceMetric: "",
  certifications: 0,
  name: "",
  image: "",
};

const formReducer = (state, action) => {
  switch (action.type) {
  case "UPDATE_FORM_INPUT":
    return {
      ...state,
      [action.fieldName]: action.value,
    };
  case "SUBMIT_FORM":{
    const {
      proficiency,
      yearsOfExperience,
      performanceMetric,
      certifications,
      name,
      image,
    } = state;
    if (proficiency !== "") {
      const newSkill = {
        proficiency,
        yearsOfExperience,
        performanceMetric,
        certifications,
        name,
        image,
      };
      console.log(newSkill);
    } else {
      console.log("error");
    }
    return {
      ...initialState,
    };
  }
  default:
    return state;
  }
};

const AddSkill = ({ closeHandler, openPageHandler, getSkills }) => {
  const [formState, dispatch] = useReducer(formReducer, initialState);

  const handleChange = (event) => {
    if (event.target.name === "image") {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          const base64Image = reader.result;
          dispatch({
            type: "UPDATE_FORM_INPUT",
            fieldName: "image",
            value: base64Image,
          });
        };
        reader.readAsDataURL(file);
      }
    } else {
      const { name, value } = event.target;
      dispatch({ type: "UPDATE_FORM_INPUT", fieldName: name, value });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    dispatch({ type: "SUBMIT_FORM" });
    getSkills(formState);
    closeHandler(false);
    openPageHandler(true);
  };
  const sx = {
    minWidth: 120,
    gap: "20px",
    display: "flex",
    flexDirection: "column",
  };
  return (
    <div>
      <Box>
        <form onSubmit={handleSubmit} style={sx}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Proficiency</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              name="proficiency"
              value={formState.proficiency}
              label="Proficiency"
              onChange={handleChange}
              required
            >
              <MenuItem value="Beginner">Beginner</MenuItem>
              <MenuItem value="Intermediate">Intermediate</MenuItem>
              <MenuItem value="Advanced">Advanced</MenuItem>
              <MenuItem value="Experienced">Experienced</MenuItem>
              <MenuItem value="Master">Master</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">
              Performance Metric
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              name="performanceMetric"
              value={formState.performanceMetric}
              label="Performance Metric"
              onChange={handleChange}
              required
            >
              <MenuItem value="0-2">0-2</MenuItem>
              <MenuItem value="3-7">3-7</MenuItem>
              <MenuItem value="8-13">8-13</MenuItem>
              <MenuItem value="14-20">14-20</MenuItem>
              <MenuItem value="20-25">20-25</MenuItem>
            </Select>
          </FormControl>

          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">
              Certifications
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              name="certifications"
              value={formState.certifications}
              label="Certifications"
              onChange={handleChange}
              required
            >
              <MenuItem value="0-2">0-2</MenuItem>
              <MenuItem value="3-4">3-4</MenuItem>
              <MenuItem value="5-7">5-7</MenuItem>
              <MenuItem value="7-9">7-9</MenuItem>
              <MenuItem value="10>above">10-above</MenuItem>
            </Select>
          </FormControl>
          <TextField
            type="text"
            value={formState.name}
            name="name"
            onChange={handleChange}
            id="outlined-basic"
            label="Skill Name"
            variant="outlined"
            required
          />
          <TextField
            type="number"
            value={formState.yearsOfExperience}
            name="yearsOfExperience"
            onChange={handleChange}
            id="outlined-basic"
            label="Years of Experience"
            variant="outlined"
            required
          />
          <TextField
            type="file"
            name="image"
            id="outlined-basic"
            label="Skill Image"
            variant="outlined"
            onChange={handleChange}
          />
          <Button variant="contained" color="primary" type="submit">
            Submit
          </Button>
        </form>
      </Box>
    </div>
  );
};
AddSkill.propTypes = {
  closeHandler: PropTypes.func,
  openPageHandler: PropTypes.func,
  getSkills: PropTypes.func,
};
export default AddSkill;
