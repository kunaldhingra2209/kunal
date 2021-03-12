import { AppBar, Toolbar,Typography,Button,Grid, } from '@material-ui/core';
import {Home} from '@material-ui/icons'
import { makeStyles } from '@material-ui/styles';
import React from 'react'
import { spacing } from '@material-ui/system'
import './style.css'
const useStyles = makeStyles(()=> ({
    typographyStyles:{
        flex: 1
    }
}));
const Header =()=>{
    const classes=useStyles();
    return(
         <AppBar  color="secondary" position="relative" className="footer" align="bottom">
             <Toolbar>
                 <div>
                 {/* <Typography className={classes.typographyStyles}>My Hotel</Typography> */}
                 <Grid container spacing={10} direction="row">
                    <Grid item  ><Button  >Home</Button></Grid>
                    <Grid item  ><Button style={{align:"center"}} >Services</Button></Grid>
                    <Grid item ><Button align="centre" >About</Button></Grid>
                    <Grid item ><Button align="right" >Contact</Button></Grid>
                 </Grid>
                 
                 
                 
                 
                 
                 </div>
             </Toolbar>
         </AppBar>
    )};

export default Header;