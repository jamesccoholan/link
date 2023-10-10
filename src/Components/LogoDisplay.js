import React from "react";
import logo from "../Assets/19.png";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

function LogoDisplay() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const logoWidth = isMobile ? "202%" : "90%";

  return (
    <div
      style={{
        display: "grid",
        placeItems: "center",
        height: "auto",
      }}
    >
      <img
        src={logo}
        alt="NextGen Logo"
        style={{ width: logoWidth }} // Adjust the width based on the screen width
        className="fade-in"
      />
    </div>
  );
}

export default LogoDisplay;
