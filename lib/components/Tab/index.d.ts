import * as React from "react";
import { SignInProps } from "../SignIn";
import { SignUpProps } from "../SignUp";
import { ForgetProps } from "../Forget";
export interface AuthProps extends SignInProps, SignUpProps, ForgetProps {
    hideTabs?: boolean;
    logoComponent?: React.ReactChildren;
    logoName?: string;
    showScreen?: number;
}
declare const App: React.FC<AuthProps>;
export default App;
