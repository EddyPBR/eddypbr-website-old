import React from "react";
import { FiGithub, FiFigma, FiGlobe } from "react-icons/fi";

import "./styles.css";

const Project = (props) => {
  const { title, text, github_url, figma_url, web_url, img_url } = props;
  return (
    <div className="project-box">
      <div>
        <img src={img_url} alt={title} />
      </div>
      <div>
        <h1>{title}</h1>
        <p>{text}</p>
        <div>
          {github_url && (
            <a href={github_url} rel="noopener noreferrer" target="_blank">
              <FiGithub />
            </a>
          )}
          {figma_url && (
            <a href={figma_url} rel="noopener noreferrer" target="_blank">
              <FiFigma />
            </a>
          )}
          {web_url && (
            <a href={web_url} rel="noopener noreferrer" target="_blank">
              <FiGlobe />
            </a>
          )}
        </div>
        {props.children}
      </div>
    </div>
  );
};

export default Project;
