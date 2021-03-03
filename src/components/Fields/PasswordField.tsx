import * as React from "react";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import HiddenPasswordIcon from "@material-ui/icons/VisibilityOutlined";
import ShownPasswordIcon from "@material-ui/icons/VisibilityOffOutlined";

export interface PasswordFieldProps {
  password: { text: string; error: string };
  setPassword: (props: { text: string; error: string }) => void;
  textFieldVariant?: "outlined" | "filled" | "standard";
}

const PasswordField: React.FC<PasswordFieldProps> = ({
  password,
  setPassword,
  textFieldVariant = "filled",
}) => {
  const [showPassword, setShowPassword] = React.useState(false);

  const tooglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <FormControl margin="none" fullWidth error={Boolean(password.error)}>
      <TextField
        label="Password"
        error={Boolean(password.error)}
        variant={textFieldVariant}
        value={password.text}
        onChange={(e) => {
          setPassword({ text: e.target.value, error: "" });
        }}
        type={!showPassword ? "password" : "text"}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton aria-label="toggle password" onClick={tooglePassword}>
                {!showPassword ? <HiddenPasswordIcon /> : <ShownPasswordIcon />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <FormHelperText>{password.error || " "}</FormHelperText>
    </FormControl>
  );
};
export default PasswordField;
