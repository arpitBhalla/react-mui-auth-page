import * as React from "react";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import InputAdornment from "@material-ui/core/InputAdornment";
import EmailIcon from "@material-ui/icons/EmailOutlined";

export interface EmailFieldProps {
  email: { text: string; error: string };
  setEmail: (props: { text: string; error: string }) => void;
  textFieldVariant?: "outlined" | "filled" | "standard";
  loading: boolean;
}

const EmailField: React.FC<EmailFieldProps> = ({
  email,
  setEmail,
  textFieldVariant = "filled",
  loading,
}) => {
  return (
    <FormControl margin="none" fullWidth error={Boolean(email.error)}>
      <TextField
        placeholder="Email"
        error={Boolean(email.error)}
        variant={textFieldVariant}
        value={email.text}
        disabled={loading}
        onChange={(e) => {
          setEmail({ text: e.target.value, error: "" });
        }}
        type={"email"}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <EmailIcon color={email.error ? "error" : "action"} />
            </InputAdornment>
          ),
        }}
      />
      <FormHelperText>{email.error || " "}</FormHelperText>
    </FormControl>
  );
};
export default React.memo(EmailField);
