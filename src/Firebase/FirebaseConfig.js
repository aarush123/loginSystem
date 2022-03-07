import firebase from 'firebase';
import "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyBLuZfJMLJiphqOiQu0Xvyd466bSMDQT5Y",
    authDomain: "login-system-v1-a0ab7.firebaseapp.com",
    projectId: "login-system-v1-a0ab7",
    storageBucket: "login-system-v1-a0ab7.appspot.com",
    databaseURL: "https://login-system-v1-a0ab7-default-rtdb.firebaseio.com",
    messagingSenderId: "960222612695",
    appId: "1:960222612695:web:2c111e6b466596e32db492"
  };
  firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const storage = firebase.storage();
  export {storage, firebase, db};