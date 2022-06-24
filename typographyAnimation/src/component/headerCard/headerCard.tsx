import * as React from "react";
import { Grid, Paper } from "@mui/material";
import { Box } from "@mui/system";
import { Transition, useSprings, animated, config, useTransition, useSpring } from "react-spring";

const name: string[] =   ['','','O','',
                        'M','I','C','H',
                          '','','H','',
                          '','','I','',
                          '','','E','',
                          '','','N','',
                          '','','G','']

export const HeaderCard = () => {

    const base = {
        config: { mass: 5, tension: 2000, friction: 200 },
        to: { opacity: 1,transform: "translate3d(0, 0%, 0)" }, 
        from: { opacity: 0,transform: "translate3d(0, -100%, 0)" },
      }

    const springs = useSprings(
        name.length, name.map((t,i) => ({...base,delay: 100*i}))
        )
    
    return (
        <Paper
            sx={{
                border: "1px solid red",
                textAlign: "center",
                maxWidth: "20%",
                minWidth: "200px",
            }}
        >
            <Grid 
                container
            >
                {springs.map((s, index) => (
                    <Grid item xs={3} sm={3} md={3} key={index}>
                        <animated.h1 
                            key={`char${index}`}
                            style={s}
                        >
                            {name[index]}
                        </animated.h1>
                    </Grid>
                ))}

            </Grid>
 
        </Paper>
    )
}