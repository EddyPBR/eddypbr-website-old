import React from "react";
import { FiGithub, FiFigma, FiGlobe } from "react-icons/fi";

import "./styles.css";

const Project = (props) => {
  const { title, text, githubLink, figmaLink, webLink, imageURL } = props;
  return (
    <div className="project-box">
      <div>
        <img src={imageURL} alt={title} />
      </div>
      <div>
        <h1>{title}</h1>
        <p>{text}</p>
        <div>
          {
            githubLink ? 
              <a href={githubLink} rel="noopener noreferrer" target="_blank"><FiGithub /></a> :
              null              
          }
          {
            figmaLink ? 
              <a href={figmaLink} rel="noopener noreferrer" target="_blank"><FiFigma /></a> :
              null              
          }
          {
            webLink ? 
              <a href={webLink} rel="noopener noreferrer" target="_blank"><FiGlobe /></a> :
              null              
          }
        </div>
        {props.children}
      </div>
    </div>
  );
};

export default Project;
