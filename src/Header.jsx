import { AppBar, Toolbar,Typography,Button, colors } from '@material-ui/core';
// import {Home} from '@material-ui/icons'
import { makeStyles } from '@material-ui/styles';
import React from 'react'
import{ BrowserRouter as Router }from 'react-router-dom';
import { Route, Switch} from 'react-router-dom';
import About from './About.jsx';
import Service from './Service.jsx';
import Contact from './Contact.jsx';
import Home from './Home.jsx'
import { Link } from 'react-router-dom';

const useStyles = makeStyles(()=> ({
    typographyStyles:{
        flex: 1,
        color:"secondary"
    }
}));
const Header =()=>{
    const classes=useStyles();
    return(
        <>
        
            <Router>
            <AppBar  color="secondary" position="static">
             <Toolbar>
                 <Typography  variant="h4" className={classes.typographyStyles}>My Hotel</Typography>
                 <Link to="/Home"> <Button align="right" >Home</Button> </Link>
                 <Link to="/Services"> <Button align="right" >Services</Button></Link>
                 <Link to="/About"><Button align="right" >About</Button></Link>
                 <Link to="/Contact"><Button align="right" >Contact</Button></Link>
             </Toolbar>
         </AppBar>

            <Route  exact path="/Home"component={Home}></Route>
            <Route exact path="/services" component={Service}></Route>
            <Route exact path="/about" component={About}></Route>
            <Route exact path="/contact" component={Contact}></Route>
       
        
         </Router>
 
         </>
    )};

export default Header;