import React, { useEffect } from "react";
import { Box, Card, CardContent, Typography, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import PeopleIcon from "@mui/icons-material/People";
import AOS from "aos";

const features = [
  {
    title: "AI-Driven Insights",
    description:
      "Our AI algorithms analyze your music and fan engagement, providing actionable insights to enhance your career.",
    icon: <MusicNoteIcon fontSize="large" />,
  },
  {
    title: "Career Growth",
    description:
      "Automated tools to help you negotiate better contracts, find gigs, and expand your brand in the music industry.",
    icon: <TrendingUpIcon fontSize="large" />,
  },
  {
    title: "Community Building",
    description:
      "Engage with your fanbase more effectively with automated social media posts and targeted fan interactions.",
    icon: <PeopleIcon fontSize="large" />,
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
        background: "linear-gradient(to right, #0f2027, #203a43, #2c5364)",
      }}
    >
      <Typography
        variant="h4"
        gutterBottom
        textAlign="center"
        style={{ color: "white", marginBottom: "40px" }}
      >
        Built By & For
      </Typography>
      <Typography
        variant="h4"
        gutterBottom
        textAlign="center"
        style={{ color: "white", marginBottom: "40px" }}
      >
        Artists || Entertainers || Creators
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
