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

  const wait = (m) => {
    console.log(m + " started");
    return new Promise((r) => {
      setTimeout(() => {
        console.log(m);
        r();
      }, 3000);
    });
  };
  const [open, setOpen] = React.useState(true);

  const handleSignIn = async ({ email, password }) => {
    await wait("SignIn");
  };
  const handleSignUp = async ({ email, name, password }) => {
    await wait("SignUp");
  };
  const handleForget = async ({ email }) => {
    await wait("Forget");
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
    textFieldVariant: "outlined",
    handleSignUp,
    handleForget,
    handleSignIn,
    handleSocial: {
      Google: () => {},
      Github: () => {},
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
