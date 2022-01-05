import * as React from "react";
export interface ForgetProps {
    handleForget: (forgetVars: {
        email: string;
    }) => any;
    textFieldVariant?: "outlined" | "filled" | "standard";
    emailValidator?: (value: string) => boolean;
}
interface NaviProps {
    gobackToSignIn: () => any;
}
declare const Forget: React.FC<ForgetProps & NaviProps>;
export default Forget;
