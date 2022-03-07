import React from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { useState } from 'react';

// modal Styling
// const style = {
//     position: 'absolute',
//     top: '50%',
//     left: '50%',
//     transform: 'translate(-50%, -50%)',
//     width: 400,
//     bgcolor: 'background.paper',
//     border: '2px',
//     borderRadius: '10px',
//     boxShadow: 24,
//     p: 4,
//   };
const UploadFile = ({progress,handleChange,handleUpload, imageURL, handleClose, open}) => {
    
  return (
    <Modal 
    open={open}
    onClose = {handleClose}
    >
        <Box className="modal">
        <div className='upload_files_section'>
            <h3>Upload Image!</h3>
            <progress value={progress} max="100"/>
            <input type="file" className="uploadFileInput"onChange={handleChange}/>
            <button className="uploadButton" onClick={handleUpload}>Upload File!</button>
            </div>
        </Box>
    </Modal>
   
  )
}

export default UploadFile