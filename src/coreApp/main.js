import React, { useState, useEffect } from "react";
import MainAppHeader from "./components/MainAppHeader";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { AppContainer } from "./MainStyles";
import { onSnapshot } from "firebase/firestore";
import chatImage from "../Assets/10.png";
import {
  useTheme,
  Grid,
  TextField,
  Button,
  Box,
  LinearProgress,
} from "@mui/material";
import { auth, firestore, getDoc, doc, updateDoc, setDoc } from "./firebase";
import { loadStripe } from "@stripe/stripe-js";

let stripePromise;
const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(
      "pk_live_51NvjYWIk5LS6QDLqJSia5g1haU11sMJo53RoKy4rSrTYXfJlM5qOxUZHFEYBiXGJ1ocUZgS7yjidHDqzxc33ruw100ajPMFUZc"
    );
  }
  return stripePromise;
};

const FREE_CHAR_LIMIT = 250;
const COST_PER_1000_CHAR = 0.3;

function MainApp() {
  const [userInput, setUserInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [audioURL, setAudioURL] = useState(null);
  const [isActive, setIsActive] = useState(false);
  const [showSubscriptionMessage, setShowSubscriptionMessage] = useState(false);

  const muiTheme = useTheme();

  useEffect(() => {
    const authUnsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        const userDocRef = doc(firestore, "users", user.uid);

        const firestoreUnsubscribe = onSnapshot(userDocRef, (docSnapshot) => {
          if (docSnapshot.exists()) {
            setIsActive(docSnapshot.data().isActive);
          }
        });

        // Cleanup Firestore listener when done
        return () => firestoreUnsubscribe();
      }
    });

    // Cleanup auth listener on unmount
    return () => authUnsubscribe();
  }, []);

  const handleSendText = async () => {
    setIsLoading(true);
    const endpoint =
      process.env.NODE_ENV === "development"
        ? "http://127.0.0.1:8000/generate-audio/"
        : "https://audiobooks-trbr2r2lba-uc.a.run.app/generate-audio/";
    const uid = auth.currentUser?.uid;

    if (!uid) {
      alert("User is not authenticated.");
      setIsLoading(false);
      return;
    }

    const payload = { text: userInput, client_reference_id: uid };
    console.log("handleSendText - Sending payload:", payload);

    if (userInput.length > FREE_CHAR_LIMIT && !isActive) {
      alert(
        `You need to subscribe to generate audio for texts longer than ${FREE_CHAR_LIMIT} characters.`
      );
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        const data = await response.json();
        setAudioURL(data.audio_file);

        // Update character count in Firestore
        const userDocRef = doc(firestore, "users", uid);
        const userDoc = await getDoc(userDocRef);

        if (userDoc.exists()) {
          const previousCount = userDoc.data().characterCount || 0;
          const newCount = previousCount + userInput.length;
          await updateDoc(userDocRef, {
            characterCount: newCount,
          });
        } else {
          // If the user document doesn't exist, create it
          await setDoc(userDocRef, {
            characterCount: userInput.length,
          });
        }
      }
    } catch (error) {
      console.error("An error occurred:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubscription = async () => {
    const uid = auth.currentUser?.uid;
    if (!uid) {
      alert("User not authenticated");
      return;
    }

    const payload = {
      priceId: "price_1NxvmPIk5LS6QDLqbz1ZrLa9",
      client_reference_id: uid,
    };
    console.log("handleSubscription - Sending payload:", payload);

    const endpoint =
      process.env.NODE_ENV === "development"
        ? "http://localhost:8000/create-checkout-session"
        : "https://audiobooks-trbr2r2lba-uc.a.run.app/create-checkout-session";

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        const session = await response.json();
        const stripe = await getStripe();
        stripe?.redirectToCheckout({ sessionId: session.id });
      } else {
        console.log("Failed to create Stripe session:", await response.text());
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <StyledThemeProvider theme={muiTheme}>
      <AppContainer
        style={{ backgroundImage: `url(${chatImage})` }}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start",
          height: "100vh",
          padding: "2vh 0",
        }}
      >
        <MainAppHeader />
        {isLoading && <LinearProgress />}
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={3}
          style={{ width: "100%" }}
        >
          <Grid item style={{ width: "80%" }}>
            <TextField
              fullWidth
              variant="outlined"
              margin="normal"
              value={userInput}
              onChange={(e) => {
                if (e.target.value.length <= FREE_CHAR_LIMIT || isActive) {
                  setUserInput(e.target.value);
                  setShowSubscriptionMessage(false); // Hide subscription message
                } else {
                  setShowSubscriptionMessage(true); // Show subscription message
                  alert(
                    `You will be charged ${
                      ((e.target.value.length - FREE_CHAR_LIMIT) / 1000) *
                      COST_PER_1000_CHAR
                    }$ for this text.`
                  );
                }
              }}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  handleSendText();
                }
              }}
              placeholder="Your AudioBook Text Here"
              sx={{
                borderColor: "white",
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "white",
                  },
                  "&:hover fieldset": {
                    borderColor: "white",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "white",
                  },
                },
                "& .MuiInputBase-input": {
                  color: "white",
                },
              }}
            />
            {showSubscriptionMessage && (
              <>
                <p>
                  Please Subscribe to Continue: 30 Cents USD per 1000 characters
                  beyond 250 characters.
                </p>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleSubscription}
                >
                  Subscribe Now
                </Button>
              </>
            )}
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              color="primary"
              onClick={handleSendText}
              style={{
                width: "200px",
                backgroundColor: "black",
                color: "white",
                borderColor: "white",
              }}
            >
              Generate Audiobook
            </Button>
          </Grid>
        </Grid>

        {audioURL && (
          <Box mt={4}>
            <Button
              variant="contained"
              color="secondary"
              size="large"
              href={audioURL}
              download
              style={{ backgroundColor: "red" }}
            >
              Download Audio
            </Button>
          </Box>
        )}
      </AppContainer>
    </StyledThemeProvider>
  );
}

export default MainApp;
