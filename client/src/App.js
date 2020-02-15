import React, { Fragment } from "react";
import Contact from "./components/Contact";
import Header from "./components/Header.js";
import HomePage from "./components/HomePage";
import Credit from "./components/Credit";
import Listen from "./components/Listen/Listen";
import Watch from "./components/Watch/Watch";
import About from "./components/About"

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";



const App = () => {


  return (

    <Router>
      <Fragment>
        <Header />

        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/credits" component={Credit} />
          <Route exact path="/listen" component={Listen} />
          <Route exact path="/watch" component={Watch} />
          <Route exact path="/about" component={About} />
        </Switch>
      </Fragment>
    </Router>

  );
};

export default App;
