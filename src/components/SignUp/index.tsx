import * as React from "react";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import Box from "@material-ui/core/Box";
import InputAdornment from "@material-ui/core/InputAdornment";
import Button from "@material-ui/core/Button";

interface Props {}

const INITIAL = { text: "", error: "" };

const SignUp: React.FC<Props> = ({}) => {
  const [email, setEmail] = React.useState(INITIAL);
  const [password, setPassword] = React.useState(INITIAL);

  return (
    <Box p={2}>
      <FormControl fullWidth error={Boolean(email.error)}>
        <TextField
          placeholder="Email"
          InputProps={{
            startAdornment: <InputAdornment position="start">a</InputAdornment>,
          }}
          variant="outlined"
          value={email.text}
          onChange={(e) => {
            setEmail({ text: e.target.value, error: "" });
          }}
          error={Boolean(email.error)}
        />
        <FormHelperText>{email.error || " "}</FormHelperText>
      </FormControl>
      <FormControl fullWidth error={Boolean(password.error)}>
        <TextField
          placeholder="Password"
          error={Boolean(password.error)}
          variant="outlined"
          InputProps={{
            startAdornment: <InputAdornment position="start">a</InputAdornment>,
          }}
          value={password.text}
          onChange={(e) => {
            setPassword({ text: e.target.value, error: "" });
          }}
        />
        <FormHelperText>{password.error || " "}</FormHelperText>
      </FormControl>
      <FormControl fullWidth error={Boolean(password.error)}>
        <TextField
          placeholder="Confirm Password"
          error={Boolean(password.error)}
          variant="outlined"
          InputProps={{
            startAdornment: <InputAdornment position="start">a</InputAdornment>,
          }}
          value={password.text}
          onChange={(e) => {
            setPassword({ text: e.target.value, error: "" });
          }}
        />
        <FormHelperText>{password.error || " "}</FormHelperText>
      </FormControl>
      <FormControl margin="none" fullWidth>
        <Button size="large" variant="contained" color="primary" fullWidth>
          Sign up
        </Button>
      </FormControl>
    </Box>
  );
};
export default SignUp;
