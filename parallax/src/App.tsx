
import * as React from "react";
import { VerticalScroll } from "./components/verticalScroll";
import SideScroll from "./components/sideScroll";
import { Grid } from "@mui/material";


const App = () => {
  return(
    <Grid
    container
    >
      <Grid
        item
        sx={{
          maxHeight: '40vh',
          maxWidth: '40vw'
        }}
      > 
        <SideScroll/>
      </Grid>
    </Grid>
  )
};

export default App;
