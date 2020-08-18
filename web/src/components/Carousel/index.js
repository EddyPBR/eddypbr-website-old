import React from "react";
import { Link } from "react-router-dom";
import {
  FiArrowRightCircle,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";

import Portfolio from "../../components/Portfolio";
import Project from "../../components/Project";

import "./styles.css";

const Carousel = (props) => {
  const contents = props.contents;
  const max = contents.length - 1;
  const min = 0;
  let actual = 0;

  function isValid(value, toRight = false, toLeft = false) {
    if (toRight) return value === max ? false : true;
    if (toLeft) return value === min ? false : true;
  }

  function animateToRight(actualSlide, nextSlide, actualDot, nextDot) {
    actualSlide.classList.add("fadeOutLeft");
    setTimeout(() => {
      actualSlide.classList.remove("active");
      actualSlide.classList.remove("fadeOutLeft");
      actualDot.classList.remove("active");
    }, 1000);

    setTimeout(() => {
      nextSlide.classList.add("active");
      nextSlide.classList.add("fadeInRight");
      nextDot.classList.add("active");
    }, 600);

    setTimeout(() => {
      nextSlide.classList.remove("fadeInRight");
    }, 2200);
  }

  function animateToLeft(actualSlide, nextSlide, actualDot, nextDot) {
    actualSlide.classList.add("fadeOutRight");
    setTimeout(() => {
      actualSlide.classList.remove("active");
      actualSlide.classList.remove("fadeOutRight");
      actualDot.classList.remove("active");
    }, 1000);

    setTimeout(() => {
      nextSlide.classList.add("active");
      nextSlide.classList.add("fadeInLeft");
      nextDot.classList.add("active");
    }, 600);

    setTimeout(() => {
      nextSlide.classList.remove("fadeInLeft");
    }, 2200);
  }

  function changeSliderToRight() {
    if (!isValid(actual, true, false)) return null;

    const actualSlide = document.querySelector(`[slide-index="${actual}"]`);
    const nextSlide = document.querySelector(`[slide-index="${actual + 1}"]`);

    const actualDot = document.querySelector(`[slide-index-reference="${actual}"]`);
    const nextDot = document.querySelector(`[slide-index-reference="${actual + 1}"]`);

    animateToRight(actualSlide, nextSlide, actualDot, nextDot);
    actual += 1;
  }

  function changeSliderToLeft() {
    if (!isValid(actual, false, true)) return null;

    const actualSlide = document.querySelector(`[slide-index="${actual}"]`);
    const nextSlide = document.querySelector(`[slide-index="${actual - 1}"]`);

    const actualDot = document.querySelector(`[slide-index-reference="${actual}"]`);
    const nextDot = document.querySelector(`[slide-index-reference="${actual - 1}"]`);

    animateToLeft(actualSlide, nextSlide, actualDot, nextDot);
    actual -= 1;
  }

  return (
    <div id="carousel">
      {contents.map((content, index) => (
        <div
          className={index === 0 ? "slide active" : "slide"}
          key={index}
          slide-index={index}
        >
          {props.isPortfolio && (
            <Portfolio
              title={content.title}
              text={content.text}
              imageURL={content.imageURL}
            >
              <Link to="/portfolio" className="link aqua">
                <span>Ver portfolio</span>
                <FiArrowRightCircle />
              </Link>
            </Portfolio>
          )}

          {props.isProject && (
            <Project
              title={content.title}
              text={content.text}
              image_url={content.imageURL}
              githubLink={content.githubLink}
              figmaLink={content.githubLink}
              webLink={content.githubLink}
            />
          )}
        </div>
      ))}

      <div className="arrow left" onClick={changeSliderToLeft}>
        <FiChevronLeft />
      </div>

      <div className="arrow right" onClick={changeSliderToRight}>
        <FiChevronRight />
      </div>

      <div className="dots">
        {contents.map((content, index) => (
          <span
            className={index === 0 ? "dot active" : "dot"}
            key={index}
            slide-index-reference={index}
          />
        ))}
      </div>

    </div>
  );
};

export default Carousel;
