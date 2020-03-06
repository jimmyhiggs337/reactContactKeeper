import React, { Fragment } from "react";
import "./App.css";
import Navbar from "./Components/layout/Navbar";
import Home from "./Components/pages/Home";
import About from "./Components/pages/About";
import ContactState from "./context/contact/ContactState";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <ContactState>
      <Router>
        <Fragment>
          <Navbar></Navbar>
          <div className="container"></div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
          </Switch>
        </Fragment>
      </Router>
    </ContactState>
  );
};

export default App;
