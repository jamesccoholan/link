import React from "react";
import { Typography, useTheme } from "@mui/material";

function IntroSection() {
  const theme = useTheme(); // Access the theme

  const textStyle = {
    color: "white",
    textShadow: "5px 5px 10px rgba(0, 0, 0, 0.9)",
    fontWeight: "bold",
  };

  return (
    <div style={{ marginBottom: "60px", color: theme.palette.text.primary }}>
      <Typography
        variant="h4"
        gutterBottom
        align="center"
        style={{ ...textStyle, marginBottom: "70px" }}
      >
        Your AI Agent & Manager
      </Typography>
      {/* <Typography
        variant="h5"
        gutterBottom
        align="center"
        style={{ ...textStyle, marginBottom: "70px" }}
      >
        Automated Transcriptions
      </Typography>
      <Typography
        variant="h6"
        gutterBottom
        align="center"
        style={{ ...textStyle, marginTop: "50px" }}
      >
        Time Saver
      </Typography> */}
    </div>
  );
}

export default IntroSection;
