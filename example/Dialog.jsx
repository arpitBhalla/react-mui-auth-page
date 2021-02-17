import React from "react";
import { DialogAuth, BoxAuth, FullWidth } from "../src";
import Button from "@material-ui/core/Button";

const Dialog = () => {
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

  return (
    <>
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          setOpen(true);
        }}
      >
        Open Dialog
      </Button>
      Check The console for result
      <DialogAuth
        open={open}
        onClose={() => setOpen(false)}
        handleSignUp={handleSignUp}
        handleForget={handleForget}
        handleSignIn={handleSignIn}
        handleSocial={{
          Linkedin: handleLinkedIn,
          Github: handleGithub,
        }}
      />
    </>
  );
};

export default Dialog;
