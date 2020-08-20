import React from "react";

import "./styles.css";

const Career = (props) => {
  const { title, details, year, img_url, tasks } = props;
  return (
    <div className="career">
      <div className="columns">
        <div className="image-container">
          <img src={img_url} alt={title} />
        </div>
        <div className="content-container">
          <b>{title}</b>
          <span>{details}</span>
          <i>{year}</i>
          <ul>
            {tasks ? tasks.map((task, index) => (
              <li key={index}>{task}</li>
            )) : null}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Career;
