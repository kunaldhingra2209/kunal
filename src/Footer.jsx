import { AppBar, Toolbar,Typography,Button } from '@material-ui/core';
import {} from '@material-ui/icons'
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
        <>
     
         <AppBar  color="secondary" position="bottom" className="footer" align="bottom">
             <Toolbar>
                 <div>
                 {/* <Typography className={classes.typographyStyles}>My Hotel</Typography> */}
                
               
               <Button align="right"  className="footer">Home</Button>
               <Button align="right" >Services</Button>
               <Button align="centre" >About</Button>
               <Button align="right" >Contact</Button>
                 </div>
             </Toolbar>
         </AppBar>
       
     
         </>
    )};

export default Header;