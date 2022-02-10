import * as React from "react";
export interface PasswordFieldProps {
    password: {
        text: string;
        error: string;
    };
    setPassword: (props: {
        text: string;
        error: string;
    }) => void;
    textFieldVariant?: "outlined" | "filled" | "standard";
    loading: boolean;
}
declare const _default: React.NamedExoticComponent<PasswordFieldProps>;
export default _default;
