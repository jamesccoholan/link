import React from "react";
import { Typography, Box, Paper, Divider, Button } from "@mui/material";
import MainAppHeader from "./MainAppHeader"; // Ensure the path is correct.
import { useNavigate } from "react-router-dom";

function PatientRecordPage() {
  const navigate = useNavigate();
  // Enhanced Medical Record for John Doe (fictional data)
  const medicalRecord = {
    patientName: "John Don",
    uhid: "JD123456",
    dateOfBirth: "1985-06-15",
    allergies: ["Penicillin", "Peanuts"],
    smokerStatus: "Non-smoker",
    alcoholStatus: "Occasional drinker",
    substanceAbuse: "None",
    personalData: {
      maritalStatus: "Single",
      occupation: "Software Developer",
    },
    problemList: ["Hypertension", "Type 2 Diabetes"],
    medications: ["Lisinopril", "Metformin"],
    adverseDrugReactions: ["None"],
    immunizations: ["Flu", "Hepatitis B", "Tdap"],
    encounters: [
      {
        date: "2023-09-15",
        symptoms: ["Occasional dizziness", "Thirst", "Frequent urination"],
        findings:
          "During a routine checkup, the blood pressure was found to be slightly elevated at 140/90 mmHg. Blood tests indicated a higher than normal blood sugar level at 180 mg/dL.",
        diagnostics: "Blood pressure measurement, Fasting blood sugar test",
        treatment:
          "Adjusted the dosage of Lisinopril to better manage blood pressure. Recommended dietary changes to lower carbohydrate intake and increase physical activity.",
        recommendations:
          "Monitor blood sugar levels bi-weekly. Reduce salt intake.",
        followUpDate: "2022-06-15",
      },
      {
        date: "2022-03-20",
        symptoms: ["Blurred vision", "Fatigue"],
        findings:
          "An eye examination revealed the early signs of diabetic retinopathy. Blood sugar levels remained high at 170 mg/dL despite medication.",
        diagnostics: "Eye examination, Blood sugar test",
        treatment:
          "Referred to an ophthalmologist for further evaluation and treatment of the eyes. Adjusted the Metformin dosage to better manage blood sugar levels.",
        recommendations:
          "Avoid direct exposure to bright lights. Monitor blood sugar levels daily.",
        followUpDate: "2022-07-20",
      },
      {
        date: "2022-06-15",
        symptoms: ["Regular checkup"],
        findings:
          "Blood pressure was within the normal range at 120/80 mmHg. Blood sugar levels showed improvement but still require monitoring at 150 mg/dL.",
        diagnostics: "Blood pressure measurement, Blood sugar test",
        treatment: "Continue with the current medication regimen.",
        recommendations:
          "Maintain a balanced diet. Engage in regular exercise.",
        followUpDate: "2022-07-15",
      },
    ],
  };
  const handleUpload = (date) => {
    console.log(`Upload for date ${date} clicked!`);
    // Implement the upload functionality here
  };
  return (
    <Box
      display="flex"
      flexDirection="column" // Vertical layout
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <Paper
        elevation={3}
        style={{ padding: "30px", maxWidth: "800px", width: "200%" }}
      >
        <Typography variant="h5" align="center" gutterBottom>
          Medical Record for {medicalRecord.patientName}
        </Typography>

        <Typography variant="body1" gutterBottom style={{ marginTop: "20px" }}>
          <strong>UHID:</strong> {medicalRecord.uhid}
        </Typography>
        <Typography variant="body1" gutterBottom>
          <strong>Date of Birth:</strong> {medicalRecord.dateOfBirth}
        </Typography>
        <Typography variant="body1" gutterBottom>
          <strong>Allergies:</strong> {medicalRecord.allergies.join(", ")}
        </Typography>
        <Typography variant="body1" gutterBottom>
          <strong>Medications:</strong> {medicalRecord.medications.join(", ")}
        </Typography>

        <Divider style={{ margin: "20px 0" }} />

        {medicalRecord.encounters.map((encounter, index) => (
          <Box key={index} mb={3}>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              mb={2}
            >
              <Typography variant="h6">Visit Date: {encounter.date}</Typography>
              <Button
                variant="contained"
                color="secondary"
                onClick={() => handleUpload(encounter.date)}
              >
                Upload
              </Button>
            </Box>
            <Typography
              variant="body1"
              gutterBottom
              style={{ marginTop: "20px" }}
            >
              <strong>Symptoms Presented:</strong>{" "}
              {encounter.symptoms.join(", ")}
            </Typography>
            <Typography
              variant="body1"
              gutterBottom
              style={{ marginTop: "20px" }}
            >
              <strong>Findings:</strong> {encounter.findings}
            </Typography>
            <Typography
              variant="body1"
              gutterBottom
              style={{ marginTop: "20px" }}
            >
              <strong>Treatment:</strong> {encounter.treatment}
            </Typography>
            <Typography
              variant="body1"
              gutterBottom
              style={{ marginTop: "20px" }}
            >
              <strong>Follow-up Date:</strong> {encounter.followUpDate}
            </Typography>
            {index !== medicalRecord.encounters.length - 1 && <Divider />}
          </Box>
        ))}
      </Paper>
      <Box mt={2}>
        <Button
          variant="outlined"
          style={{
            color: "white",
            borderColor: "white",
            backgroundColor: "transparent",
          }}
          onClick={() => navigate(-1)}
        >
          Back
        </Button>
      </Box>
    </Box>
  );
}

export default PatientRecordPage;
