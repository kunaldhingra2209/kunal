import { AppBar, Toolbar,Button,Typography,Grid } from "@material-ui/core";
import React from "react";
import icons from '@material-ui/icons'
import styles from '@material-ui/styles'
import Headers from './Header'
import Content from './Content'
import CoolButton from './coolbutton'



export default function Header() {
  const cool=true;
  return(
    <CoolButton cool={cool} />
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