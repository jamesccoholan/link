import React from "react";
import { Typography, Button, Grid, useTheme } from "@mui/material";

function PackagesSection() {
  const theme = useTheme(); // Access the theme

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={6}>
        <div
          style={{
            padding: "20px",
            backgroundColor: theme.palette.background.paper, // Use theme's paper background color
            color: theme.palette.text.primary, // Use theme's primary text color
            borderRadius: "5px",
            textAlign: "center",
            height: "100%",
          }}
        >
          <Typography variant="h6">Standard Package</Typography>
          <Typography>
            One project at a time. Adjust or cancel anytime. $4,995/m
          </Typography>
          <Button variant="contained" color="primary">
            Details & Subscription
          </Button>
        </div>
      </Grid>
      <Grid item xs={12} md={6}>
        <div
          style={{
            padding: "20px",
            backgroundColor: theme.palette.background.paper, // Use theme's paper background color
            color: theme.palette.text.primary, // Use theme's primary text color
            borderRadius: "5px",
            textAlign: "center",
            height: "100%",
          }}
        >
          <Typography variant="h6">Pro Package</Typography>
          <Typography>
            Two projects concurrently. Adjust or cancel anytime. $7,995/m
          </Typography>
          <Button variant="contained" color="primary">
            Details & Subscription
          </Button>
        </div>
      </Grid>
    </Grid>
  );
}

export default PackagesSection;
