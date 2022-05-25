import React from 'react';
import { Grid,Paper,Avatar,TextField, Typography,} from '@material-ui/core'

import { Button } from '@material-ui/core';


  
   

const Boxsx=()=>{
   
    const paperStyle={padding :15,height:'80vh',width:300,margin:"20px auto"}
   
    
    return(
        
        <Grid container>
           
            <Paper elavation={5} style={paperStyle} sx={{ backgroundColour:"blue"}}>
                <Grid direction="row"
                 justifyContent="flex-end"
                 alignItems="flex-start"
                 >Brickshare</Grid>
                <br />
                <br /><br /><br /><br /><br />
                
                <Grid >
                  Get exclusive access 
                  to brickshare<br /><br />
                  we are in the process of online platform
                </Grid>
                
               

               
              
            </Paper>
            
        </Grid>
        
    )
}

export default Boxsx