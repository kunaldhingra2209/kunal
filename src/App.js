import { AppBar, Toolbar,Button,Typography,Grid, createMuiTheme } from "@material-ui/core";
import React from "react";
import icons from '@material-ui/icons'
import styles from '@material-ui/styles'
import Headers from './Header'
import Content from './Content'
import CoolButton from './coolbutton'
import Dark from './dark'
import {ThemeProvider} from "@material-ui/styles"
import Home from './Home'
import {spacing} from "@material-ui/system"
import Footer from './Footer'




export default function Header() {
  // const cool=true;
  // const [darkMode,setDarkMode]=useState(false);
  // const theme = createMuiTheme({
  //   palette:{
  //     type: darkMode? "dark" : "light",

  //   }
  // })
  return(
    <>
    <Headers  />
    <Home  />
    <Footer />

    </>
    // <ThemeProvider theme={theme}><Dark /></ThemeProvider>
    
    // <CoolButton cool={cool} />
//   <Button variant="outlined" color="secondary">
//   Secondary
// </Button>
    // <Typography>Material-UI</Typography>
    // <Grid container direction="column">
    //   <Grid item>
    //     <Headers />
    //   </Grid>
    //   <Grid item container>
    //     <Grid item xs={false} sm={2} />
    //     <Grid item xs={12} sm={8}>
    //       <Content />
    //       </Grid>
      
    //   <Grid item xs={false} sm={2}/>
        
    //   </Grid>
    // </Grid>
  
  )
  
}