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

interface Props {}

const INITIAL = { text: "", error: "" };

const SignUp: React.FC<Props> = ({}) => {
  const [email, setEmail] = React.useState(INITIAL);
  const [password, setPassword] = React.useState(INITIAL);

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
        />
        <FormHelperText>{password.error || " "}</FormHelperText>
      </FormControl>
      <FormControl margin="none" fullWidth>
        <Button
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
      <Typography variant="subtitle2" color="textSecondary" align="center">
        or continue with
      </Typography>
      <Box display="flex" justifyContent="center">
        <IconButton aria-label="google login" onClick={() => {}}>
          <TwitterIcon htmlColor="#55acee" />
        </IconButton>
        <IconButton aria-label="google login" onClick={() => {}}>
          <FacebookIcon htmlColor="#3b5999" />
        </IconButton>
        <IconButton aria-label="google login" onClick={() => {}}>
          <LinkedInIcon htmlColor="#0077B5" />
        </IconButton>
        <IconButton aria-label="google login" onClick={() => {}}>
          <GitHubIcon htmlColor="#131418" />
        </IconButton>
      </Box>
    </Box>
  );
};
export default SignUp;
