import { Grid } from '@material-ui/core';
import React from 'react';
import CoffeCard from './CoffeCard'

const Content =() =>{
    return(
        <Grid container spacing={4}>
            <Grid item xs={12} sm={4}>
                <CoffeCard 
                    avatarSrc='./cofee.jpg'
                    title='Hamilton Beach Flexbrew'
                    subtitle='89.9'
                     
                    />
            </Grid>
            <Grid item xs={12} sm={4}>
                <CoffeCard />
            </Grid>
            <Grid item xs={12} sm={4}>
                <CoffeCard />
            </Grid>
        </Grid>
        
    )
}

export default Content;