import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";

const Routes = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route path="/portfolio" component={Portfolio} />
    </BrowserRouter>
  );
};

export default Routes;
