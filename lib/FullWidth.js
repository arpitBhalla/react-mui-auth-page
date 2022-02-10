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
import TabAuth from "./components/Tab";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
const FullWidthAuth = (_a) => {
    var props = __rest(_a, []);
    return (React.createElement(Box, { p: 9 },
        React.createElement(Container, { maxWidth: "md" },
            React.createElement(Box, { boxShadow: "0px 0px 10px 3px #ddd", p: 3, width: "100%", height: "100%" },
                React.createElement(Grid, { container: true, spacing: 1 },
                    React.createElement(Grid, { item: true, xs: false, md: 7 },
                        React.createElement(Typography, { variant: "h4", color: "textSecondary" },
                            React.createElement("b", null, "Welcome"))),
                    React.createElement(Grid, { item: true, xs: 12, md: 5 },
                        React.createElement(TabAuth, Object.assign({}, props))))))));
};
export default FullWidthAuth;
