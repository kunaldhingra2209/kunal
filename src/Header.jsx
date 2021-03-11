import { AppBar, Toolbar,Typography } from '@material-ui/core';
import {Home} from '@material-ui/icons'
import { makeStyles } from '@material-ui/styles';
import React from 'react'
const useStyles = makeStyles(()=> ({
    typographyStyles:{
        flex: 1
    }
}));
const Header =()=>{
    const classes=useStyles();
    return(
         <AppBar position="static">
             <Toolbar>
                 <Typography className={classes.typographyStyles}>Kunal Dhingra</Typography>
                 <Home />
             </Toolbar>
         </AppBar>
    )};

export default Header;