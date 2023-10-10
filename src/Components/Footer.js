import React from "react";
import { Typography } from "@mui/material";

function Footer() {
  return (
    <div
      style={{
        backgroundColor: "#000000", // Black background
        padding: "20px",
        textAlign: "center",
      }}
    >
      <Typography variant="body2" style={{ color: "#FFFFFF" }} component="p">
        Link © 2023. All Rights Reserved.
      </Typography>
    </div>
  );
}

export default Footer;
