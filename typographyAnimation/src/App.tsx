import { Paper } from "@mui/material";
import { ThemeProvider } from "@mui/system";
import * as React from "react";
import { HeaderCard } from "./component/headerCard/headerCard";

export default () => (
  <Paper
  sx={{
     border: "1px solid green",
     width: "100%",
     height: "100%"
  }}
 >
    <HeaderCard/>
  </Paper>
);
