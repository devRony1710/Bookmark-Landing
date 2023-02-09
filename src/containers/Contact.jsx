import React from "react";

// styles
import "../styles/Contact.scss";

const Contact = () => {
  return (
    <div className="contact-section-container">
      <div className="contact-section-description">
        <span>35.000+ already joined</span>
        <h2>Stay up-to-date with what we'er doing</h2>
      </div>

      <form className="contact-form">
        <input
          type="email"
          name="email"
          placeholder="Enter your email address"
        />
        <button>Contact Us</button>
      </form>
    </div>
  );
};

export default Contact;
