import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function Results({ prediction, formStatus }) {
  return (
    <>
      <Accordion expanded={formStatus}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>📈 Results</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {prediction != null && (
            <Typography>
              <p className="result">
                {prediction == true
                  ? "🔥 Fire likely 🔥"
                  : "🌿 No fire likely 🌿"}
              </p>
            </Typography>
          )}
        </AccordionDetails>
      </Accordion>
    </>
  );
}

export default Results;
