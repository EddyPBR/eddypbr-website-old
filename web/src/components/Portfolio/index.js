import React from "react";
import { FiArrowRightCircle } from "react-icons/fi";

import "./styles.css";

const Portfolio = (props) => {
  const { title, subtitle, img_url, link } = props;
  return (
    <div className="portfolio-box">
      <div>
        <img src={img_url} alt={title} />
      </div>
      <div>
        <h1>{title}</h1>
        <p>{subtitle}</p>
        {
          link ?
          <a href={link} rel="noopener noreferrer" target="_blank">
            <span>Ver trabalho</span>
            <FiArrowRightCircle />
          </a> : 
          null
        }
        {props.children}
      </div>
    </div>
  );
};

export default Portfolio;
