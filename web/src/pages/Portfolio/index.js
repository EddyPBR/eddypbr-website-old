import React from "react";

import Carousel from "../../components/Carousel";

import "./styles.css";

const PortfolioPage = () => {
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
    <Carousel portfolios={portfolios} />
  );
};

export default PortfolioPage;
