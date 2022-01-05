var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import * as React from "react";
import FormControl from "@material-ui/core/FormControl";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import PasswordField from "./../Fields/PasswordField";
import NameField from "./../Fields/NameField";
import EmailField from "./../Fields/EmailField";
import checkValid from "../../util/checkvalid";
const INITIAL = { text: "", error: "" };
const SignUp = ({ handleSignUp, gobackToSignIn, textFieldVariant = "filled", hideTabs, emailValidator = (e) => !!e, passwordValidator = (e) => !!e, }) => {
    const [name, setName] = React.useState(INITIAL);
    const [email, setEmail] = React.useState(INITIAL);
    const [loading, setLoading] = React.useState(false);
    const [password, setPassword] = React.useState(INITIAL);
    const handleSubmit = React.useCallback(() => __awaiter(void 0, void 0, void 0, function* () {
        if (![
            checkValid(name, setName, emailValidator),
            checkValid(email, setEmail, emailValidator),
            checkValid(password, setPassword, passwordValidator),
        ].every((v) => v))
            return;
        if (typeof handleSignUp !== "function")
            handleSignUp = () => { };
        setLoading(true);
        return handleSignUp({
            name: name.text,
            email: email.text,
            password: password.text,
        });
    }), []);
    return (React.createElement(Box, { p: 2 },
        React.createElement(NameField, Object.assign({}, { name, setName, textFieldVariant, loading })),
        React.createElement(EmailField, Object.assign({}, { email, setEmail, textFieldVariant, loading })),
        React.createElement(PasswordField, Object.assign({}, { password, setPassword, textFieldVariant, loading })),
        React.createElement(FormControl, { margin: "normal", fullWidth: true },
            React.createElement(Button, { style: { textTransform: "none" }, size: "large", variant: "contained", color: "primary", fullWidth: true, onClick: handleSubmit }, "Register")),
        hideTabs && (React.createElement(Typography, { variant: "body2", color: "textSecondary", align: "center", style: { cursor: "pointer" }, onClick: gobackToSignIn }, "Go back to Login"))));
};
export default SignUp;
