import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Form from "./Form";

function FirePrediction({ setPrediction, setFormStatus }) {
  return (
    <>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>🔥 Fire Prediction</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography component="div">
            <Form setPrediction={setPrediction} setFormStatus={setFormStatus} />
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
}

export default FirePrediction;
