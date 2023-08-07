import { firestore } from "../utils/firebase";
import { addSkillSuccess, addSkillFailure, addSkillError}  from "./ReduxAction";

export const addSkills = (collection, skillName) => async(dispatch) => {
  try {
    const dataCollection = await firestore(collection);
    const data = await dataCollection.add(skillName);
    if(data){
      dispatch(addSkillSuccess);
    }else{
      dispatch(addSkillFailure);
    }
        
  } catch (error) {
    dispatch(addSkillError);
        
  }
};

