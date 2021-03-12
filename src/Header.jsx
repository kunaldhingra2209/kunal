import { AppBar, Toolbar,Typography,Button, colors } from '@material-ui/core';
import {Home} from '@material-ui/icons'
import { makeStyles } from '@material-ui/styles';
import React from 'react'
const useStyles = makeStyles(()=> ({
    typographyStyles:{
        flex: 1,
        color:"secondary"
    }
}));
const Header =()=>{
    const classes=useStyles();
    return(
         <AppBar  color="secondary" position="static">
             <Toolbar>
                 <Typography  variant="h4" className={classes.typographyStyles}>My Hotel</Typography>
                 <Button align="right" >Home</Button>
                 <Button align="right" >Services</Button>
                 <Button align="right" >About</Button>
                 <Button align="right" >Contact</Button>
             </Toolbar>
         </AppBar>
    )};

export default Header;