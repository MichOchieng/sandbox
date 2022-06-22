import * as React from "react";
import { Grid, Paper } from "@mui/material";

export const HeaderCard = () => {
    return(
        <Paper
            sx={{
                border: "1px solid red",
                textAlign: "center",
            }}
        >
        <Grid
            container
        >
            <Grid
                item
                xs={2}
            >
                <h1>a</h1>
            </Grid>
            <Grid
                item
                xs={2}
            >
                <h1>b</h1>
            </Grid>
            <Grid
                item
                xs={2}
            >
                <h1>c</h1>
            </Grid>
            <Grid
                item
                xs={2}
            >
                <h1>d</h1>
            </Grid>
        </Grid>
        </Paper>
    )
}