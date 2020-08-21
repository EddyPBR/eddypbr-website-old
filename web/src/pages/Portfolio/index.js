import React, { useEffect, useState } from "react";

import Carousel from "../../components/Carousel";
import BackLink from "../../components/BackLink";

import "./styles.css";

import api from "../../services/api";

const PortfolioPage = () => {
  const [portfolios, setPortfolios] = useState([]);

  useEffect(() => {
    api.get("portfolio").then((response) => setPortfolios(response.data));
  }, [setPortfolios]);

  return (
    <>
      <BackLink />
      <Carousel contents={portfolios} isPortfolio />
    </>
  ); 
};

export default PortfolioPage;
