import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
const LandingPage = ({loginFunction}) => {
  return (
    <div className='main_wrapper'>
        <div className="form_wrapper">
          <form className="main_form">
            <h1 className="form_heading">Login</h1>
                <TextField id="standard-basic"  
                className="form_contents"
                placeholder="Enter Username"
                required/>
                <TextField id="standard-basic"
                className="form_contents"
                placeholder="Enter your Password" 
                type="password"/>
              <Button
               className="main_signIn_Button"
                variant="contained">Login</Button>
                <hr 
                  className="main_hr"
                />
                <Button
                className="main_signIn_Button"
                variant="contained"
                onClick={loginFunction}
                >
                  Sign In With Google!
                </Button>
          </form>
        </div>
        
        
      </div>
  )
}

export default LandingPage