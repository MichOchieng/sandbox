import * as React from "react";
import SideScroll from "./components/sideScroll";
import { Grid } from "@mui/material";


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
          minHeight: '50vh',
          // maxWidth: '60vw',
          // width: "60vw",
          position: 'relative',
        }}
      >
        <SideScroll />
      </Grid>
    </Grid>
  )
};

export default App;
