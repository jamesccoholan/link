import React from "react";
import { AppBar, Toolbar, Typography, useTheme } from "@mui/material";
import DropdownMenu from "./DropdownMenu";

function MainAppHeader({ onLogout }) {
  const theme = useTheme();

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: theme.palette.primary.main,
        padding: "20px 30px",
      }}
    >
      <Toolbar style={{ justifyContent: "space-between", padding: 0 }}>
        <Typography
          variant="h6"
          sx={{
            fontWeight: 500,
            fontSize: "calc(10px + 2vmin)",
            color: theme.palette.text.primary,
          }}
        >
          Link
        </Typography>
        <DropdownMenu onLogout={onLogout} />
      </Toolbar>
    </AppBar>
  );
}

export default MainAppHeader;
