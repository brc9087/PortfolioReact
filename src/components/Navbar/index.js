import React from "react";
import { Link } from "react-router-dom";
// import "./style.css";

const styles = {
  navApp: {
    backgroundColor: "blue",
    color: "white",
    fontSize: "20px",
    padding: "20px",
    borderBottom: "7px rgb(247, 39, 184)"
  },
  
  whiteFont: {
    color: "white"
  }
}

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <div style={styles.navApp} className="navApp">
      <nav className="navbar">
        <div className="col-md-1"></div>
        <div className="col-md-3">
          <span id="name" className="navbar-brand mb-0 h1">BRIAN CARDINES</span>
        </div>
        <div className="col-md-3">
        </div>

        <div className="col-md-1">
          <Link to="/About" style={styles.whiteFont}>About Me</Link>
        </div>

        <div className="col-md-1">
          <Link to="/Portfolio" style={styles.whiteFont}>Portfolio</Link>
        </div>

        <div className="col-md-1">
          <Link to="/Contact" style={styles.whiteFont}>Contact</Link>
        </div>

        <div className="col-md-1"></div>
      </nav>

    </div>
  );
}

export default Navbar;
