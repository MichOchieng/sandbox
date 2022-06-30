import * as React from "react";
import { VerticalScroll } from "./components/verticalScroll";
import SideScroll from "./components/sideScroll";
import { Grid } from "@mui/material";
import { Test } from "./components/test";


const App = () => {
  return (
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
          minWidth: '80vw',
          maxWidth: '80vw',
          position: 'relative'
        }}
      >
        <SideScroll />
      </Grid>
    </Grid>
  )
};

export default App;
