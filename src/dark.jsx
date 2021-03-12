import { Button, Paper, Typography,Grid } from "@material-ui/core";
import React from "react";

export default function dark(){
    return(
        <Paper style={{height:"100vh"}}>
            <Grid container direction="column">
                <Typography variant="h1">This is my App!</Typography>
                <Button variant="contained" color="primary">
                    This is a button
                </Button>
                <Button variant="contained" color="secondary">
                    This is a another button
                </Button>

            </Grid>

        </Paper>
    )

}