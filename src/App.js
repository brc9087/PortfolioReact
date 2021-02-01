import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./pages/About/index"
import Portfolio from "./pages/Portfolio/index"
import Contact from "./pages/Contact/index"
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import "./App.css";


function App() {
  return (
    <Router>
        <Navbar />
        <Wrapper>
          <Switch>
          <Route exact path="/" component={About} />
          <Route exact path="/about" component={About} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/contact" component={Contact} />
          </Switch>
        </Wrapper>
        <Footer />
    </Router>
  );
}

export default App;
