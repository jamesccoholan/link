import React, { useState } from "react";
import { doc, setDoc, getFirestore } from "../coreApp/firebase";
import { auth } from "../coreApp/firebase";
import { useNavigate } from "react-router-dom";
import {
  Button,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Container,
  Box,
  Card,
} from "@mui/material";
import MainAppHeader from "../coreApp/components/MainAppHeader";

function DoctorOnboardingForm() {
  const [formData, setFormData] = useState({
    name: "",
    birthdate: "",
    specialty: "",
    yearsOfExperience: "",
    preferredNoteTakingMethod: "",
    commonConditionsTreated: "",
    clinicLocation: "",
  });

  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const firestore = getFirestore();
    const userId = auth.currentUser.uid;

    try {
      // Reference to the user's document
      const userRef = doc(firestore, `users/${userId}`);

      // Reference to the "doctorInfo" subcollection within the user's document
      const doctorInfoRef = doc(userRef, "doctorInfo", userId);

      await setDoc(doctorInfoRef, formData, { merge: true });
      alert("Doctor information saved successfully!");
      navigate("/app");
    } catch (error) {
      alert("Error saving doctor information: ", error.message);
    }
  };

  const cardStyle = {
    width: "80%",
    margin: "0 auto",
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    backdropFilter: "blur(20px)",
    border: "1px solid rgba(255, 255, 255, 0.2)",
    padding: "20px",
  };

  const textStyle = {
    color: "white",
    textShadow: "5px 5px 10px rgba(0, 0, 0, 0.9)",
    fontWeight: "bold",
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      height="100vh"
    >
      <MainAppHeader />
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        flexGrow={1}
      >
        <Card style={cardStyle}>
          <Container maxWidth="sm">
            <form onSubmit={handleSubmit}>
              <TextField
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                fullWidth
                margin="normal"
                style={textStyle}
              />
              <TextField
                label="Birthdate"
                type="date"
                name="birthdate"
                value={formData.birthdate}
                onChange={handleChange}
                fullWidth
                margin="normal"
                InputLabelProps={{ shrink: true }}
                style={textStyle}
              />
              <TextField
                label="Specialty"
                name="specialty"
                value={formData.specialty}
                onChange={handleChange}
                fullWidth
                margin="normal"
                style={textStyle}
              />
              <TextField
                label="Years of Experience"
                name="yearsOfExperience"
                value={formData.yearsOfExperience}
                onChange={handleChange}
                fullWidth
                margin="normal"
                style={textStyle}
              />
              <TextField
                label="Current Method of Taking Notes"
                name="preferredNoteTakingMethod"
                value={formData.preferredNoteTakingMethod}
                onChange={handleChange}
                fullWidth
                margin="normal"
                style={textStyle}
              />
              <TextField
                label="Common Conditions Treated"
                name="commonConditionsTreated"
                value={formData.commonConditionsTreated}
                onChange={handleChange}
                fullWidth
                margin="normal"
                multiline
                style={textStyle}
              />
              <TextField
                label="Clinic Location"
                name="clinicLocation"
                value={formData.clinicLocation}
                onChange={handleChange}
                fullWidth
                margin="normal"
                placeholder="City/Country"
                style={textStyle}
              />
              <Button
                variant="contained"
                color="primary"
                type="submit"
                style={{ marginTop: "20px" }}
              >
                Save
              </Button>
            </form>
          </Container>
        </Card>
      </Box>
    </Box>
  );
}

export default DoctorOnboardingForm;
