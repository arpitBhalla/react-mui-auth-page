import React from "react";
import { DialogAuth } from "../src";
import Button from "@material-ui/core/Button";

const Dialog = () => {
  const [open, setOpen] = React.useState(true);
  const handleSignIn = ({ email, password }) => {
    console.log({ email, password });
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

      <DialogAuth
        open={open}
        onClose={() => setOpen(false)}
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
