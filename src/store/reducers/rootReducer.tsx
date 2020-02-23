import authReducer from "./AuthReducer";
import testCaseReducer from "./TestCaseReducer";
import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";

const rootReducer = combineReducers({
  auth: authReducer,
  testCase: testCaseReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer
});

export default rootReducer;
