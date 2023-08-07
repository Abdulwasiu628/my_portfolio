
import { addSkills } from "./ReduxReducer";
import { configureStore } from "@reduxjs/toolkit";


export const store = configureStore({
  reducer: {
    skills: addSkills
  },
});






