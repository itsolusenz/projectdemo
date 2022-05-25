import React from 'react';
import Logindemo1 from './Logindemo1';

import Loging from './Loging';
import { Grid,Paper,Avatar,TextField, Typography,Link,InputAdornment,ListItemText } from '@material-ui/core'
import MailOutlineIcon from '@material-ui/icons/MailOutlined';
import LockIcon from '@material-ui/icons/Lock';

import { Button } from '@material-ui/core';

function Demo1() {

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
             <Logindemo1 />
             </Grid>
             
         </Grid>
    )

}

export default Demo1
