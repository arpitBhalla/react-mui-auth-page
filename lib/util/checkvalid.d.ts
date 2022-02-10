declare type InitialType = {
    text: string;
    error: string;
};
declare const checkValid: (value: InitialType, setValue: React.Dispatch<React.SetStateAction<InitialType>>, validator: (val: string) => boolean) => boolean;
export default checkValid;
