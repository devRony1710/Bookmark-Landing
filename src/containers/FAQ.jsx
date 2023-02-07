import React from "react";

//components
import SimpleAcordion from "../components/Accordion";

// styles
import "../styles/FAQ.scss";

const FAQ = () => {
  return (
    <div className="faq-container">
      <h2>Frequently Asked Questions</h2>

      <p>
        Here are some of our FAQs. If you have any other question you'd like
        answered please feel free to email us.
      </p>

      <SimpleAcordion />

      <button>More Info</button>
    </div>
  );
};

export default FAQ;
