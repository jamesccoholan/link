import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";

function Header() {
  return (
    <AppBar
      position="static"
      sx={{
        background: "linear-gradient(to right, #0072ff, #00c6ff)", // Apply the same gradient as the Features section
        padding: "20px 30px",
      }}
    >
      <Toolbar style={{ justifyContent: "space-between", padding: 0 }}>
        <Typography
          variant="h6"
          sx={{
            fontWeight: 500,
            fontSize: "calc(10px + 2vmin)",
            color: "#FFFFFF",
          }}
        >
          Link
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
