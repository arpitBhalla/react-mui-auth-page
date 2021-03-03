type InitialType = { text: string; error: string };

const checkValid = (
  value: InitialType,
  setValue: React.Dispatch<React.SetStateAction<InitialType>>,
  validator: (val: string) => boolean
): boolean => {
  if (!value.text) {
    setValue({ ...value, error: "This is required" });
    return false;
  }
  if (typeof validator === "function" && !validator(value.text)) {
    setValue({ ...value, error: "This is invalid" });
    return false;
  }
  return true;
};

export default checkValid;
