import React from "react";
import { Link } from "react-router-dom";
import {
  FiHome,
  FiMail,
  FiMenu,
  FiPenTool,
  FiPackage,
  FiBook,
} from "react-icons/fi";

import "./styles.css";

const Navbar = () => {
  function showNavbar(navButton, navbar) {
    navButton.classList.add("active");
    navbar.classList.add("show");
    setTimeout(() => {
      navButton.removeAttribute("toggle");
      navButton.setAttribute("toggle", "true");
    }, 1000);
  }

  function hideNavbar(navButton, navbar) {
    navButton.classList.remove("active");
    navbar.classList.add("hidding");

    setTimeout(() => {
      navbar.classList.remove("show");
      navbar.classList.remove("hidding");
      navButton.removeAttribute("toggle");
      navButton.setAttribute("toggle", "false");
    }, 1000);
  }

  function displayNavbar() {
    const navButton = document.getElementsByClassName("main")[0];
    const navbar = document.getElementsByClassName("sub-links")[0];

    document.querySelector("[toggle='false']")
      ? showNavbar(navButton, navbar)
      : hideNavbar(navButton, navbar);
  }

  return (
    <nav>
      <div className="sub-links">
        <Link to="/">
          <FiHome />
          <span>Home</span>
        </Link>
        <Link to="/portfolio">
          <FiPenTool />
          <span>Portfolio</span>
        </Link>
        <Link to="/projetos">
          <FiPackage />
          <span>Projetos</span>
        </Link>
        <Link to="/blog">
          <FiBook />
          <span>Blog</span>
        </Link>
        <Link to="/contato">
          <FiMail />
          <span>Contato</span>
        </Link>
      </div>
      <Link to="#" className="main" onClick={displayNavbar} toggle="false">
        <FiMenu />
      </Link>
    </nav>
  );
};

export default Navbar;
