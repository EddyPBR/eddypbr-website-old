import React, { useState } from "react";

// import { FiMail } from "react-icons/fi";

import "./styles.css";

import contact from "../../assets/images/contact.png";

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  function handleSendEmail(event) {
    event.preventDefault();
    const data = {
      name,
      email,
      subject,
      message
    }
    console.log(data);
  }

  return(
    <div id="contact">
      <div className="contact-box">
        <div className="columns">
          <div className="column">
            <div className="image-container">
              <img src={contact} alt="Contato" />
            </div>
            <span>Quer iniciar um projeto, parceria ou simplesmente conversar? <b>- Basta dizer Olá</b></span>
          </div>
          <div className="column">
            <form onSubmit={handleSendEmail}>
              <input 
                type="text"
                id="name"
                name="name"
                placeholder="Seu nome"
                value={name}
                onChange={ event => setName(event.target.value) }
              />
              
              <input 
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                value={email}
                onChange={ event => setEmail(event.target.value) }
              />

              <input 
                type="text"
                id="subject"
                name="subject"
                placeholder="Assunto"
                value={subject}
                onChange={ event => setSubject(event.target.value) }
              />

              <textarea 
                placeholder="Escreva sua mensagem..."
                id="message"
                name="message"
                value={message}
                onChange={ event => setMessage(event.target.value) }
              />

              <button className="button yellow" type="submit">Enviar</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;