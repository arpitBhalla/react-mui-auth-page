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
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import EmailField from "./../Fields/EmailField";
import PasswordField from "./../Fields/PasswordField";
import checkValid from "../../util/checkvalid";
const Social = {
    Github: {
        color: "#131418",
        icon: GitHubIcon,
    },
    Linkedin: {
        color: "#0077B5",
        icon: LinkedInIcon,
    },
    Twitter: {
        color: "#55acee",
        icon: TwitterIcon,
    },
    Facebook: {
        color: "#3b5999",
        icon: FacebookIcon,
    },
    Google: {
        color: "red",
        icon: () => (React.createElement("img", { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1004px-Google_%22G%22_Logo.svg.png", width: 20, height: 20 })),
    },
};
const INITIAL = { text: "", error: "" };
const SignIn = ({ goToForget, handleSignIn, goToSignUp, handleSocial, hideTabs = false, textFieldVariant = "filled", emailValidator = (e) => !!e, passwordValidator = (e) => !!e, }) => {
    const [email, setEmail] = React.useState(INITIAL);
    const [password, setPassword] = React.useState(INITIAL);
    const [loading, setLoading] = React.useState(false);
    const handleSubmit = React.useCallback(() => __awaiter(void 0, void 0, void 0, function* () {
        if (![
            checkValid(email, setEmail, emailValidator),
            checkValid(password, setPassword, passwordValidator),
        ].every((v) => v))
            return;
        setLoading(true);
        if (typeof handleSignIn !== "function")
            handleSignIn = () => { };
        yield handleSignIn({ email: email.text, password: password.text });
        setLoading(false);
    }), [email, password]);
    return (React.createElement(Box, { p: 2 },
        React.createElement(EmailField, Object.assign({}, { email, setEmail, textFieldVariant, loading })),
        React.createElement(PasswordField, Object.assign({}, { password, setPassword, textFieldVariant, loading })),
        React.createElement(Typography, { variant: "body2", color: "textSecondary", align: "right", style: { cursor: "pointer" }, onClick: goToForget }, "Forget Password?"),
        React.createElement(FormControl, { margin: "normal", fullWidth: true },
            React.createElement(Button, { onClick: handleSubmit, style: { textTransform: "none" }, size: "large", disabled: loading, variant: "contained", color: "primary", fullWidth: true }, "Sign In")),
        Object.values(handleSocial).some((v) => typeof v === "function") && (React.createElement(Typography, { variant: "subtitle2", color: "textSecondary", align: "center" }, "or continue with")),
        React.createElement(Box, { display: "flex", justifyContent: "center" }, Object.entries(handleSocial).map(([key, handler]) => {
            if (typeof handler !== "function" ||
                !Social[key] ||
                !Social[key].icon)
                return null;
            return (React.createElement(IconButton, { key: key, "aria-label": `${key} login button`, onClick: handler }, React.createElement(Social[key].icon, {
                htmlColor: Social[key].color,
            })));
        })),
        hideTabs && (React.createElement(Typography, { variant: "body2", color: "textSecondary", align: "center", style: { cursor: "pointer" }, onClick: goToSignUp }, "No Account? Create Now"))));
};
export default SignIn;
