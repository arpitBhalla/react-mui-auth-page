import * as React from "react";
export interface SignInProps {
    handleSignIn: (signInVars: {
        email: string;
        password: string;
    }) => any;
    hideTabs?: boolean;
    handleSocial: {
        Google?: () => void;
        Github?: () => void;
        Linkedin?: () => void;
        Twitter?: () => void;
        Facebook?: () => void;
    };
    textFieldVariant?: "outlined" | "filled" | "standard";
    emailValidator?: (value: string) => boolean;
    passwordValidator?: (value: string) => boolean;
}
interface NaviProps {
    goToForget: () => any;
    goToSignUp: () => any;
}
declare const SignIn: React.FC<SignInProps & NaviProps>;
export default SignIn;
