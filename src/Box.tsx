import * as React from "react";
import TabAuth, { AuthProps } from "./components/Tab";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";

interface BoxProps extends AuthProps {}

const BoxAuth: React.FC<BoxProps> = ({ ...props }) => {
  return (
    <Box height="100vh">
      <Grid container>
        <Grid item xs={false} md={4} />
        <Grid item xs={12} md={4}>
          <Box p={2} boxShadow={2}>
            <TabAuth {...props} />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
export default BoxAuth;
