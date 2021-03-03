import * as React from "react";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import BackIcon from "@material-ui/icons/ArrowBackOutlined";

export interface ForgetProps {
  handleForget: (forgetVars: { email: string }) => any;
  textFieldVariant?: "outlined" | "filled" | "standard";
}
interface NaviProps {
  gobackToSignIn: () => any;
}

const INITIAL = { text: "", error: "" };

const Forget: React.FC<ForgetProps & NaviProps> = ({
  gobackToSignIn,
  handleForget,
  textFieldVariant = "filled",
}) => {
  const [email, setEmail] = React.useState(INITIAL);

  const handleSubmit = (): void => {
    if (typeof handleForget !== "function") handleForget = () => {};
    return handleForget({ email: email.text });
  };
  return (
    <>
      <IconButton aria-label="go back" onClick={gobackToSignIn}>
        <BackIcon color="action" />
      </IconButton>
      <Box p={2} pb={6}>
        <Typography variant="h6" color="textSecondary" align="center">
          <b>Forget Your Password</b>
        </Typography>
        <FormControl margin="normal" fullWidth error={Boolean(email.error)}>
          <TextField
            variant={textFieldVariant}
            label="Email"
            value={email.text}
            onChange={(e) => {
              setEmail({ text: e.target.value, error: "" });
            }}
            error={Boolean(email.error)}
          />
          <FormHelperText>{email.error || " "}</FormHelperText>
        </FormControl>
        <FormControl margin="none" fullWidth>
          <Button
            onClick={handleSubmit}
            style={{ textTransform: "none" }}
            size="large"
            variant="contained"
            color="primary"
            fullWidth
          >
            Reset my Password
          </Button>
        </FormControl>
      </Box>
    </>
  );
};
export default Forget;
