import * as React from "react";
export interface EmailFieldProps {
    email: {
        text: string;
        error: string;
    };
    setEmail: (props: {
        text: string;
        error: string;
    }) => void;
    textFieldVariant?: "outlined" | "filled" | "standard";
    loading: boolean;
}
declare const _default: React.NamedExoticComponent<EmailFieldProps>;
export default _default;
