import * as React from "react";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import InputAdornment from "@material-ui/core/InputAdornment";
import PersonIcon from "@material-ui/icons/AccountBoxOutlined";
const NameField = ({ name, setName, textFieldVariant = "filled", loading, }) => {
    return (React.createElement(FormControl, { margin: "none", fullWidth: true, error: Boolean(name === null || name === void 0 ? void 0 : name.error) },
        React.createElement(TextField, { placeholder: textFieldVariant === "outlined" ? "Name" : "", label: textFieldVariant !== "outlined" && "Name", error: Boolean(name === null || name === void 0 ? void 0 : name.error), variant: textFieldVariant, value: name === null || name === void 0 ? void 0 : name.text, disabled: loading, onChange: (e) => {
                setName({ text: e.target.value, error: "" });
            }, type: "name", InputProps: {
                startAdornment: textFieldVariant === "outlined" && (React.createElement(InputAdornment, { position: "start" },
                    React.createElement(PersonIcon, { color: (name === null || name === void 0 ? void 0 : name.error) ? "error" : "action" }))),
            } }),
        React.createElement(FormHelperText, null, (name === null || name === void 0 ? void 0 : name.error) || " ")));
};
export default React.memo(NameField);
