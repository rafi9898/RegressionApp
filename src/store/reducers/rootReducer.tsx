import authReducer from "./AuthReducer";
import testCaseReducer from "./TestCaseReducer";
import projectReducer from "./ProjectReducer";
import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";

const rootReducer = combineReducers({
  auth: authReducer,
  testCase: testCaseReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer,
  project: projectReducer
});

export default rootReducer;
