import React from "react";
import { Link } from "react-router-dom";
import {
  FiArrowRightCircle,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";

import Portfolio from "../../components/Portfolio";

import "./styles.css";

const Carousel = (props) => {
  const portfolios = props.portfolios;
  const max = portfolios.length - 1;
  const min = 0;
  let actual = 0;

  function isValid(value, toRight = false, toLeft = false) {
    if (toRight) return value === max ? false : true;
    if (toLeft) return value === min ? false : true;
  }

  function animateToRight(actualSlide, nextSlide) {
    actualSlide.classList.add("fadeOutLeft");
    setTimeout(() => {
      actualSlide.classList.remove("active");
      actualSlide.classList.remove("fadeOutLeft");
    }, 1000);

    setTimeout(() => {
      nextSlide.classList.add("active");
      nextSlide.classList.add("fadeInRight");
    }, 600);

    setTimeout(() => {
      nextSlide.classList.remove("fadeInRight");
    }, 2200);
  }

  function animateToLeft(actualSlide, nextSlide) {
    actualSlide.classList.add("fadeOutRight");
    setTimeout(() => {
      actualSlide.classList.remove("active");
      actualSlide.classList.remove("fadeOutRight");
    }, 1000);

    setTimeout(() => {
      nextSlide.classList.add("active");
      nextSlide.classList.add("fadeInLeft");
    }, 600);

    setTimeout(() => {
      nextSlide.classList.remove("fadeInLeft");
    }, 2200);
  }

  function changeSliderToRight() {
    if (!isValid(actual, true, false)) return null;

    const actualSlide = document.querySelector(`[slide-index="${actual}"]`);
    const nextSlide = document.querySelector(`[slide-index="${actual + 1}"]`);

    animateToRight(actualSlide, nextSlide);
    actual += 1;
  }

  function changeSliderToLeft() {
    if (!isValid(actual, false, true)) return null;

    const actualSlide = document.querySelector(`[slide-index="${actual}"]`);
    const nextSlide = document.querySelector(`[slide-index="${actual - 1}"]`);

    animateToLeft(actualSlide, nextSlide);
    actual -= 1;
  }

  return (
    <div id="carousel">
      {portfolios.map((portfolio, index) => (
        <div
          className={index === 0 ? "slide active" : "slide"}
          key={index}
          slide-index={index}
        >
          <Portfolio
            title={portfolio.title}
            text={portfolio.text}
            imageURL={portfolio.imageURL}
          >
            <Link to="/portfolio" className="link aqua">
              <span>Ver portfolio</span>
              <FiArrowRightCircle />
            </Link>
          </Portfolio>
        </div>
      ))}

      <div className="arrow left" onClick={changeSliderToLeft}>
        <FiChevronLeft />
      </div>

      <div className="arrow right" onClick={changeSliderToRight}>
        <FiChevronRight />
      </div>
    </div>
  );
};

export default Carousel;
