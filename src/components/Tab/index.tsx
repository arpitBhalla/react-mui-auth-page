import * as React from "react";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import SignIn, { SignInProps } from "../SignIn";
import SignUp, { SignUpProps } from "../SignUp";
import Forget, { ForgetProps } from "../Forget";
export interface AuthProps extends SignInProps, SignUpProps, ForgetProps {
  hideTabs?: boolean;
}

const App: React.FC<AuthProps> = ({ hideTabs, ...props }) => {
  const [authIndex, setAuthIndex] = React.useState(0);

  const tabChange = (event: React.ChangeEvent, tabValue: number): void => {
    event.preventDefault();
    setAuthIndex(tabValue);
  };
  const goToForget = () => {
    setAuthIndex(2);
  };
  const gobackToSignIn = () => {
    setAuthIndex(0);
  };
  if (authIndex === 2) return <Forget {...{ ...props, gobackToSignIn }} />;
  return (
    <>
      <Tabs
        variant="fullWidth"
        value={authIndex}
        centered
        onChange={tabChange}
        aria-label=""
      >
        <Tab label="Login" tabIndex={0} />
        <Tab label="Register" tabIndex={1} />
      </Tabs>
      {(() => {
        switch (authIndex) {
          case 0:
            return <SignIn {...{ ...props, goToForget }} />;
          case 1:
            return <SignUp {...props} />;
          default:
            return null;
        }
      })()}
    </>
  );
};
export default App;
