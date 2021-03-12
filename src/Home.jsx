import { Button, Typography,Paper } from "@material-ui/core";
import React from "react";
import Header from './Header'
import './style.css';
import green from '@material-ui/core/colors/green'
import {ThemeProvider} from '@material-ui/core/styles';
import theme from './theme'


export default function Home() {
    return (
        <>
<<<<<<< HEAD
        <div  className="logo">
            <Paper>
=======
        <div>
        <div  className="logo ">
            <div>
>>>>>>> 569904992997e41d2b567f50d43738f7fb99c697
            <Typography  variant="h4">Grow your business with Us.</Typography>
            <ThemeProvider theme={theme}>
            <Button className="text" variant="contained" color="primary" >Get Started</Button>
            </ThemeProvider>
            </div>
            
            {
            <img  className="image"src="https://cache.marriott.com/marriottassets/marriott/BOMSA/bomsa-exterior-0023-hor-clsc.jpg?downsize=1440px:*"  alt="logo"/>
        }
        </Paper>
        </div>
        </div>
      
        </>
    )
}
