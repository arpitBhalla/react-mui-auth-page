import * as React from "react";
export interface NameFieldProps {
    name: {
        text: string;
        error: string;
    };
    setName: (props: {
        text: string;
        error: string;
    }) => void;
    textFieldVariant?: "outlined" | "filled" | "standard";
    loading: boolean;
}
declare const _default: React.NamedExoticComponent<NameFieldProps>;
export default _default;
