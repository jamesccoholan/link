import React, { useEffect } from "react";
import {
  Box,
  Typography,
  Container,
  Paper,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import Image from "../Assets/545.png";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EventIcon from "@mui/icons-material/Event";
import PeopleIcon from "@mui/icons-material/People";
import HeartIcon from "@mui/icons-material/Favorite";
import SecurityIcon from "@mui/icons-material/Security";

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(5),
  background: "linear-gradient(to right, #0072ff, #00c6ff)", // Blue gradient for the card background
  border: "1px solid rgba(255, 255, 255, 0.2)",
  borderRadius: "15px",
  color: "#fff",
  backdropFilter: "blur(10px)",
}));

const GradientText = styled(Typography)(({ theme }) => ({
  background: "linear-gradient(to right, #0072ff, #00c6ff)",
  color: "transparent",
  "-webkit-background-clip": "text",
  "background-clip": "text",
  "font-weight": "bold",
}));

const StyledIcon = styled(ListItemIcon)(({ theme }) => ({
  minWidth: "auto",
  marginRight: theme.spacing(2),
}));

const LinkAppOverview = () => {
  useEffect(() => {
    document.body.style.background =
      "linear-gradient(to right, #f5f5f5, #e0e0e0)";

    return () => {
      document.body.style.background = "";
    };
  }, []);

  return (
    <Container maxWidth="lg">
      <Box py={10} textAlign="center">
        <GradientText variant="h4" gutterBottom>
          Discover Connections with "Link"
        </GradientText>
        <GradientText variant="body1" paragraph>
          Experience the innovative way of connecting at events. With "Link",
          find potential matches attending the same gatherings, ensuring genuine
          interactions and memorable moments.
        </GradientText>
        <Grid container spacing={5} justifyContent="center" alignItems="center">
          <Grid item md={6}>
            <img
              src={Image}
              alt="Link Dating App"
              style={{
                width: "100%",
                borderRadius: "15px",
                boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
              }}
            />
          </Grid>
          <Grid item md={6}>
            <StyledPaper>
              <Typography variant="h6" gutterBottom style={{ color: "#fff" }}>
                Key Features of "Link":
              </Typography>
              <List>
                <ListItem>
                  <StyledIcon>
                    <LocationOnIcon style={{ color: "#fff" }} />
                  </StyledIcon>
                  <ListItemText
                    primary="Location-Aware Matches"
                    style={{ color: "#fff" }}
                  />
                </ListItem>
                <ListItem>
                  <StyledIcon>
                    <EventIcon style={{ color: "#fff" }} />
                  </StyledIcon>
                  <ListItemText
                    primary="Discover Events Near You"
                    style={{ color: "#fff" }}
                  />
                </ListItem>
                <ListItem>
                  <StyledIcon>
                    <PeopleIcon style={{ color: "#fff" }} />
                  </StyledIcon>
                  <ListItemText
                    primary="Connect with Genuine People"
                    style={{ color: "#fff" }}
                  />
                </ListItem>
                <ListItem>
                  <StyledIcon>
                    <HeartIcon style={{ color: "#fff" }} />
                  </StyledIcon>
                  <ListItemText
                    primary="Tailored Dating Preferences"
                    style={{ color: "#fff" }}
                  />
                </ListItem>
                <ListItem>
                  <StyledIcon>
                    <SecurityIcon style={{ color: "#fff" }} />
                  </StyledIcon>
                  <ListItemText
                    primary="Safety & Privacy Assured"
                    style={{ color: "#fff" }}
                  />
                </ListItem>
              </List>
            </StyledPaper>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default LinkAppOverview;
