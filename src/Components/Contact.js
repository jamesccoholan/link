import { Typography, Paper } from "@mui/material";

function Contact() {
  return (
    <Paper elevation={3} style={{ padding: "20px", marginTop: "20px" }}>
      <Typography variant="h5" gutterBottom>
        Contact Us
      </Typography>
      <Typography>Email: support@example.com</Typography>
      <Typography>Phone: (123) 456-7890</Typography>
    </Paper>
  );
}

export default Contact;
