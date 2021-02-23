import * as React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import TabAuth, { AuthProps } from "./components/Tab";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

interface DialogProps extends AuthProps {
  open: boolean;
  onClose: () => void;
}
export const DialogAuth: React.FC<DialogProps> = ({
  open,
  onClose,

  ...props
}) => {
  return (
    <Dialog
      maxWidth="xs"
      fullWidth
      open={open}
      onClose={onClose}
      aria-labelledby="auth dialog"
    >
      <IconButton
        aria-label=""
        style={{ alignSelf: "flex-end" }}
        onClick={onClose}
      >
        <CloseIcon color="action" />
      </IconButton>
      <DialogContent>
        <TabAuth {...props} />
      </DialogContent>
    </Dialog>
  );
};

interface BoxProps extends AuthProps {}
export const BoxAuth: React.FC<BoxProps> = ({ ...props }) => {
  return (
    <Box height="100vh">
      <Grid container>
        <Grid item xs={false} md={4} />
        <Grid item xs={12} md={4}>
          <Box p={2} boxShadow={2}>
            <TabAuth {...props} />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

interface FullWidthProps extends AuthProps {}
export const FullWidthAuth: React.FC<FullWidthProps> = ({ ...props }) => {
  return (
    <Box p={9}>
      <Container maxWidth="md">
        <Box boxShadow="0px 0px 10px 3px #ddd" p={3} width="100%" height="100%">
          <Grid container spacing={1}>
            <Grid item xs={false} md={7}>
              <Typography variant="h4" color="textSecondary">
                <b>Welcome</b>
              </Typography>
            </Grid>
            <Grid item xs={12} md={5}>
              <TabAuth {...props} />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};
