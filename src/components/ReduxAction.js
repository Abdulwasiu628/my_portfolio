export const updateForm = (fieldName, value) => {
  return {
    type: "UPDATE_FORM_INPUT",
    fieldName,
    value,
  
  };
};
export const submitForm = () => {
  return {
    type: "SUBMIT_FORM",
  };
};
export const addSkillSuccess = () => {
  return {
    type: "ADD_SKILL_SUCCESS",
    payload: "You have successfully added a new skill",
  };
};

export const addSkillFailure = () => {
  return {
    type: "ADD_SKILL_FAILURE",
    payload: "Try again, skill not added. Seems you don't have the skill",
  };
};

export const addSkillError = (error) => {
  return {
    type: "ADD_SKILL_ERROR",
    payload: error.message,
  };
};

