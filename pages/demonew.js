import React from 'react';
import New from './New';

import Loging from './Loging';
import { Grid,Paper,TextField, Typography,InputAdornment } from '@material-ui/core'
import MailOutlineIcon from '@material-ui/icons/MailOutlined';
import LockIcon from '@material-ui/icons/Lock';
import AccountCircle from '@material-ui/icons/AccountCircle';
import DockIcon from '@material-ui/icons/Dock';
import { Button } from '@material-ui/core';

function Demonew() {

    return (
         <Grid
         container
         spacing={0}
         direction="row"
         alignItems="center"
         justifyContent="center"
         style={{ minHeight: '100vh' }}
        >
             
             <Grid items>
             <Loging/>
               
             </Grid>
             <Grid items >
             <New />
             </Grid>
             
         </Grid>
    )

}

export default Demonew
