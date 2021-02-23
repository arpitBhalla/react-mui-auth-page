import * as React from "react";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import Box from "@material-ui/core/Box";
import InputAdornment from "@material-ui/core/InputAdornment";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import HiddenPasswordIcon from "@material-ui/icons/VisibilityOutlined";
import ShownPasswordIcon from "@material-ui/icons/VisibilityOffOutlined";
import Typography from "@material-ui/core/Typography";

export interface SignUpProps {
  handleSignUp: (signUpVars: {
    name: string;
    email: string;
    password: string;
  }) => any;
  hideTabs?: boolean;
  gobackToSignIn: () => any;
}

const INITIAL = { text: "", error: "" };

const SignUp: React.FC<SignUpProps> = ({
  handleSignUp,
  gobackToSignIn,
  hideTabs,
}) => {
  const [name, setName] = React.useState(INITIAL);
  const [email, setEmail] = React.useState(INITIAL);
  const [password, setPassword] = React.useState(INITIAL);
  const [showPassword, setShowPassword] = React.useState(false);

  const handleSubmit = () => {
    if (typeof handleSignUp !== "function") handleSignUp = () => {};

    return handleSignUp({
      name: name.text,
      email: email.text,
      password: password.text,
    });
  };

  const tooglePassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <Box p={2}>
      <FormControl margin="none" fullWidth error={Boolean(name.error)}>
        <TextField
          variant="filled"
          label="Full Name"
          value={name.text}
          onChange={(e) => {
            setName({ text: e.target.value, error: "" });
          }}
          error={Boolean(name.error)}
        />
        <FormHelperText>{name.error || " "}</FormHelperText>
      </FormControl>
      <FormControl margin="none" fullWidth error={Boolean(email.error)}>
        <TextField
          variant="filled"
          label="Email"
          value={email.text}
          onChange={(e) => {
            setEmail({ text: e.target.value, error: "" });
          }}
          error={Boolean(email.error)}
        />
        <FormHelperText>{email.error || " "}</FormHelperText>
      </FormControl>
      <FormControl margin="none" fullWidth error={Boolean(password.error)}>
        <TextField
          label="Password"
          error={Boolean(password.error)}
          variant="filled"
          value={password.text}
          onChange={(e) => {
            setPassword({ text: e.target.value, error: "" });
          }}
          type={!showPassword ? "password" : "text"}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton aria-label="show password" onClick={tooglePassword}>
                  {!showPassword ? (
                    <HiddenPasswordIcon />
                  ) : (
                    <ShownPasswordIcon />
                  )}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </FormControl>

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
