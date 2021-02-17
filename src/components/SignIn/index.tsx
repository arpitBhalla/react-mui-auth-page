import * as React from "react";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputAdornment from "@material-ui/core/InputAdornment";
import HiddenPasswordIcon from "@material-ui/icons/VisibilityOutlined";
import ShownPasswordIcon from "@material-ui/icons/VisibilityOffOutlined";
export interface SignInProps {
  handleSignIn: (signInVars: { email: string; password: string }) => any;
  handleSocial: {
    Github?: () => void;
    Linkedin?: () => void;
    Twitter?: () => void;
    Facebook?: () => void;
  };
  goToForget: () => any;
}

const INITIAL = { text: "", error: "" };

const SignIn: React.FC<SignInProps> = ({
  goToForget,
  handleSignIn,
  handleSocial,
}) => {
  const [email, setEmail] = React.useState(INITIAL);
  const [password, setPassword] = React.useState(INITIAL);
  const [showPassword, setShowPassword] = React.useState(false);

  const handleSubmit = (): void => {
    if (typeof handleSignIn !== "function") handleSignIn = () => {};

    return handleSignIn({ email: email.text, password: password.text });
  };
  const tooglePassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <Box p={2}>
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
        <FormHelperText>{password.error || " "}</FormHelperText>
        <Typography
          variant="body2"
          color="textSecondary"
          align="right"
          style={{ cursor: "pointer" }}
          onClick={goToForget}
        >
          Forget Password?
        </Typography>
      </FormControl>
      <FormControl margin="normal" fullWidth>
        <Button
          onClick={handleSubmit}
          style={{ textTransform: "none" }}
          size="large"
          variant="contained"
          color="primary"
          fullWidth
        >
          Sign In
        </Button>
      </FormControl>
      <br />
      <br />
      {(typeof handleSocial?.Twitter === "function" ||
        typeof handleSocial?.Facebook === "function" ||
        typeof handleSocial?.Linkedin === "function" ||
        typeof handleSocial?.Github === "function") && (
        <Typography variant="subtitle2" color="textSecondary" align="center">
          or continue with
        </Typography>
      )}
      <Box display="flex" justifyContent="center">
        {typeof handleSocial?.Twitter === "function" && (
          <IconButton aria-label="google login" onClick={handleSocial?.Twitter}>
            <TwitterIcon htmlColor="#55acee" />
          </IconButton>
        )}
        {typeof handleSocial?.Facebook === "function" && (
          <IconButton
            aria-label="google login"
            onClick={handleSocial?.Facebook}
          >
            <FacebookIcon htmlColor="#3b5999" />
          </IconButton>
        )}
        {typeof handleSocial?.Linkedin === "function" && (
          <IconButton
            aria-label="google login"
            onClick={handleSocial?.Linkedin}
          >
            <LinkedInIcon htmlColor="#0077B5" />
          </IconButton>
        )}
        {typeof handleSocial?.Github === "function" && (
          <IconButton aria-label="google login" onClick={handleSocial?.Github}>
            <GitHubIcon htmlColor="#131418" />
          </IconButton>
        )}
      </Box>
    </Box>
  );
};
export default SignIn;
