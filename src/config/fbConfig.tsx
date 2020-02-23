import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD5962MZlXTHjz7i-YxFgHsqLXPTFY6Gsk",
  authDomain: "regression-app.firebaseapp.com",
  databaseURL: "https://regression-app.firebaseio.com",
  projectId: "regression-app",
  storageBucket: "regression-app.appspot.com",
  messagingSenderId: "91064113198",
  appId: "1:91064113198:web:812b685c8fd7739e3be7bf",
  measurementId: "G-3JS99RTJX5"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
