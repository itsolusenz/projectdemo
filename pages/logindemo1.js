
import React from 'react';
import { Grid,Paper,Avatar,TextField, Typography,Link, InputAdornment, ListItemText} from '@material-ui/core'
import  { useState } from "react";
import { Button } from '@material-ui/core';

import MailOutlineIcon from '@material-ui/icons/MailOutlined';
import LockIcon from '@material-ui/icons/Lock';
import { useRouter} from "next/router"
import New from './New';
import Demonew from './Demonew';
import Loging from './Loging';
import validator from 'validator'
import IconButton from "@material-ui/core/IconButton";
import InputLabel from "@material-ui/core/InputLabel";
import Visibility from "@material-ui/icons/Visibility";

import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Input from "@material-ui/core/Input";
const Logindemo1 = () => {
    const router = useRouter();
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
    const [emailError, setEmailError] = useState('')
const validateEmail = (e) => {
	var email = e.target.value

	if (validator.isEmail(email)) {
	setEmailError('Valid Email :)')
	} else {
	setEmailError('Enter valid Email!')
	}
}
    
    return(
       
        <Grid
              container spacing={3}
               direction="row"
               justifyContent="center"
               alignItems="flex-end"
  
              >
         
        
            <Paper elavation={5} style={paperStyle}>
            <Grid
               container
               direction="row"
               justifyContent="flex-end"
               alignItems="flex-start"
               >
                  <ListItemText>Don't have an account?</ListItemText> 
<Button
                 style={{
                    
                    backgroundColor: "#F7F5F2",
                         color:"#548CFF",
                         borderColor:"#F7F5F2"
                    
                }}
                variant="contained"
                textAlign='flex-end'
                size="small"
                onClick={() => {
                 router.push("/demonew");
                }}
                
                
                
                
                >create profile </Button>
                </Grid>
   
           
               <br /> <br /> <br /> <br /> 
              

                <Grid align="center" >
                
               
               
                <TextField
               color="#EFEFEF"
        id="input-with-icon- textfiled"
        placeholder='Email'
        error={emailError}
                
        type="text"
       onChange={(e) => validateEmail(e)}
        style={{
       fontWeight: 'bold',
       color: 'red',
       }} 
        inputProps={{style: {fontSize: 13}}} // font size of input text
       

        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <MailOutlineIcon style={{color:"#DDDDDD"}} />
            </InputAdornment>
          ),
        }}
        variant="standard"
      />
                
                </Grid>
                <br />
                <Grid  align="center">
               
                
                <TextField
        id="input-with-icon-textfield"
        placeholder='password'
        type={values.showPassword ? "text" : "password"}
             onChange={handlePasswordChange("password")}
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
                    <br />
               <Grid align="center">
               
                <Button
                 style={{
                    
                    backgroundColor: "#548CFF",
                    borderColor:"#548CFF",
                    Color:"white",
                    borderRadius: 10
                }} 
                variant="contained"
                textAlign='center'
                
               
                >
                <Typography style={{color:"white"}} textAlign='center'>Login</Typography>
              </Button>
              </Grid>
               <Grid>

               </Grid>
               
               <Grid item align ='center'>
                 <Link href="#" variant="body2">
                     Forgot Password?
                 </Link>
                 <br />
                 <Grid
  container
  direction="row"
  justifyContent="space-evenly"
  alignItems="flex-start"
>
                 
                 <img src="/facebook.jpg.png"  width="30" height="30"/>
                 
                 
                 
                 <img src="/linkedin.jpg.png" width="30" height="30"/>
                 
                 <img src="/google.jpg.png"  width="28" height="28"/>
                
                 </Grid>
               
             
                 </Grid>
             
                 
             
      
               
              
            </Paper>
            
        </Grid>
        
    )
}

export default Logindemo1