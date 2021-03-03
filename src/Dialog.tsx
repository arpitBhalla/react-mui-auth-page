import * as React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import TabAuth, { AuthProps } from "./components/Tab";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

interface DialogProps extends AuthProps {
  open: boolean;
  onClose: () => void;
}

const DialogAuth: React.FC<DialogProps> = ({ open, onClose, ...props }) => {
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
export default DialogAuth;
