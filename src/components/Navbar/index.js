import React from "react";
import { Link } from "react-router-dom";

const styles = {
  navApp: {
    backgroundColor: "navy",
    color: "white",
    fontSize: "15px",
    padding: "20px",
    borderBottom: "7px rgb(247, 39, 184)",
    marginBottom: "0"
  },

  whiteFont: {
    color: "white"
  },

  heading: {
    fontSize: "25px",
    fontWeight: "bold",
    fontFamily: "serif"
  }
}

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <div style={styles.navApp} className="navApp">
      <nav className="navbar">
        <div className="col-md-1"></div>
        <div className="col-md-3">
          <span style={styles.heading} className="navbar-brand mb-0 h1">Brian Cardines</span>
        </div>
        <div className="col-md-3">
        </div>

        <div className="col-md-1">
          <button type="button" class="btn btn-success">
            <Link to="/About" style={styles.whiteFont}>About Me</Link>
          </button>
        </div>

        <div className="col-md-1">
          <button type="button" class="btn btn-danger">
            <Link to="/Portfolio" style={styles.whiteFont}>Portfolio</Link>
          </button>
        </div>

        <div className="col-md-1">
          <button type="button" class="btn btn-dark">
            <Link to="/Contact" style={styles.whiteFont}>Contact</Link>
          </button>
        </div>

        <div className="col-md-1"></div>
      </nav>

    </div>
  );
}

export default Navbar;
