import React from "react";
import { Link } from "react-router-dom";
import { FiGithub, FiInstagram, FiLinkedin, FiFacebook } from "react-icons/fi";

import "./styles.css";

import man from "../../assets/images/man-analyzing-data.png";

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

      <main id="eddyPBR">
        <div className="container">
          <div>
            <img src={man} alt="Edvaldo Junior" />
          </div>
          <div>
            <h1>Edvaldo Junior</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              facilisis pellentesque pellentesque. Aliquam sagittis congue
              justo, et tristique dui eleifend tincidunt. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit. Praesent facilisis pellentesque
              pellentesque. Aliquam sagittis congue justo.
            </p>
            <Link className="button" to="/sobre">Saiba mais</Link>
          </div>
        </div>
      </main>

      
    </>
  );
};

export default Home;
