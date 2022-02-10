import * as React from "react";
export interface SignUpProps {
    handleSignUp: (signUpVars: {
        name: string;
        email: string;
        password: string;
    }) => any;
    hideTabs?: boolean;
    textFieldVariant?: "outlined" | "filled" | "standard";
    emailValidator?: (value: string) => boolean;
    passwordValidator?: (value: string) => boolean;
}
interface NaviProps {
    gobackToSignIn: () => any;
}
declare const SignUp: React.FC<SignUpProps & NaviProps>;
export default SignUp;
