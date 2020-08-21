import React from "react";
import { useHistory } from "react-router-dom";

import { FiChevronLeft } from "react-icons/fi";

import "./styles.css";

const BackLink = () => {
  const history = useHistory();

  function handleNavigateBack(event) {
    event.preventDefault();
    history.goBack();
  }

  return(
    <div id="back-link" onClick={(event) => handleNavigateBack(event)}>
      <FiChevronLeft />
      <a href="#back">Voltar</a>
    </div>
  );
}

export default BackLink;