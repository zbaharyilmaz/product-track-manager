import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
const AuthHeader = () => {
  return (
    <Grid item xs={12} mb={3}>
      <Typography variant="h3" marginTop={3} color="primary.main" align="center">
       PRODUCT TRACK MANAGER
      </Typography>
    </Grid>
  );
};

export default AuthHeader;
