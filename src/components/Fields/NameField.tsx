import * as React from "react";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import InputAdornment from "@material-ui/core/InputAdornment";
import PersonIcon from "@material-ui/icons/AccountBoxOutlined";


export interface NameFieldProps {
  name: { text: string; error: string };
  setName: (props: { text: string; error: string }) => void;
  textFieldVariant?: "outlined" | "filled" | "standard";
  loading: boolean;
}

const NameField: React.FC<NameFieldProps> = ({
  name,
  setName,
  textFieldVariant = "filled",
  loading,
}) => {
  return (
    <FormControl margin="none" fullWidth error={Boolean(name?.error)}>
      <TextField
        placeholder={textFieldVariant === "outlined" ? "Name" : ""}
        label={textFieldVariant !== "outlined" && "Name"}
        error={Boolean(name?.error)}
        variant={textFieldVariant}
        value={name?.text}
        disabled={loading}
        onChange={(e) => {
          setName({ text: e.target.value, error: "" });
        }}
        type={"name"}
        InputProps={{
          startAdornment: textFieldVariant === "outlined" && (
            <InputAdornment position="start">
              <PersonIcon color={name?.error ? "error" : "action"} />
            </InputAdornment>
          ),
        }}
      />
      <FormHelperText>{name?.error || " "}</FormHelperText>
    </FormControl>
  );
};
export default React.memo(NameField);
