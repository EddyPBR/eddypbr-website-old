import React from "react";
import { Link } from "react-router-dom";

import { FiFacebook, FiInstagram, FiLinkedin, FiGithub, FiHeart } from "react-icons/fi";

import "./styles.css";

const Footer = () => {
  return(
    <footer>
      <div className="container">
        <div className="column">
          <h2>MAPA DO SITE</h2>
          <ul>
            <li><Link to="/">HOME</Link></li>
            <li><Link to="/sobre">SOBRE</Link></li>
            <li><Link to="/projetos">PROJETOS</Link></li>
            <li><Link to="/portfolio">PORTFOLIO</Link></li>
            <li><Link to="/blog">BLOG</Link></li>
          </ul>
        </div>
        <div className="column">
          <h2>OUTROS LINKS</h2>
          <ul>
            <li><a href="http://www.ariushelp.com/" rel="noopener noreferrer" target="_blank">ÁRIUS-HELP</a></li>
            <li><a href="https://www.recode.org.br/" rel="noopener noreferrer" target="_blank">RECODE</a></li>
            <li><a href="http://www.maratonaempreendedorismo2019.cf/" rel="noopener noreferrer" target="_blank">MARATONA EMPREENDEDORA</a></li>
          </ul>
        </div>
        <div className="column">
          <ul>
          <li>
              <a
                href="https://github.com/EddyPBR"
                rel="noopener noreferrer"
                target="_blank"
              >
                <FiGithub />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/edvaldo_junior_dev/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <FiInstagram />
              </a>
            </li>
            <li>
              <a
                href="https://br.linkedin.com/in/edvaldojuniordev"
                rel="noopener noreferrer"
                target="_blank"
              >
                <FiLinkedin />
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/edvaldo.junior.906638"
                rel="noopener noreferrer"
                target="_blank"
              >
                <FiFacebook />
              </a>
            </li>
          </ul>
          <Link to="/contato" className="button">Contato</Link>
        </div>
      </div>
      <div className="details">
        <span>Alguns Direitos Reservados - Desenvolvido com <FiHeart size={10} /> por Edvaldo Junior </span>
      </div>
    </footer>
  );
}

export default Footer;