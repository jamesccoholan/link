import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";

function Header() {
  return (
    <AppBar
      position="static"
      sx={{
        background: "linear-gradient(to right, #0f2027, #203a43, #2c5364)", // Apply the same gradient as the Features section
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
          Stride AI
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
