import React from "react";
import ReactDom from "react-dom";
import { DialogAuth, FullWidth, BoxAuth } from "../src/index";
import CssBaseline from "@material-ui/core/CssBaseline";

const App = () => {
  const [open, setOpen] = React.useState(true);
  return (
    <>
      <FullWidth />
      <DialogAuth open={open} onClose={() => setOpen(false)} />
    </>
  );
};

ReactDom.render(
  <>
    <CssBaseline />
    <App />
  </>,
  document.getElementById("root")
);
