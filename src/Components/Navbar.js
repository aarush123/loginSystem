import React, { useEffect } from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { useState } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
const Navbar = ({signOut, progress, handleChange, handleUpload, imageURLForModal}) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    useEffect(()=>{
        handleClose();
    },[imageURLForModal]);
    return (
    <>
    <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            {/* <MenuIcon /> */}
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Dashboard
          </Typography>
          <Button color="inherit"
            onClick={handleOpen}
          >Upload File
          </Button>
          <Button color="inherit"
              onClick={signOut}
          >Sign out
          </Button>
        </Toolbar>
      </AppBar>

      <Modal 
        open={open}
        onClose = {()=>setOpen(false)}
        >
        <Box className="modal">
            <div className='upload_files_section'>
            <button className="close" onClick={handleClose}>X</button>
                <h3>Upload Image!</h3>
                <progress value={progress} max="100"/>
                <input type="file" className="uploadFileInput" onChange={handleChange}/>
                <Button variant="contained" onClick={handleUpload} className="uploadButton">Upload File!</Button>
            </div>
            </Box>
        </Modal>
      </>
  )
}

export default Navbar