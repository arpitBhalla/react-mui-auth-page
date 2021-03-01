import React from "react";
import ReactDom from "react-dom";
import { DialogAuth, BoxAuth, FullWidthAuth } from "../src";
import CssBaseline from "@material-ui/core/CssBaseline";
import Box from "@material-ui/core/Box";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import HomeIcon from "@material-ui/icons/HomeOutlined";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#007fff",
    },
  },
});

const App = () => {
  let mode = Array.from(window.location.href.match(/\?q=(.*)/) || [])[1] || 0;
  React.useEffect(() => {}, [mode]);

  const [open, setOpen] = React.useState(true);

  const handleSignIn = ({ email, password }) => {
    console.log({ email, password });
  };
  const handleSignUp = ({ email, name, password }) => {
    console.log({ email, name, password });
  };
  const handleForget = ({ email }) => {
    console.log({ email });
  };
  const handleLinkedIn = () => {
    console.log("Do Linkedin call");
  };
  const handleGithub = () => {
    console.log("Do Github call");
  };

  if (mode == 0)
    return (
      <Box p={5} textAlign="center">
        <Typography align="center" variant="h4" color="primary">
          <b>react-mui-auth-page</b>
        </Typography>
        {["Dialog", "Dialog Without Tabs", "FullWidth", "Box Container"].map(
          (_, key) => (
            <Box key={key} p={1}>
              <Button
                variant="contained"
                color="primary"
                onClick={() => {
                  window.location.href = `?q=${key + 1}`;
                }}
                style={{ textTransform: "none" }}
              >
                {_}
              </Button>
            </Box>
          )
        )}
      </Box>
    );
  let props = {
    open,
    onClose() {
      setOpen(false);
    },
    logoName: "My Logo",
    handleSignUp,
    handleForget,
    handleSignIn,
    handleSocial: {
      Linkedin: handleLinkedIn,
      Github: handleGithub,
      Facebook: () => {},
      Twitter: () => {},
    },
  };
  switch (mode) {
    case "1":
      return <DialogAuth {...props} />;
    case "2":
      return <DialogAuth {...{ ...props, hideTabs: true }} />;
    case "3":
      return <FullWidthAuth {...props} />;
    case "4":
      return <BoxAuth {...props} />;
    default:
      return null;
  }
};

ReactDom.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <div
      style={{
        position: "fixed",
        bottom: 2,
      }}
    >
      <IconButton
        aria-label="home"
        onClick={() => {
          window.location.href = "?q=0";
        }}
      >
        <HomeIcon color="action" />
      </IconButton>
      <Typography variant="caption" color="textSecondary">
        <b>Made By Arpit</b>
      </Typography>
    </div>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
