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
import ScheduleIcon from "@mui/icons-material/Schedule";
import CampaignIcon from "@mui/icons-material/Campaign";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import CustomizeIcon from "@mui/icons-material/Tune";
import SecurityIcon from "@mui/icons-material/Security";

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(5),
  background: "linear-gradient(to right, #0f2027, #203a43, #2c5364)",
  border: "1px solid rgba(255, 255, 255, 0.2)",
  borderRadius: "15px",
  color: "#fff",
  backdropFilter: "blur(10px)",
}));

const GradientText = styled(Typography)(({ theme }) => ({
  background: "linear-gradient(to right, #0f2027, #203a43, #2c5364)",
  color: "transparent",
  "-webkit-background-clip": "text",
  "background-clip": "text",
  "font-weight": "bold",
}));

const StyledIcon = styled(ListItemIcon)(({ theme }) => ({
  minWidth: "auto",
  marginRight: theme.spacing(2),
}));

const AISolutionOverview = () => {
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
          AI Solution for Artists and Entertainers
        </GradientText>
        <GradientText variant="body1" paragraph>
          Discover the power of our AI manager and agent designed to cater to
          the unique needs of artists and entertainers. Unleash your creativity
          while our AI takes care of the management and promotion.
        </GradientText>
        <Grid container spacing={5} justifyContent="center" alignItems="center">
          <Grid item md={6}>
            <img
              src={Image}
              alt="AI Solution"
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
                AI Manager & Agent Features:
              </Typography>
              <List>
                <ListItem>
                  <StyledIcon>
                    <ScheduleIcon style={{ color: "#fff" }} />
                  </StyledIcon>
                  <ListItemText
                    primary="Smart Scheduling"
                    style={{ color: "#fff" }}
                  />
                </ListItem>
                <ListItem>
                  <StyledIcon>
                    <CampaignIcon style={{ color: "#fff" }} />
                  </StyledIcon>
                  <ListItemText
                    primary="Automated Marketing"
                    style={{ color: "#fff" }}
                  />
                </ListItem>
                <ListItem>
                  <StyledIcon>
                    <AnalyticsIcon style={{ color: "#fff" }} />
                  </StyledIcon>
                  <ListItemText
                    primary="Real-time Analytics"
                    style={{ color: "#fff" }}
                  />
                </ListItem>
                <ListItem>
                  <StyledIcon>
                    <CustomizeIcon style={{ color: "#fff" }} />
                  </StyledIcon>
                  <ListItemText
                    primary="Customizable for Artists"
                    style={{ color: "#fff" }}
                  />
                </ListItem>
                <ListItem>
                  <StyledIcon>
                    <SecurityIcon style={{ color: "#fff" }} />
                  </StyledIcon>
                  <ListItemText
                    primary="Secure & Privacy Compliant"
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

export default AISolutionOverview;
