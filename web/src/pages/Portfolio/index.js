import React, { useEffect, useState } from "react";

import Carousel from "../../components/Carousel";

import "./styles.css";

import api from "../../services/api";

const PortfolioPage = () => {
  const [portfolios, setPortfolios] = useState([]);

  useEffect(() => {
    api.get("portfolio").then((response) => setPortfolios(response.data));
  }, [setPortfolios]);

  return <Carousel contents={portfolios} isPortfolio />;
};

export default PortfolioPage;
