import * as React from "react";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import HiddenPasswordIcon from "@material-ui/icons/VisibilityOutlined";
import ShownPasswordIcon from "@material-ui/icons/VisibilityOffOutlined";
import LockIcon from "@material-ui/icons/LockOpen";
const PasswordField = ({ password, setPassword, textFieldVariant = "filled", loading, }) => {
    const [showPassword, setShowPassword] = React.useState(false);
    const tooglePassword = () => {
        setShowPassword(!showPassword);
    };
    return (React.createElement(FormControl, { margin: "none", fullWidth: true, error: Boolean(password.error) },
        React.createElement(TextField, { placeholder: textFieldVariant === "outlined" ? "Password" : "", label: textFieldVariant !== "outlined" && "Password", error: Boolean(password.error), variant: textFieldVariant, value: password.text, disabled: loading, onChange: (e) => {
                setPassword({ text: e.target.value, error: "" });
            }, type: !showPassword ? "password" : "text", InputProps: {
                startAdornment: textFieldVariant === "outlined" && (React.createElement(InputAdornment, { position: "start" },
                    React.createElement(LockIcon, { color: password.error ? "error" : "action" }))),
                endAdornment: (React.createElement(InputAdornment, { position: "end" },
                    React.createElement(IconButton, { "aria-label": "toggle password", onClick: tooglePassword }, React.createElement(!showPassword ? ShownPasswordIcon : HiddenPasswordIcon, {
                        color: password.error ? "error" : "action",
                    })))),
            } }),
        React.createElement(FormHelperText, null, password.error || " ")));
};
export default React.memo(PasswordField);
