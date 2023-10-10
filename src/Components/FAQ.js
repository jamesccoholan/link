import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function FAQ() {
  return (
    <div style={{ marginTop: "20px" }}>
      <Typography variant="h5" gutterBottom>
        Frequently Asked Questions
      </Typography>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>How do I get started?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Simply sign up and follow our setup guide.</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Can I cancel anytime?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Yes, there are no long-term commitments.</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default FAQ;
