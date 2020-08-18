import React from "react";

import Carousel from "../../components/Carousel";

import "./styles.css";

const Projetos = () => {
  const projetos = [
    {
      title: "Project Advisor 3000",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis dapibus dui, at lobortis lacus. Etiam vitae neque dui. Nullam pulvinar mattis tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis dapibus dui, at lobortis lacus. Etiam vitae neque dui. Nullam pulvinar mattis tortor.",
      imageURL: "https://raw.githubusercontent.com/EddyPBR/project-advisor-3000/master/frontend/src/assets/main-image.png",
      githubLink: [
        "https://github.com/EddyPBR/project-advisor-3000",  
      ],
    },
    {
      title: "Project Advisor 3000",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis dapibus dui, at lobortis lacus. Etiam vitae neque dui. Nullam pulvinar mattis tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis dapibus dui, at lobortis lacus. Etiam vitae neque dui. Nullam pulvinar mattis tortor.",
      imageURL: "https://raw.githubusercontent.com/EddyPBR/project-advisor-3000/master/frontend/src/assets/main-image.png",
      githubLink: [
        "https://github.com/EddyPBR/project-advisor-3000",  
      ],
    },
    {
      title: "Project Advisor 3000",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis dapibus dui, at lobortis lacus. Etiam vitae neque dui. Nullam pulvinar mattis tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis dapibus dui, at lobortis lacus. Etiam vitae neque dui. Nullam pulvinar mattis tortor.",
      imageURL: "https://raw.githubusercontent.com/EddyPBR/project-advisor-3000/master/frontend/src/assets/main-image.png",
      githubLink: [
        "https://github.com/EddyPBR/project-advisor-3000",  
      ],
    }
  ]

  return(
    <Carousel contents={projetos} isProject />
  );
}

export default Projetos;