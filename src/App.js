import React from 'react';
import './App.css';
import Wrapper from "./components/wrapper";
import Nav from "./components/navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./pages/about";
import Contact from "./pages/contact";
import Portfolio from "./pages/portfolio";


function App() {

  return (
    <Router>
      <Nav />
      <Wrapper>
        <Switch>
          <Route exact path="/" component={About} />
          <Route exact path="/About" component={About} />
          <Route exact path="/Portfolio" component={Portfolio} />
          <Route exact path="/Contact" component={Contact} />
        </Switch>
      </Wrapper>
    </Router>
  );
}

export default App;