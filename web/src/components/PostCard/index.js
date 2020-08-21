import React from "react";
import { useHistory } from "react-router-dom";

import "./styles.css";

const PostCard = (props) => {
  const history = useHistory();

  const { title, author, description, img_url, post_url, createdAt } = props;

  const year = createdAt.substring(0, 4);
  const mounth = createdAt.substring(5,7);
  const day = createdAt.substring(8,10);

  const date = [day, mounth, year].join("/");
  
  function handleNavigate(url) {
    history.push(url);
  }

  return(
    <div className="post-card" onClick={() => handleNavigate(`blog/${post_url}`)}>
      <div className="container">
        <figure>
          <img alt={title} src={img_url} />
        </figure>

        <div className="content">
          <h1>Titulo</h1>
          <div className="details">
            <span>Autor: </span>
            <b>{author}</b>
            <span>{date}</span>
          </div>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default PostCard;
