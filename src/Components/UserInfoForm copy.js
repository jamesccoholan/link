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
} from "@mui/material";
import LogoDisplay from "./LogoDisplay";
import MainAppHeader from "../coreApp/components/MainAppHeader"; // <-- Import MainAppHeader component

function UserInfoForm() {
  const [formData, setFormData] = useState({
    name: "",
    birthdate: "",
    genderPronouns: "",
    location: "",
    interests: "",
    occupation: "",
    conversationTopics: "",
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
      const userRef = doc(firestore, `users/${userId}`);
      await setDoc(userRef, formData, { merge: true });
      alert("User information saved successfully!");
      navigate("/app");
    } catch (error) {
      alert("Error saving user information: ", error.message);
    }
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      height="100vh"
      style={{ margin: 0 }} // <-- Resetting margin
    >
      <MainAppHeader />
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        flexGrow={1} // This will take up the remaining space after the header
      >
        {/* <LogoDisplay /> */}
        <Container maxWidth="sm">
          <form onSubmit={handleSubmit}>
            <TextField
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              fullWidth
              margin="normal"
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
            />
            <FormControl fullWidth margin="normal"></FormControl>
            <TextField
              label="Gender"
              name="genderPronouns"
              value={formData.genderPronouns}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              fullWidth
              margin="normal"
              placeholder="City/Country"
            />
            <TextField
              label="Interests/Hobbies"
              name="interests"
              value={formData.interests}
              onChange={handleChange}
              fullWidth
              margin="normal"
              multiline
            />
            <TextField
              label="Occupation/Profession"
              name="occupation"
              value={formData.occupation}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Preferred Conversation Topics"
              name="conversationTopics"
              value={formData.conversationTopics}
              onChange={handleChange}
              fullWidth
              margin="normal"
              multiline
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
      </Box>
    </Box>
  );
}

export default UserInfoForm;
