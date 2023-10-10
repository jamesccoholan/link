import React, { useState } from "react";
import { auth, firestore, doc, setDoc, getDoc } from "../coreApp/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import { useTheme } from "@mui/material/styles";
import Header from "./Header.js";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import backgroundImage from "../Assets/10.png";
import LogoDisplay from "./LogoDisplay";

export async function initializeUserStructure(userId) {
  const userRef = doc(firestore, `users/${userId}`);
  try {
    const docSnap = await getDoc(userRef);
    if (!docSnap.exists()) {
      const initialData = {
        chatHistory: [],
        textInputCount: 0,
        subscriptionStatus: "inactive",
      };
      await setDoc(userRef, initialData);
      console.log("User structure initialized in Firestore");
    } else {
      console.log("User structure already exists in Firestore");
    }
  } catch (err) {
    console.error("Error initializing user structure:", err);
    throw err;
  }
}

function Signup() {
  const muiTheme = useTheme();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleGoogleSignup = async () => {
    const provider = new GoogleAuthProvider();

    try {
      const userCredential = await signInWithPopup(auth, provider);
      const user = userCredential.user;

      if (user) {
        await initializeUserStructure(user.uid); // Initializes chatHistory
        alert("Google Signup successful with UID: " + user.uid);
        navigate("/app");
      } else {
        alert("Google Signup failed");
      }
    } catch (error) {
      alert("Error during Google Signup: " + error.message);
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      if (user) {
        await initializeUserStructure(user.uid); // Initializes chatHistory
        alert("Signup successful with UID: " + user.uid);
        navigate("/userInfoForm"); // Redirect to UserInfoForm after signup
      } else {
        alert("Signup failed");
      }
    } catch (error) {
      alert("Error during signup: " + error.message);
    }
  };

  return (
    <ThemeProvider theme={muiTheme}>
      <AppContainer>
        <Header />
        {/* <LogoDisplay /> */}
        <SignupContainer>
          <Button onClick={handleGoogleSignup}>Sign Up with Google</Button>
          <InputField
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <InputField
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button onClick={handleSignup}>Sign Up</Button>
          <StyledLink to="/">Back</StyledLink>
        </SignupContainer>
      </AppContainer>
    </ThemeProvider>
  );
}

export default Signup;

// Define your styled components
const AppContainer = styled.div`
  text-align: center;
  background-image: url(${backgroundImage});
  background-size: cover; // ensures the image covers the container
  background-repeat: no-repeat;
  background-position: center; // centers the background image
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;
const SignupContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const InputField = styled.input`
  width: 250px;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
`;

const Button = styled.button`
  padding: 10px 15px;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  background-color: ${(props) => props.theme.palette.primary.main};
  color: ${(props) => props.theme.palette.text.primary};
  cursor: pointer;
  margin-top: 10px;

  &:hover {
    background-color: ${(props) => props.theme.palette.primary.dark};
  }
`;

const StyledLink = styled(Link)`
  color: #fff;
  margin-top: 20px;
`;
