import * as React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import TabAuth from "./components/Tab";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

interface Props {
  open: boolean;
  onClose: () => void;
  onSignIn: (email: string, password: string) => void;
  onSignUp: (email: string, password: string) => void;
  variant: "dialog" | "contained" | "simple";
}

export const DialogAuth: React.FC<Props> = ({ open, onClose }) => {
  return (
    <Dialog
      maxWidth="xs"
      fullWidth
      open={open}
      onClose={onClose}
      aria-labelledby="auth dialog"
    >
      <DialogContent>
        <TabAuth />
      </DialogContent>
    </Dialog>
  );
};

export const BoxAuth: React.FC<Props> = ({}) => {
  return (
    <Box height="100vh">
      <Grid container>
        <Grid item xs={false} md={4} />
        <Grid item xs={12} md={4}>
          <Box p={2} boxShadow={2}>
            <TabAuth />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export const FullWidth: React.FC<Props> = ({}) => {
  return (
    <Box p={9}>
      <Container maxWidth="md">
        <Box boxShadow="0px 0px 10px 3px #ddd" p={3}>
          <Grid container spacing={1}>
            <Grid item xs={false} md={7}>
              <Typography variant="h4" color="textSecondary">
                <b>Welcome</b>
              </Typography>
            </Grid>
            <Grid item xs={12} md={5}>
              <TabAuth />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};
