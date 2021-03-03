import * as React from "react";
import TabAuth, { AuthProps } from "./components/Tab";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

interface FullWidthProps extends AuthProps {
  width: boolean;
}

const FullWidthAuth: React.FC<FullWidthProps> = ({ ...props }) => {
  return (
    <Box p={9}>
      <Container maxWidth="md">
        <Box boxShadow="0px 0px 10px 3px #ddd" p={3} width="100%" height="100%">
          <Grid container spacing={1}>
            <Grid item xs={false} md={7}>
              <Typography variant="h4" color="textSecondary">
                <b>Welcome</b>
              </Typography>
            </Grid>
            <Grid item xs={12} md={5}>
              <TabAuth {...props} />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};
export default FullWidthAuth;
