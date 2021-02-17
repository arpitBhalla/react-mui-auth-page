import React from "react";
import ReactDom from "react-dom";
import DialogAuth from "./Dialog";
import CssBaseline from "@material-ui/core/CssBaseline";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#007fff",
    },
  },
});

ReactDom.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <DialogAuth />
  </ThemeProvider>,
  document.getElementById("root")
);
