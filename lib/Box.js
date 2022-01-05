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
const BoxAuth = (_a) => {
    var props = __rest(_a, []);
    return (React.createElement(Box, { height: "100vh" },
        React.createElement(Grid, { container: true },
            React.createElement(Grid, { item: true, xs: false, md: 4 }),
            React.createElement(Grid, { item: true, xs: 12, md: 4 },
                React.createElement(Box, { p: 2, boxShadow: 2 },
                    React.createElement(TabAuth, Object.assign({}, props)))))));
};
export default BoxAuth;
