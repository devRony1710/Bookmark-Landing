import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

//constants
import { FAQItem } from "../common/constants/FrequentlyQuestions";

// styles
import "../styles/FAQ.scss";

const SimpleAcordion = () => {
  return (
    <div className="faq-items-container">
      {FAQItem.map((item) => (
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon htmlColor="#5368df" />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography color="#252b46" fontWeight="500">
              {item.faqTitle}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography color="#9194a1">{item.lorem}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

export default SimpleAcordion;
