var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import * as React from "react";
import Box from "@material-ui/core/Box";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import SignIn from "../SignIn";
import SignUp from "../SignUp";
import Forget from "../Forget";
import Typography from "@material-ui/core/Typography";
const App = (_a) => {
    var { hideTabs, logoComponent, logoName, showScreen = 0 } = _a, props = __rest(_a, ["hideTabs", "logoComponent", "logoName", "showScreen"]);
    const [authIndex, setAuthIndex] = React.useState(showScreen);
    const tabChange = (event, tabValue) => {
        event.preventDefault();
        setAuthIndex(tabValue);
    };
    const goToForget = () => {
        setAuthIndex(2);
    };
    const goToSignUp = () => {
        setAuthIndex(1);
    };
    const gobackToSignIn = () => {
        setAuthIndex(0);
    };
    if (authIndex === 2)
        return React.createElement(Forget, Object.assign({}, Object.assign(Object.assign({}, props), { gobackToSignIn })));
    return (React.createElement(React.Fragment, null,
        React.createElement(Box, { display: "flex", justifyContent: "center" }, logoComponent ||
            (logoName && (React.createElement(Typography, { align: "center", variant: "h5", color: "textPrimary" }, logoName)))),
        !hideTabs && (React.createElement(Tabs, { variant: "fullWidth", value: authIndex, centered: true, onChange: tabChange, "aria-label": "auth tabs" },
            React.createElement(Tab, { label: "Login", tabIndex: 0 }),
            React.createElement(Tab, { label: "Register", tabIndex: 1 }))),
        (() => {
            switch (authIndex) {
                case 0:
                    return (React.createElement(SignIn, Object.assign({}, Object.assign(Object.assign({}, props), { goToForget, hideTabs, goToSignUp }))));
                case 1:
                    return React.createElement(SignUp, Object.assign({}, Object.assign(Object.assign({}, props), { hideTabs, gobackToSignIn })));
                default:
                    return null;
            }
        })()));
};
export default App;
