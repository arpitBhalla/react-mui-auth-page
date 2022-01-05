import * as React from "react";
import { AuthProps } from "./components/Tab";
interface FullWidthProps extends AuthProps {
    width: boolean;
}
declare const FullWidthAuth: React.FC<FullWidthProps>;
export default FullWidthAuth;
