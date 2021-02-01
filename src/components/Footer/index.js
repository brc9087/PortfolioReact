import React from "react";
// import "./style.css";
// import { Link } from "react-router-dom";

const styles = {
  foot: {
    position: "fixed",
    left: "0",
    bottom: "0",
    width: "100%",
    backgroundColor: "red",
    color: "white",
    textAlign: "center"
  }, 
  footText: {
    textAlign: "center",
    fontSize: "15px",
    color: "black"
  }
}

function Footer() {
  return (
    <div style={styles.foot} className="navApp">
      <nav className="navbar">


        <div className="col-md-12">
          <p style={styles.footText}> Input github Link
          <br></br> Input github Link <br></br> Input github Link
          </p>
        </div>


      </nav>

    </div>
  );
}

export default Footer;
