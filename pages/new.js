
import React from 'react';
import { Grid,Paper,TextField, Typography, InputAdornment} from '@material-ui/core'
import { useState } from "react";
import { Button } from '@material-ui/core';
import validator from 'validator'
import MailOutlineIcon from '@material-ui/icons/MailOutlined';
import LockIcon from '@material-ui/icons/Lock';
import AccountCircle from '@material-ui/icons/AccountCircle';
import DockIcon from '@material-ui/icons/Dock';
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";

import VisibilityOff from "@material-ui/icons/VisibilityOff";


const New=()=>{
    const paperStyle={padding :15,height:'80vh',width:350,margin:"20px auto",backgroundColor:"#F7F5F2"}
    const [values, setValues] = React.useState({
      password: "",
      showPassword: false,
  });
  
  const handleClickShowPassword = () => {
      setValues({ ...values, showPassword: !values.showPassword });
  };
  
  const handleMouseDownPassword = (event) => {
      event.preventDefault();
  };
  
  const handlePasswordChange = (prop) => (event) => {
      setValues({ ...values, [prop]: event.target.value });
  };
  const [errorMessage, setErrorMessage] = useState('')

  const validate = (value) => {
  
    if (validator.isStrongPassword(value, {
    minLength: 8, minLowercase: 1,
    minUppercase: 1, minNumbers: 1, minSymbols: 1
    })) {
    setErrorMessage('Is Strong Password')
    } else {
    setErrorMessage('Is Not Strong Password')
    }
  }

  const [emailError, setEmailError] = useState('')
  const validateEmail = (e) => {
	var email = e.target.value

	if (validator.isEmail(email)) {
	setEmailError('Valid Email :)')
	} else {
	setEmailError('Enter valid Email!')
	}
}
  const [mobile, setmobile] = useState("");
const [isError, setIsError] = useState(false);
    
    return(
       
        <Grid
              container spacing={3}
               direction="row"
               justifyContent="center"
               alignItems="flex-end">
         <Paper elavation={5} style={paperStyle}>
             <br /> <br /> <br />
             
                <br />
                <Grid align="center" >
                                                
                <TextField
                id="input-with-icon-textfield"
                placeholder='Email'
                error={emailError}
                
                 type="text"
                onChange={(e) => validateEmail(e)}
                 style={{
                fontWeight: 'bold',
                color: 'red',
                }} 
                
               
                inputProps={{style: {fontSize: 13}}}
                InputProps={{
                startAdornment: (
                <InputAdornment position="start">
                 <MailOutlineIcon style={{color:"#DDDDDD"}} />
                 </InputAdornment>
               
          ),
         
        }}
        variant="standard"
       
      />
                 <br /> <br />
                </Grid>
                <Grid align="center" >
                                                
               <TextField
               id="input-with-icon-textfield"
               placeholder='Username'
               inputProps={{style: {fontSize: 13}}}
               InputProps={{
               startAdornment: (
              <InputAdornment position="start">
               <AccountCircle style={{color:"#DDDDDD"}} />
              </InputAdornment>
              ),
              }}
              variant="standard"
              />
                                                                                  
            </Grid>    
                <br /> 
                <Grid  align="center">
                
                <TextField
                type="tel"
                error={isError}
                value={mobile}
                id="input-with-icon-textfield"
                placeholder='mobile no'

                onChange={(e) => {
                  setmobile(e.target.value);
                  if (e.target.value.length > 10) {
                    setIsError(true);
                  }
                  }}
                inputProps={{style: {fontSize: 13}}}
                InputProps={{
                startAdornment: (
                <InputAdornment position="start">
                  <DockIcon style={{color:"#DDDDDD"}}/>
                
                </InputAdornment>
          ),
        }}
        variant="standard"
      />
                </Grid>
                <br /> 
                <Grid align="center" >
                                                
              
                        <TextField
        id="input-with-icon-textfield"
        placeholder='password'
        
        error={isError }
        
         
          style={{
            fontWeight: 'bold',
            color: 'red',
            }}

        type={values.showPassword ? "text" : "password"}
        onChange={  handlePasswordChange("password")}
             value={values.password}
             
             
        InputProps={{
          style: {fontSize: 13},
          startAdornment: (
            <InputAdornment position="start">
              <LockIcon style={{color:"#DDDDDD"}} />
            </InputAdornment>),
             }}
              
             
             endAdornment={
             <InputAdornment position="end">
               <IconButton
               onClick={handleClickShowPassword}
               onMouseDown={handleMouseDownPassword}
               >
               {values.showPassword ? <Visibility /> : <VisibilityOff />}
               </IconButton>
             </InputAdornment>
             }
             variant="standard"
             />  
             </Grid>
             <br/>     
             <Grid align="center">
             <Button
              style={{
                    
                backgroundColor: "#548CFF",
                
                textColor:"white",
                borderRadius: 10
            }}
            variant="contained"
            textAlign='center'
            size="medium"
            >
          <Typography style={{color:"white"}}textAlign='center'>Submit</Typography>
          </Button>
          </Grid>
          <Grid>
          </Grid>
          <br />
          <Grid  container
            direction="row"
            justifyContent="space-evenly"
            alignItems="flex-start"
            >
            <img src="/facebook.jpg.png"  width="30" height="30"/>
                 
            <img src="/linkedin.jpg.png" width="30" height="30"/>
                 
            <img src="/google.jpg.png"  width="28" height="28"/>
            </Grid>
              
            </Paper>
              
          </Grid>    
 )
}

export default New
       
         
         

       
        
        

        


       
                                
             
                
                
                    
                    
               
               
                
                 
                
              
               
               
               
                 
 
                 
                 
               
             
               
             
                 
             
      
              
        
   