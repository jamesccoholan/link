import React from "react";
import styled from "styled-components";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery"; // Import useMediaQuery
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth, firestore } from "../coreApp/firebase";
import { useNavigate } from "react-router-dom";
import { doc, getDoc, setDoc } from "firebase/firestore";

const Button = styled.button`
  padding: ${(props) =>
    props.isMobile
      ? "10px 15px"
      : "20px 30px"}; // Adjust padding based on screen size
  font-size: ${(props) =>
    props.isMobile ? "18px" : "24px"}; // Adjust font size based on screen size
  border: none;
  border-radius: 4px;
  background: linear-gradient(
    to right,
    #0f2027,
    #203a43,
    #2c5364
  ); // Apply the same gradient as the Features and Header sections
  color: white;
  cursor: pointer;
  margin-top: 10px;
`;

function GoogleSignUpButton() {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // Determine if the screen width is small or below

  const handleGoogleSignup = async () => {
    const provider = new GoogleAuthProvider();

    try {
      const userCredential = await signInWithPopup(auth, provider);
      const user = userCredential.user;

      if (user) {
        const userDocRef = doc(firestore, "users", user.uid);
        const userDocSnap = await getDoc(userDocRef);

        if (!userDocSnap.exists()) {
          await setDoc(
            userDocRef,
            {
              isActive: false,
              characterCount: 0,
              displayName: user.displayName,
              creationTime: user.metadata.creationTime,
            },
            { merge: true }
          );
        }

        navigate("/app");
      } else {
        alert("Google Signup failed");
      }
    } catch (error) {
      alert("Error during Google Signup: " + error.message);
    }
  };

  return (
    <Button onClick={handleGoogleSignup} theme={theme} isMobile={isMobile}>
      Coming Soon
    </Button>
  );
}

export default GoogleSignUpButton;
