import React from 'react'
import Button from '@mui/material/Button';

const DashboardComponent = () => {
  return (
      <>
          <div className='main_wrapper'>
            <div className="form_wrapper">
            <form className="main_form">
                <h1 className="form_heading">Dashboard</h1>
                    <Button
                    variant="contained"
                    className="main_signIn_Button"
                    >Show Files!</Button>
                    <hr 
                    className="main_hr"
                    />
                <Button
                className="main_signIn_Button"
                    variant="contained">Upload File</Button>

                
            </form>
            </div>
        </div>
      </>

  )
}

export default DashboardComponent