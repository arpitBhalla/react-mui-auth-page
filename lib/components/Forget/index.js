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
import IconButton from "@material-ui/core/IconButton";
import BackIcon from "@material-ui/icons/ArrowBackOutlined";
import EmailField from "./../Fields/EmailField";
import checkValid from "../../util/checkvalid";
const INITIAL = { text: "", error: "" };
const Forget = ({ gobackToSignIn, handleForget, textFieldVariant = "filled", emailValidator = (e) => !!e, }) => {
    const [email, setEmail] = React.useState(INITIAL);
    const [loading, setLoading] = React.useState(false);
    const handleSubmit = React.useCallback(() => __awaiter(void 0, void 0, void 0, function* () {
        if (!checkValid(email, setEmail, emailValidator))
            return;
        if (typeof handleForget !== "function")
            handleForget = () => { };
        setLoading(true);
        return handleForget({ email: email.text });
    }), []);
    return (React.createElement(React.Fragment, null,
        React.createElement(IconButton, { "aria-label": "go back", onClick: gobackToSignIn },
            React.createElement(BackIcon, { color: "action" })),
        React.createElement(Box, { p: 2, pb: 6 },
            React.createElement(Typography, { variant: "h6", color: "textSecondary", align: "center" },
                React.createElement("b", null, "Forget Your Password")),
            React.createElement("br", null),
            React.createElement(EmailField, Object.assign({}, { email, setEmail, textFieldVariant, loading })),
            React.createElement(FormControl, { margin: "none", fullWidth: true },
                React.createElement(Button, { onClick: handleSubmit, style: { textTransform: "none" }, size: "large", variant: "contained", color: "primary", fullWidth: true }, "Reset my Password")))));
};
export default Forget;
