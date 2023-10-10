import React, { useEffect } from "react";
import { Box, Card, CardContent, Typography, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EventIcon from "@mui/icons-material/Event";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AOS from "aos";

const features = [
  {
    title: "Location-Aware Matches",
    description:
      "Discover and connect with potential matches attending the same events as you, ensuring more meaningful interactions.",
    icon: <LocationOnIcon fontSize="large" />,
  },
  {
    title: "Event Insights",
    description:
      "Get insights on trending events around you and see who's interested. Never miss out on an opportunity to meet someone special.",
    icon: <EventIcon fontSize="large" />,
  },
  {
    title: "Preference Filters",
    description:
      "Customize your preferences to find matches that align with your interests, ensuring a compatible connection.",
    icon: <FavoriteIcon fontSize="large" />,
  },
];

const FeatureCard = styled(Card)(({ theme }) => ({
  borderRadius: "15px",
  transition: "0.3s",
  boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.1)",
  position: "relative",
  maxWidth: 400,
  marginLeft: "auto",
  overflow: "initial",
  background: "rgba(255, 255, 255, 0.1)",
  backdropFilter: "blur(10px)",
  border: "1px solid rgba(255, 255, 255, 0.2)",
  color: "#fff",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  paddingBottom: theme.spacing(2),
  "&:hover": {
    transform: "translateY(-3px)",
    boxShadow: "0px 15px 20px rgba(0, 0, 0, 0.3)",
  },
  "& .MuiTypography--heading": {
    fontWeight: "bold",
    color: "#fff",
  },
  "& .MuiTypography--subheading": {
    textAlign: "center",
    color: "rgba(255, 255, 255, 0.7)",
  },
}));

const Features = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <Box
      py={10}
      pl={5}
      pr={5}
      style={{
        background: "linear-gradient(to right, #0072ff, #00c6ff)",
      }}
    >
      <Typography
        variant="h4"
        gutterBottom
        textAlign="center"
        style={{ color: "white", marginBottom: "40px" }}
      >
        Discover Connections
      </Typography>
      <Typography
        variant="h4"
        gutterBottom
        textAlign="center"
        style={{ color: "white", marginBottom: "40px" }}
      >
        At Events Near You
      </Typography>

      <Grid container spacing={5} justifyContent="center">
        {features.map((feature, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <div data-aos="fade-up" data-aos-delay={`${index * 100}`}>
              <FeatureCard elevation={5}>
                <CardContent>
                  <Box color="#FFCC00" mb={3} fontSize="large">
                    {feature.icon}
                  </Box>
                  <Typography
                    variant="h6"
                    gutterBottom
                    className="MuiTypography--heading"
                  >
                    {feature.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    className="MuiTypography--subheading"
                  >
                    {feature.description}
                  </Typography>
                </CardContent>
              </FeatureCard>
            </div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Features;
