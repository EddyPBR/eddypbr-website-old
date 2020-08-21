import React, { useState, useEffect } from "react";

import Carousel from "../../components/Carousel";
import BackLink from "../../components/BackLink";

import "./styles.css";

import api from "../../services/api";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api.get("/projects").then((response) => setProjects(response.data));
  }, [setProjects]);

  return (
    <>
      <BackLink />
      <Carousel contents={projects} isProject />
    </>
    
  );
};

export default Projects;
