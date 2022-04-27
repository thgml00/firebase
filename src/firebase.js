import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCD08Fl2FQxhXRVXBb9k_rUwRhfXQFpBhU",
  authDomain: "testproject-db315.firebaseapp.com",
  projectId: "testproject-db315",
  storageBucket: "testproject-db315.appspot.com",
  messagingSenderId: "104818395316",
  appId: "1:104818395316:web:cc0856de5f55e69ba8efe1",
  measurementId: "G-QLLZLHVPKS"
};

export default firebase.initializeApp(firebaseConfig);
export const firestore = firebase.firestore();