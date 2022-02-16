import React from "react";
import About from "./components/About";
import Landing from "./components/Landing";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import Learning from "./components/Learning";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="bg-gray-800 h-full font-custom">
      <Router>
        <NavBar />
        <Switch>
          <Route path="/">
            <div id="home">
              <Landing />
            </div>
            <div id="about">
              <About />
            </div>
            <div id="projects">
              <Projects />
            </div>
            <div id="learning">
              <Learning />
            </div>
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
