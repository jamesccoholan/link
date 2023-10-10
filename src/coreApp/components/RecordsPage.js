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

function RecordsPage() {
  const navigate = useNavigate();

  const cardStyle = {
    width: "100%",
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

  const patients = [
    { name: "John Don", lastVisit: "2023-06-15" },
    { name: "Jane Smith", lastVisit: "2023-04-10" },
    { name: "William Johnson", lastVisit: "2023-05-20" },
    { name: "Emily Davis", lastVisit: "2023-03-30" },
    { name: "Robert Brown", lastVisit: "2023-01-05" },
  ];

  // Sort the patients based on their last visit dates in descending order
  const sortedPatients = [...patients].sort((a, b) => {
    return new Date(b.lastVisit) - new Date(a.lastVisit);
  });

  return (
    <Container maxWidth={false} disableGutters>
      <MainAppHeader />
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={4}
        style={{ minHeight: "60vh" }}
      >
        <Grid item>
          <Typography variant="h4" align="center" style={textStyle}>
            Medical Records
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card elevation={3} style={cardStyle}>
            <CardContent>
              <List>
                {sortedPatients.map((patient, index) => (
                  <ListItem key={index}>
                    <MuiLink
                      component={Link}
                      to={`/records/${patient.name
                        .replace(/\s+/g, "-")
                        .toLowerCase()}`}
                      underline="none"
                      color="textPrimary"
                    >
                      <Typography
                        variant="body1"
                        fontWeight={500}
                        style={textStyle}
                      >
                        {patient.name} - Last Visit: {patient.lastVisit}
                      </Typography>
                    </MuiLink>
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
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

export default RecordsPage;
