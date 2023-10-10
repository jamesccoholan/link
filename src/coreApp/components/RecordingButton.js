import React from "react";
import { Button, Box, CircularProgress } from "@mui/material";

function RecordingButton({ isRecording, toggleRecording }) {
  // Receive the props

  return (
    <Box>
      <Button
        variant="contained"
        style={
          isRecording
            ? { backgroundColor: "darkred", color: "white" }
            : { backgroundColor: "red", color: "white" }
        }
        onClick={toggleRecording} // Use the passed down function
      >
        {isRecording ? "Recording..." : "Record Patient Audio"}
      </Button>

      {isRecording && (
        <Box mt={2} display="flex" justifyContent="center">
          <CircularProgress color="secondary" />
        </Box>
      )}
    </Box>
  );
}

export default RecordingButton;
