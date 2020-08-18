import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About"
import Portfolio from "./pages/Portfolio";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";

const Routes = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route path="/sobre" component={About} />
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/projetos" component={Projects} />
      <Route path="/contato" component={Contact} />
      <Route path="/blog" component={Blog} />
    </BrowserRouter>
  );
};

export default Routes;
