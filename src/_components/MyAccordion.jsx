import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function MyAccordion({ children, heading }) {
  return (
    <Accordion className="flex !my-0 items-center flex-col !bg-transparent !text-white !border-none !shadow-none">
      <AccordionSummary
        expandIcon={<ExpandMoreIcon className="!text-white" />}
        aria-controls="panel1-content"
        id="panel1-header"
        className="!text-center"
      >
        <span className="!text-center !text-white">{heading}</span>
      </AccordionSummary>
      <AccordionDetails>{children}</AccordionDetails>
    </Accordion>
  );
}
