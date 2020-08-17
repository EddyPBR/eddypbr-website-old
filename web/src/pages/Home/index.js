import React from "react";
import { Link } from "react-router-dom";
import {
  FiGithub,
  FiInstagram,
  FiLinkedin,
  FiFacebook,
  FiArrowRightCircle,
} from "react-icons/fi";

import Section from "../../components/Section";
import Portfolio from "../../components/Portfolio";
import Project from "../../components/Project";
import ContactBox from "../../components/ContactBox";

import "./styles.css";

import man from "../../assets/images/man-analyzing-data.png";
import ariusHelp from "../../assets/images/arius-help-logo.png";
import rocket from "../../assets/images/rocket.png";

const Home = () => {
  return (
    <>
      <header id="introduction">
        <div className="container">
          <img
            src="https://avatars2.githubusercontent.com/u/48658479?s=400&u=51365e1c6a53cb7c4a0741bb7dda1ebcf64d4417&v=4"
            alt="Edvaldo Junior"
          />
          <h1>Edvaldo Junior</h1>
          <h2>Desenvolvedor Fullstack</h2>
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
        </div>
      </header>

      <main>
        <Section
          title="Edvaldo Junior"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          facilisis pellentesque pellentesque. Aliquam sagittis congue
          justo, et tristique dui eleifend tincidunt. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Praesent facilisis pellentesque
          pellentesque. Aliquam sagittis congue justo."
          btnLink="/sobre"
          btnText="Saiba mais"
          isBlank={false}
          imageURL={man}
        />

        <div className="line grey" />

        <section id="abstract-portfolio">
          <h1>Conheça meu portfólio</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis
            dapibus dui, at lobortis lacus. Etiam vitae neque dui. Nullam
            pulvinar mattis tortor.
          </p>

          <Portfolio
            title="Lorem ipsum dollor"
            text="Protótipagem e frontend"
            imageURL="http://wsports.ml/assets/img/header-background.jpg"
          >
            <Link to="/portfolio" className="link aqua">
              <span>Ver portfolio</span>
              <FiArrowRightCircle />
            </Link>
          </Portfolio>
        </section>

        <section id="abstract-project">
          <h1>Conheça meus projetos</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis
            dapibus dui, at lobortis lacus. Etiam vitae neque dui. Nullam
            pulvinar mattis tortor.
          </p>

          <Project
            title="Project Advisor 3000"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis
            dapibus dui, at lobortis lacus. Etiam vitae neque dui. Nullam
            pulvinar mattis tortor. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. In quis dapibus dui, at lobortis lacus. Etiam
            vitae neque dui. Nullam pulvinar mattis tortor."
            imageURL="https://raw.githubusercontent.com/EddyPBR/project-advisor-3000/master/frontend/src/assets/main-image.png"
          >
            <Link to="/projetos" className="link green">
              <span>Ver projetos</span>
              <FiArrowRightCircle />
            </Link>
          </Project>
        </section>

        <ContactBox />

        <Section
          title="Árius-Help Startup"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis
          dapibus dui, at lobortis lacus. Etiam vitae neque dui. Nullam
          pulvinar mattis tortor. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. In quis dapibus dui, at lobortis lacus. Etiam
          vitae neque dui. Nullam pulvinar mattis tortor."
          btnLink="http://ariushelp.com/"
          btnText="Saiba mais"
          isBlank={true}
          imageURL={ariusHelp}
        />

        <div id="abstract-blog">
          <div className="container">
            <div>
              <ul>
                <li>Quer ficar atualizado sobre as novas tecnologias?</li>
                <li>
                  Aprender com tutoriais sobre como desenvolver funcionalidades
                  para seus projetos?
                </li>
                <li>Dicas de como aprender a programar?</li>
              </ul>
              <Link to="/blog" className="button">
                Acesse o Blog
              </Link>
            </div>
            <div>
              <img src={rocket} alt="foguete" />
            </div>
          </div>
        </div>

        <div className="line yellow" />
      </main>
    </>
  );
};

export default Home;
