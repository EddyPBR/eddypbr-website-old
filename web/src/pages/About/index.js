import React from "react";
import { FiPhone, FiMail, FiLinkedin, FiGithub, FiMap } from "react-icons/fi";

import Skill from "../../components/Skill";
import Career from "../../components/Career";

import "./styles.css";

const About = () => {
  return (
    <main id="about">
      <header>
        <div className="container">
          <div>
            <img
              src="https://avatars2.githubusercontent.com/u/48658479?s=460&u=51365e1c6a53cb7c4a0741bb7dda1ebcf64d4417&v=4"
              alt="Edvaldo Junior"
            />
            <div>
              <h1>Edvaldo junior</h1>
              <span>Desenvolvedor Fullstack | CEO Árius-Help Startup</span>
            </div>
          </div>

          <div>
            <ul>
              <li>
                <a
                  href="https://api.whatsapp.com/send?phone=5583987956936&text=Ol%C3%A1%20Edvaldo%20Junior"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <div>
                    <FiPhone />
                  </div>
                  <span>(83)98795-6936</span>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/EddyPBR"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <div>
                    <FiGithub />
                  </div>
                  <span>github.com/EddyPBR</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.google.com/maps/place/Campina+Grande,+PB/@-7.242662,-35.971605,12z/data=!3m1!4b1!4m5!3m4!1s0x7ac1e5f43201c85:0xc9656aec3aa6af51!8m2!3d-7.2290752!4d-35.8808337"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <div>
                    <FiMap />
                  </div>
                  <span>Campina Grande, PB - Brasil</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:edvaldojunior1310@gmail.com"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <div>
                    <FiMail />
                  </div>
                  <span>edvaldojunior1310@gmail.com</span>
                </a>
              </li>
              <li>
                <a
                  href="https://br.linkedin.com/in/edvaldojuniordev"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <div>
                    <FiLinkedin />
                  </div>
                  <span>linkedin.com/in/edvaldojuniordev/</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>

      <section className="content">
        <div className="row">
          <div>
            <h1>BIO</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              eu dui nulla. Curabitur gravida justo et dui sagittis dapibus. In
              hac habitasse platea dictumst. Curabitur massa urna, venenatis ut
              felis sit amet, condimentum eleifend nunc. Aenean posuere
              sollicitudin nulla, ac finibus nunc venenatis ut.
            </p>
          </div>
          <div>
            <h1>Habilidades</h1>
            <div className="skills">
              <Skill value="92" name="Desenvolvimento Web" />
              <Skill value="70" name="UI/UX Design" />
              <Skill value="85" name="Desenvolvimento Mobile" />
              <Skill value="80" name="Marketing Digital" />
              <Skill value="100" name="Café" />
            </div>
          </div>
        </div>
        <div className="row">
          <div>
            <h1>Formação</h1>
            <ul className="career-list">
              <li>
                <Career
                  title="Instituto Federal de Ciência e Tecnologia da Paraíba"
                  details="Graduação, Tecnologia em Telemática"
                  year="2017-2022"
                  img_url="https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Instituto_Federal_Marca_2015.svg/1200px-Instituto_Federal_Marca_2015.svg.png"
                />
              </li>
              <li>
                <Career
                  title="Escola Virgem de Lourdes"
                  details="Técnico, Tecnologia da Informação"
                  year="2016-2017"
                  img_url="https://www.conexaomulheresnoescolar.com.br/public/uploads/escolas/200px_1513720787_lourdinas.png"
                />
              </li>
            </ul>
          </div>
          <div>
            <h1>Habilidades</h1>
            <ul className="career-list">
              <li>
                <Career
                  title="Instituto Federal de Ciência e Tecnologia da Paraíba"
                  details="Graduação, Tecnologia em Telemática"
                  year="2017-2022"
                  tasks={[
                    "Diretor Executivo - responsavel por líderar todo o time da Árius-Help.",
                    "Desenvolvedor Fullstack - responsavel por desenvolver sistemas completos, desde a Interface até seu funcionamento lógico interno.",
                  ]}
                  img_url="https://avatars1.githubusercontent.com/u/53834932?s=400&v=4"
                />
              </li>
              <li>
                <Career
                  title="Desenvolvedor Fullstack & Diretor de Marketing"
                  details="Jhonny Porto, cantor e compositor"
                  year="2018-2019"
                  tasks={[
                    "Diretor de Marketing - Determinar ações e estrategias de marketing digital.",
                    "Desenvolvedor Fullstack - Desenvolver um website e atribuir uma lógica de cadastro de agenda de shows para o cantor.",
                  ]}
                  img_url="https://studiosol-a.akamaihd.net/tb/652x652/palcomp3-discografia/0/1/1/3/4090f4d34d3d453193bd97bd0a9d57ef.jpg"
                />
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
