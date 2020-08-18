import React, { useEffect } from "react";

import Carousel from "../../components/Carousel";

import "./styles.css";

import api from '../../services/api';

const PortfolioPage = () => {
  useEffect(() => {
    api
      .get('portfolios')
      .then((response) => {
        // setPortfolios(response.data.projects);
        console.log(response);
      });
  }, ["ok"]);

  const portfolios = [
    {
      title: "Lorem ipsum dollor",
      text: "Protótipagem e frontend",
      imageURL: "http://wsports.ml/assets/img/header-background.jpg",
    },
    {
      title: "Lorem ipsum",
      text: "Protótipagem e frontend",
      imageURL: "http://wsports.ml/assets/img/header-background.jpg",
    },
    {
      title: "Lorem ipsum dollor",
      text: "Protótipagem e frontend",
      imageURL: "http://wsports.ml/assets/img/header-background.jpg",
    },
  ];

  return (
    <Carousel contents={portfolios} isPortfolio />
  );
};

export default PortfolioPage;
