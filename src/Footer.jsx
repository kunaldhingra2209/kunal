import { AppBar, Toolbar,Typography,Button } from '@material-ui/core';
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
         <AppBar  color="secondary" position="bottom" className="footer" align="bottom">
             <Toolbar>
                 <div>
                 {/* <Typography className={classes.typographyStyles}>My Hotel</Typography> */}
                 <Button className="footer"  >Home</Button>
                 <Button  >Services</Button>
                 <Button align="centre" >About</Button>
                 <Button align="right" >Contact</Button>
                 </div>
             </Toolbar>
         </AppBar>
    )};

export default Header;