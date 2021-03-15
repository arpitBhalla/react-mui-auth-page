import * as React from "react";
import FormControl from "@material-ui/core/FormControl";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import BackIcon from "@material-ui/icons/ArrowBackOutlined";
import EmailField from "./../Fields/EmailField";
import checkValid from "../../util/checkvalid";

export interface ForgetProps {
  handleForget: (forgetVars: { email: string }) => any;
  textFieldVariant?: "outlined" | "filled" | "standard";
  emailValidator?: (value: string) => boolean;
}
interface NaviProps {
  gobackToSignIn: () => any;
}

const INITIAL = { text: "", error: "" };

const Forget: React.FC<ForgetProps & NaviProps> = ({
  gobackToSignIn,
  handleForget,
  textFieldVariant = "filled",
  emailValidator = (e) => !!e,
}) => {
  const [email, setEmail] = React.useState(INITIAL);
  const [loading, setLoading] = React.useState(false);

  const handleSubmit = React.useCallback(async () => {
    if (!checkValid(email, setEmail, emailValidator)) return;
    if (typeof handleForget !== "function") handleForget = () => {};
    setLoading(true);
    return handleForget({ email: email.text });
  }, []);
  return (
    <>
      <IconButton aria-label="go back" onClick={gobackToSignIn}>
        <BackIcon color="action" />
      </IconButton>
      <Box p={2} pb={6}>
        <Typography variant="h6" color="textSecondary" align="center">
          <b>Forget Your Password</b>
        </Typography>
        <br />
        <EmailField {...{ email, setEmail, textFieldVariant, loading }} />

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
