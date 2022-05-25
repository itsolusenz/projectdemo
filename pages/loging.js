import React from 'react';
import { Grid,Paper,Avatar,TextField, Typography,Box} from '@material-ui/core'



  
   

 
   
    const paperStyle={padding :15,height:'80vh',width:300,margin:"20px auto", backgroundColor:"#548CFF"}
   
      function Loging() {
    
    return(
        
        <Grid container>
            <Paper elavation={5} style={paperStyle}>
               
                <Grid direction="row"
                 justifyContent="flex-end"
                 alignItems="flex-start"
                 >
                     <Typography style={{color:"white"}}>Brickshare</Typography>
                     </Grid>
                <br />
                <br /><br /><br /><br /><br />
                
                
                
                
                <Typography style={{color:"white"}} align='right'  >
                
                Get exclusive access  
               
                
                  to brickshare
                  
                  </Typography>
                  <br />
                  <br />
                  
                  <Typography style={{color:"white"}} align='right' justifyContent="right">
                  we are in the process
                   of online platform
                  </Typography>
                  
                  
                
               

               
              
            </Paper>
            
        </Grid>
        
    )
}

export default Loging