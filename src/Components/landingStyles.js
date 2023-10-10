import { styled } from "@mui/material/styles";
import backgroundImage from "../Assets/10.png";

export const MainContainer = styled("div")(({ theme, isMobile }) => ({
  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundColor: theme.palette.background.default,
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  overflow: "hidden",
  color: "#fff",
  textShadow: isMobile ? "none" : "0 2px 4px rgba(0,0,0,0.7)",
  padding: isMobile ? "10px" : "0",
}));

export const ContentContainer = styled("main")(({ theme }) => ({
  flexGrow: 1,
  paddingTop: "40px",
  paddingBottom: "40px",
  paddingLeft: "5%",
  paddingRight: "5%",
  [theme.breakpoints.down("sm")]: {
    paddingTop: "10px",
    paddingBottom: "10px",
    paddingLeft: "2%",
    paddingRight: "2%",
  },
  overflowY: "auto",
  overflowX: "hidden",
  background: "rgba(0, 0, 0, 0.7)",
  borderRadius: "10px",
  boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
}));

export const SectionBox = styled("div")(({ theme }) => ({
  marginBottom: "40px",
  [theme.breakpoints.down("sm")]: {
    marginBottom: "10px",
  },
  transition: "all 0.3s ease",
  "&:hover": {
    transform: "scale(1.05)",
    boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
  },
}));
