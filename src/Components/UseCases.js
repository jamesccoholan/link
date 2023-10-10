import React from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Button,
} from "@mui/material";
import { styled } from "@mui/material/styles";

// Sample data for use cases - replace with actual data
const useCases = [
  {
    title: "International Music Bookings",
    description: "",
    image:
      "https://ik.imagekit.io/mbhxghyf1m2/1(1)_w3S4luiBg.png?updatedAt=1696702249468", // Placeholder image, replace with actual image URL
  },
  {
    title: "Celebrity Management",
    description: "",
    image:
      "https://ik.imagekit.io/mbhxghyf1m2/1_Mz4A2OZVX.png?updatedAt=1696702238807",
  },
  {
    title: "Music Management",
    description: "",
    image:
      "https://ik.imagekit.io/mbhxghyf1m2/YMU_DuKXlDxM6.png?updatedAt=1696702339739",
  },
  // Add more use cases as needed
];

const UseCaseCard = styled(Card)(({ theme }) => ({
  maxWidth: 345,
  backgroundColor: "rgba(255, 255, 255, 0.1)",
  backdropFilter: "blur(10px)",
  border: "1px solid rgba(255, 255, 255, 0.2)",
  color: "#fff",
  margin: "auto",
  transition: "0.3s",
  boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
  "&:hover": {
    transform: "translateY(-3px)",
    boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)",
  },
}));

const UseCases = () => (
  <Box
    padding={5}
    style={{
      background: "linear-gradient(to right, #0072ff, #00c6ff)",
    }}
  >
    <Typography
      variant="h4"
      gutterBottom
      textAlign="center"
      style={{ color: "white" }}
    >
      Team Background
    </Typography>
    <br></br>
    <br></br>

    <Grid container spacing={4} justifyContent="center">
      {useCases.map((useCase, index) => (
        <Grid item key={index} xs={12} sm={6} md={4}>
          <UseCaseCard>
            <CardMedia
              component="img"
              height="140"
              image={useCase.image}
              alt={useCase.title}
            />
            <CardContent>
              <Typography
                variant="h5"
                component="div"
                style={{ color: "white" }} // Changed text color to white
              >
                {useCase.title}
              </Typography>
              <Typography
                variant="body2"
                style={{ color: "rgba(255, 255, 255, 0.7)" }} // Adjusted the text color and opacity
              >
                {useCase.description}
              </Typography>
            </CardContent>
          </UseCaseCard>
        </Grid>
      ))}
    </Grid>
  </Box>
);

export default UseCases;
