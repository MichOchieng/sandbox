import { Button, Grid, Paper, Typography } from "@mui/material"
import { Box } from "@mui/system"
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax'
import * as React from "react"

import styles from "./styles.module.css";

interface PageProps {
    offset: number
    gradient: string
    onClick: () => void
}

const Page = ({ offset, gradient, onClick }: PageProps) => (
    <>
    {/* Base layer  */}
      <ParallaxLayer offset={offset} speed={0.2}>
        <Box sx={{
            backgroundColor: '#20232f',
            width: '100%',
            height: '100%',
        }}>
        </Box>
      </ParallaxLayer>
      {/* Title text */}
      <ParallaxLayer className={`${styles.text} ${styles.number}`} offset={offset} speed={0.3}>
        {/* <span>Test</span> */}
        <Box
          justifyContent={"flex-end"}
          sx={{
            height: "100%",
            display: "flex",
          }}
        >
          <Grid
          container
          direction={'column'}
          justifyContent={"center"}
          sx={{
            border: "1px solid pink",
            width: "40%",
            height: "100%"
            
          }}
        >
          {/* Title */}
          <Grid
            item
            sx={{
              border: "1px solid red"
            }}
          >
            <Typography
              variant="h1"
              sx={{
                fontSize: '0.3em'
              }}
            >
              Title
            </Typography>
          </Grid>

          {/* Description */}
          <Grid
            item
            sx={{
              border: "1px solid yellow"
            }}
          >
            <Typography
              sx={{
              }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            </Typography>
          </Grid>

          {/* Button group */}
          <Grid
            item
            sx={{
              border: "1px solid cyan",
              justifyContent: "center",
              alignContent: "center",
              textAlign: "center"
            }}
          >
            <Button>Link</Button>
            <Button>Demo</Button>
          </Grid>
        </Grid>
        </Box>
        
      </ParallaxLayer>
  
    {/* Divider thing */}
      {/* <ParallaxLayer offset={offset} speed={0.6} onClick={onClick}>
        <Box className={`${styles.slopeEnd} `} />
        
      </ParallaxLayer> */}
        
    
    </>
  )

export default function SideScroll(){

    const parallax = React.useRef<IParallax>(null)

    const scroll = (index: number) => {
        if (parallax.current) {
            parallax.current.scrollTo(index)
        }
    }

    return(
        <div
            style={{
                backgroundColor: 'yellow'
            }}
        >
            <Parallax className={styles.container} ref={parallax} pages={3} horizontal>
                <Page offset={0} gradient="pink" onClick={() => scroll(1)} />
                <Page offset={1} gradient="teal" onClick={() => scroll(2)} />
                <Page offset={2} gradient="tomato" onClick={() => scroll(0)} />
            </Parallax>
        </div>
    )
}