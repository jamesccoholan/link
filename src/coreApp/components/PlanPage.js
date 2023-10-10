import React from "react";
import {
  Grid,
  Typography,
  List,
  ListItem,
  Container,
  Link as MuiLink,
  Card,
  CardContent,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";
import MainAppHeader from "./MainAppHeader";
import { useNavigate } from "react-router-dom";
import chaImage from "../../Assets/10.png";

function PlanPage() {
  const navigate = useNavigate();

  const cardStyle = {
    width: "80%",
    margin: "0 auto",
    backgroundColor: "rgba(0, 0, 0, 0.4)", // Darker background with 40% opacity
    backdropFilter: "blur(20px)", // Increased blur value
    border: "1px solid rgba(255, 255, 255, 0.2)",
    padding: "20px",
  };

  const textStyle = {
    color: "white",
    textShadow: "5px 5px 10px rgba(0, 0, 0, 0.9)", // Greater pixel values and a higher alpha for an even darker shadow
    fontWeight: "bold",
  };

  return (
    <Container
      maxWidth={false}
      disableGutters
      style={{
        backgroundImage: `url(${chaImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "100vh",
      }}
    >
      <MainAppHeader />
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={4}
        style={{ minHeight: "60vh", marginTop: "2vh" }} // Added marginTop for headroom
      >
        {/* Description Card */}
        <Grid item xs={12}>
          <Card elevation={3} style={cardStyle}>
            <CardContent>
              <Typography
                variant="h4"
                align="center"
                style={{
                  ...textStyle,
                  fontSize: "2.5rem",
                  marginBottom: "20px",
                }} // increased marginBottom
              >
                Link: Automated Medical Record Generation
              </Typography>
              <br></br>
              <br></br>
              <Typography
                variant="h6"
                align="center"
                style={{
                  ...textStyle,
                  fontSize: "1.5rem",
                  marginBottom: "20px",
                }} // increased marginBottom
              >
                Integrate With Virtual Meeting
              </Typography>
              <Typography
                variant="h6"
                align="center"
                style={{
                  ...textStyle,
                  fontSize: "1.5rem",
                  marginBottom: "20px",
                }} // increased marginBottom
              >
                Record Patient Discussion
              </Typography>
              <Typography
                variant="h6"
                align="center"
                style={{
                  ...textStyle,
                  fontSize: "1.5rem",
                  marginBottom: "20px",
                }} // increased marginBottom
              >
                AI Transcription of Audio
              </Typography>
              <Typography
                variant="h6"
                align="center"
                style={{
                  ...textStyle,
                  fontSize: "1.5rem",
                  marginBottom: "20px",
                }} // increased marginBottom
              >
                Transcription Is Parsed
              </Typography>
              <Typography
                variant="h6"
                align="center"
                style={{
                  ...textStyle,
                  fontSize: "1.5rem",
                  marginBottom: "20px",
                }} // increased marginBottom
              >
                A Medical Record is Created to Specification
              </Typography>
              <Typography
                variant="h6"
                align="center"
                style={{
                  ...textStyle,
                  fontSize: "1.5rem",
                  marginBottom: "20px",
                }} // increased marginBottom
              >
                Record Saved to User Account for Reference
              </Typography>
              <Typography
                variant="h6"
                align="center"
                style={{
                  ...textStyle,
                  fontSize: "1.5rem",
                  marginBottom: "20px",
                }} // increased marginBottom
              >
                EMR is Uploaded to Record Database
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="outlined"
            onClick={() => navigate(-1)}
            style={{
              color: "white",
              borderColor: "white",
              backgroundColor: "transparent",
            }}
          >
            Back
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}

export default PlanPage;
