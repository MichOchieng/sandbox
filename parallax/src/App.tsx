import * as React from "react";
import { VerticalScroll } from "./components/verticalScroll";
import SideScroll from "./components/sideScroll";
import { Grid } from "@mui/material";
import { Test } from "./components/test";
import { ParallaxProvider } from "react-scroll-parallax";


const App = () => {
  return(
    <ParallaxProvider scrollAxis="horizontal">
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        sx={{
          minHeight: '98vh'
        }}
        >
          <Grid
            item
            sx={{
              border: '1px solid red ',

              minHeight: '40vh',
              minWidth: '40vw',
            }}
          > 

            <Test/>
            {/* <SideScroll/> */}
          </Grid>
        </Grid>
    </ParallaxProvider>
  
  )
};

export default App;
