import './App.css';
import LandingPage from './Components/LandingPage';
import Dashboard from './Components/Dashboard';
import {firebase, db, storage} from './Firebase/FirebaseConfig';
import { useState, useEffect } from 'react';
// import {useNavigate,Routes, Route, Navigate} from 'react-router-dom'; 


function App() {
  const [images, setImages] = useState([]);
  const [isUserSignedIn, setisUserSignedIn] = useState(false);
  const [userName, setUserName] = useState('');
  // this function is for the login page! 
  const signInWithGoogle = () => {
    var google_provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(google_provider)
    .then((res)=>{
      console.log(res.user.displayName);
      let name = res.user.displayName;
      console.log(name);
      setUserName(name);
    })
    .catch((error)=>{
      console.log(error);
    })
  }
  // const signInWithEmailandPassword = () => {
  //   firebase.auth()
  //   .createUserWithEmailAndPassword(email,password)
  //   .then((res)=>{
  //     console.log(res);
  //   })
  //   .catch((error)=>{
  //     console.log(error)
  //   })
  // }
  firebase.auth().onAuthStateChanged((user)=>{
    if(user){
      console.log('state is changed to true');
      return setisUserSignedIn(true);
    }else{
      console.log('state is changed to false');
      setisUserSignedIn(false);
    }
  });
  const signOut = () => {
    firebase.auth().signOut();
  }
  useEffect(()=>{
    db.collection('Images').orderBy('timestamp','desc').onSnapshot((snapshot)=>{
      setImages(snapshot.docs.map(doc => ({
        id: doc.id,
        images: doc.data()
      })));
    });
    // console.log(userName);
  },[]);

  if(isUserSignedIn === true){
    return (
      <Dashboard
      userName = {userName} 
      signOut={signOut}
      imageURL = {images}
      />
    )
  }else{
    return (
      <LandingPage
      
      loginFunction={signInWithGoogle} />
    )
  }

}

export default App;
