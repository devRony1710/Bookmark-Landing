import React, { useRef } from "react";

// styles
import "../styles/Contact.scss";

const Contact = () => {
  const contactForm = useRef(null);

  const onSubmitEmail = (event) => {
    event.preventDefault();

    const formData = new FormData(contactForm.current);
    const emailAddres = formData.get("email");

    console.log("The input email is:", emailAddres);
  };

  return (
    <div className="contact-section-container">
      <div className="contact-section-description">
        <span>35.000+ already joined</span>
        <h2>Stay up-to-date with what we'er doing</h2>
      </div>

      <form className="contact-form" ref={contactForm}>
        <input
          type="email"
          name="email"
          placeholder="Enter your email address"
        />
        <button onClick={onSubmitEmail}>Contact Us</button>
      </form>
    </div>
  );
};

export default Contact;
