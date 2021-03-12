<<<<<<< HEAD
import { AppBar, Toolbar,Typography,Button,Grid, } from '@material-ui/core';
import {Home} from '@material-ui/icons'
=======
import { AppBar, Toolbar,Typography,Button } from '@material-ui/core';
import {} from '@material-ui/icons'
>>>>>>> 569904992997e41d2b567f50d43738f7fb99c697
import { makeStyles } from '@material-ui/styles';
import React from 'react'
import { spacing } from '@material-ui/system'
import './style.css'
import { Link } from 'react-router-dom';
import{ BrowserRouter as Router }from 'react-router-dom';
import { Route, Switch} from 'react-router-dom';
import About from './About.jsx';
import Service from './Service.jsx';
import Contact from './Contact.jsx';
import Home from './Home.jsx'
const useStyles = makeStyles(()=> ({
    typographyStyles:{
        flex: 1
    }
}));
const Header =()=>{
    const classes=useStyles();
    return(
<<<<<<< HEAD
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
                 
                 
                 
                 
                 
=======
        <>
     
         <AppBar  color="secondary" position="bottom" className="footer" align="bottom">
             <Toolbar>
                 <div>
                 {/* <Typography className={classes.typographyStyles}>My Hotel</Typography> */}
                
               
               <Button align="right"  className="footer">Home</Button>
               <Button align="right" >Services</Button>
               <Button align="centre" >About</Button>
               <Button align="right" >Contact</Button>
>>>>>>> 569904992997e41d2b567f50d43738f7fb99c697
                 </div>
             </Toolbar>
         </AppBar>
       
     
         </>
    )};

export default Header;