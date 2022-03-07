import React, { useEffect } from 'react'
import { useState } from 'react';
import {storage, db, firebase} from "../Firebase/FirebaseConfig";
import ImagesList from './ImagesList';
import Navbar from './Navbar';

const Dashboard = ({signOut, imageURL}) => {
    const [image, setImage] = useState(null);
    const [progress, setProgress]  = useState(0);
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleChange = (e) => {
        if(e.target.files[0]){
            setImage (e.target.files[0]);
        }
    }

    const handleUpload = () => {
        const uploadTask = storage.ref(`Images/${image.name}`).put(image);
        uploadTask.on(
            "state_changed",
            (snapshot) =>{
                // progress function...
                const progress = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
                setProgress(progress);
            },
            (error) => {
                console.log(error);
            }, 
            () => {
             // complete function
             storage
             .ref("Images")
             .child(image.name)
             .getDownloadURL()
             .then((url)=>{
                db.collection("Images").add({
                    timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                    imageURL: url
                });
             });
             setProgress(0);
            }
        )
    }
     return (
    <div>
        <Navbar
            handleOpen={handleOpen}
            signOut = {signOut}
            handleClose={handleClose}
            progress={progress}
            handleChange={handleChange}
            handleUpload={handleUpload}
            imageURL={imageURL}
            open={open}
            setOpen={setOpen}
            imageURLForModal = {imageURL}
            className="Navbar_wrapper"
        />
        
        <ImagesList 
            className="images_wrapper"
            imageURL = {imageURL}
        />
    </div>
  )
}

export default Dashboard;