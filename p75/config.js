import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyAHEZU8TclZofYFdHDyk5oOJ6k_q7nK1BI",
  authDomain: "c71p-25b2f.firebaseapp.com",
  projectId: "c71p-25b2f",
  storageBucket: "c71p-25b2f.appspot.com",
  messagingSenderId: "318086927221",
  appId: "1:318086927221:web:d490635a0df6e77d80793c"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
