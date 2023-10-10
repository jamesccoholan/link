import React, { useState } from "react";
import { auth } from "../coreApp/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import styled, { ThemeProvider } from "styled-components";
import { useTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import Header from "./Header.js";
import { Link } from "react-router-dom";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import backgroundImage from "../Assets/10.png";
import LogoDisplay from "./LogoDisplay";

function Login() {
  const muiTheme = useTheme();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/app");
    } catch (error) {
      alert("Error during login: " + error.message);
    }
  };

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();

    try {
      const userCredential = await signInWithPopup(auth, provider);
      const user = userCredential.user;

      if (user) {
        navigate("/app");
      } else {
        alert("Google Login failed");
      }
    } catch (error) {
      alert("Error during Google Login: " + error.message);
    }
  };

  return (
    <ThemeProvider theme={muiTheme}>
      <AppContainer>
        <Header />
        {/* <LogoDisplay /> */}
        <LoginContainer>
          <Button onClick={handleGoogleLogin}>Login with Google</Button>
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
          <Button onClick={handleLogin}>Login</Button>
          <StyledLink to="/">Back</StyledLink>
        </LoginContainer>
      </AppContainer>
    </ThemeProvider>
  );
}

export default Login;

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

const LoginContainer = styled.div`
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
  border: 1px solid ${(props) => props.theme.palette.divider};
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
