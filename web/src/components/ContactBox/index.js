import React from "react";
import { Link } from "react-router-dom";

import "./styles.css";

const ContactBox = () => {
  return(
    <div className="contact-box">
      <p>Deseja iniciar um novo projeto, ou desenvolver um site para sua empresa?</p>
      <Link to="/contato" className="button">Contate-me</Link>
    </div>
  );
}

export default ContactBox;