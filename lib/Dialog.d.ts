import * as React from "react";
import { AuthProps } from "./components/Tab";
interface DialogProps extends AuthProps {
    open: boolean;
    onClose: () => void;
}
declare const DialogAuth: React.FC<DialogProps>;
export default DialogAuth;
