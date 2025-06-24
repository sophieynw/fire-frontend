import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function Tips() {
  return (
    <>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>💡 Tips</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography component="div">
            <p>Characteristics associated with forest fires:</p>
            <ul>
              <li>Grassland and Shrubland vegetation</li>
              <li>Higher wind speed</li>
              <li>Higher temperatures</li>
              <li>Lower humidity</li>
              <li>Occurence of fire on previous day</li>
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
}

export default Tips;
