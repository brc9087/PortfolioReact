import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Signup from "./pages/Signup";
import Search from "./pages/Search";
import About from "./pages/About/index"
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Switch>
          <Route exact path="/" component={About} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/search" component={Search} />
          </Switch>
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
