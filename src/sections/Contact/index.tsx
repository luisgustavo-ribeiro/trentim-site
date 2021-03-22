import React from "react";
import { ContactStyle } from "./ContactStyles";

const Contact: React.FC = () => {
  return (
    <ContactStyle id="contact">
      <div className="container col">
        <div className="contact-form"></div>
        <div className="contact-info"></div>
      </div>
    </ContactStyle>
  );
};

export default Contact;
