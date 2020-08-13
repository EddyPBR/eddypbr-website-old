import React from "react";
import { Link } from "react-router-dom";

import "./styles.css";

const Section = (props) => {
  const { title, text, imageURL, btnLink, btnText, isBlank = false } = props;

  const button =
    isBlank === true ? 
      (<a className="button" href={btnLink} rel="noopener noreferrer" target="_blank"> {btnText} </a> ) :
      ( <Link className="button" to={btnLink}> {btnText} </Link> );
  return (
    <section home-section="true">
      <div className="container">
        <div>
          <img src={imageURL} alt={title} />
        </div>
        <div>
          <h1>{title}</h1>
          <p>{text}</p>
          {button}
        </div>
      </div>
    </section>
  );
};

export default Section;
