import * as React from "react";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import SignIn from "../SignIn";
import SignUp from "../SignUp";

interface Props {}

const App: React.FC<Props> = ({}) => {
  const [authIndex, setAuthIndex] = React.useState(0);

  const tabChange = (event: React.ChangeEvent, tabValue: number): void => {
    event.preventDefault();
    setAuthIndex(tabValue);
  };

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
            return <SignIn />;
          case 1:
            return <SignUp />;
          default:
            return null;
        }
      })()}
    </>
  );
};
export default App;
