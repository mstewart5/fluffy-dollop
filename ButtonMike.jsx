import React from 'react'
import {
    Button, 
    // Center, 
    MantineProvider, 
    // Input, 
    Paper
} from '@mantine/core';
import classes from './Button.module.css';
import { useNavigate } from 'react-router-dom';
function MyButton() {

    const navigate = useNavigate()

     function goToNewPage() {

        navigate("/login");
      }

      function goToSignUpPage() {

        navigate("/register");
      }

      return (
        <MantineProvider>
            <div className={classes.stinky}>
                <Paper className={classes.buttonBackGround}>
                    <Button 
                        style={{ width: '30%', marginTop: '380px', marginRight: '-575px'}} // Adjust width here
                        onClick={() => goToNewPage()} 
                        variant="filled"
                        color="darkgreen"
                    >
                        Login
                    </Button>
                    <Button 
                        style={{ width: '30%', marginTop: '550px'}} // Adjust width here
                        onClick={() => goToSignUpPage()} 
                        variant="filled"
                        color="darkgreen"
                    >
                        Sign Up
                    </Button>
                </Paper>
            </div>
        </MantineProvider> 
    );
}
export default MyButton;