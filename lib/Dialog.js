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
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import TabAuth from "./components/Tab";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
const DialogAuth = (_a) => {
    var { open, onClose } = _a, props = __rest(_a, ["open", "onClose"]);
    return (React.createElement(Dialog, { maxWidth: "xs", fullWidth: true, open: open, onClose: onClose, "aria-labelledby": "auth dialog" },
        React.createElement(IconButton, { "aria-label": "", style: { alignSelf: "flex-end" }, onClick: onClose },
            React.createElement(CloseIcon, { color: "action" })),
        React.createElement(DialogContent, null,
            React.createElement(TabAuth, Object.assign({}, props)))));
};
export default DialogAuth;
