import * as React from "react";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import PasswordField from "./../Fields/PasswordField";
import EmailField from "./../Fields/EmailField";

export interface SignUpProps {
  handleSignUp: (signUpVars: {
    name: string;
    email: string;
    password: string;
  }) => any;
  hideTabs?: boolean;
  textFieldVariant?: "outlined" | "filled" | "standard";
}

interface NaviProps {
  gobackToSignIn: () => any;
}

const INITIAL = { text: "", error: "" };

const SignUp: React.FC<SignUpProps & NaviProps> = ({
  handleSignUp,
  gobackToSignIn,
  textFieldVariant = "filled",
  hideTabs,
}) => {
  const [name, setName] = React.useState(INITIAL);
  const [email, setEmail] = React.useState(INITIAL);
  const [loading, setLoading] = React.useState(false);
  const [password, setPassword] = React.useState(INITIAL);

  const handleSubmit = async () => {
    if (typeof handleSignUp !== "function") handleSignUp = () => {};

    return handleSignUp({
      name: name.text,
      email: email.text,
      password: password.text,
    });
  };

  return (
    <Box p={2}>
      <FormControl margin="none" fullWidth error={Boolean(name.error)}>
        <TextField
          variant={textFieldVariant}
          label="Full Name"
          value={name.text}
          onChange={(e) => {
            setName({ text: e.target.value, error: "" });
          }}
          error={Boolean(name.error)}
        />
        <FormHelperText>{name.error || " "}</FormHelperText>
      </FormControl>
      <EmailField {...{ email, setEmail, textFieldVariant, loading }} />

      <PasswordField
        {...{ password, setPassword, textFieldVariant, loading }}
      />

      <FormControl margin="normal" fullWidth>
        <Button
          style={{ textTransform: "none" }}
          size="large"
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleSubmit}
        >
          Register
        </Button>
      </FormControl>
      {hideTabs && (
        <Typography
          variant="body2"
          color="textSecondary"
          align="center"
          style={{ cursor: "pointer" }}
          onClick={gobackToSignIn}
        >
          Go back to Login
        </Typography>
      )}
    </Box>
  );
};
export default SignUp;
