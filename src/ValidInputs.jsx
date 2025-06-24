import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function ValidInputs() {
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1-content"
        id="panel1-header"
      >
        <Typography>✅ Valid Inputs</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography component="div">
          <ul>
            <li>Region ID: 1 to 50</li>
            <li>Temperature: -10 to 60</li>
            <li>Humidity: 0 to 100</li>
            <li>Wind speed: 0 to 50</li>
            <li>Rainfall: 0 to 150</li>
            <li>Drought index: 0 to 1</li>
            <li>
              Previous fire: was there a fire the previous day in the same
              region?
            </li>
          </ul>
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
}

export default ValidInputs;
