import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDCdgb5YGEU6E__VENtW5IJLPPEiM6ZZJ8",
  authDomain: "vue-full-course.firebaseapp.com",
  databaseURL: "https://vue-full-course.firebaseio.com",
  projectId: "vue-full-course",
  storageBucket: "vue-full-course.appspot.com",
  messagingSenderId: "164889229979",
  appId: "1:164889229979:web:bffd7395881db11f3fe43e",
};

firebase.initializeApp(firebaseConfig);
const db = firebase.database();
export const chatsRef = db.ref("chats");

export default firebase;
