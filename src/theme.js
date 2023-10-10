import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#000000", // Black
    },
    secondary: {
      main: "#333333", // Dark Grey
    },
    background: {
      default: "#121212", // Very Dark Grey
      paper: "#1f1f1f", // Slightly lighter than the default for differentiation
    },
    text: {
      primary: "#FFFFFF", // White
      secondary: "#B0B0B0", // Lighter grey for less emphasized text
    },
  },
});

export default theme;

//1
