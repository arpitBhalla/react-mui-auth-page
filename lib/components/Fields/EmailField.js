import * as React from "react";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import InputAdornment from "@material-ui/core/InputAdornment";
import EmailIcon from "@material-ui/icons/EmailOutlined";
const EmailField = ({ email, setEmail, textFieldVariant = "filled", loading, }) => {
    return (React.createElement(FormControl, { margin: "none", fullWidth: true, error: Boolean(email.error) },
        React.createElement(TextField, { placeholder: textFieldVariant === "outlined" ? "Email" : "", label: textFieldVariant !== "outlined" && "Email", error: Boolean(email.error), variant: textFieldVariant, value: email.text, disabled: loading, onChange: (e) => {
                setEmail({ text: e.target.value, error: "" });
            }, type: "email", InputProps: {
                startAdornment: textFieldVariant === "outlined" && (React.createElement(InputAdornment, { position: "start" },
                    React.createElement(EmailIcon, { color: email.error ? "error" : "action" }))),
            } }),
        React.createElement(FormHelperText, null, email.error || " ")));
};
export default React.memo(EmailField);
