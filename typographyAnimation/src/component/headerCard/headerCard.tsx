import * as React from "react";
import { Grid, Paper } from "@mui/material";
import { Box } from "@mui/system";

const name: string[] =   ['','','O','',
                        'M','I','C','H',
                          '','','H','',
                          '','','I','',
                          '','','E','',
                          '','','N','',
                          '','','G','']

export const HeaderCard = () => {
    return (
        <Paper
            sx={{
                border: "1px solid red",
                textAlign: "center",
            }}
        >
            <Grid 
                container
            >
                {name.map((_, index) => (
                <Grid item xs={3} sm={3} md={3} key={index}>
                    <h1>{name[index]}</h1>
                </Grid>
                ))}
            </Grid>

        </Paper>
    )
}