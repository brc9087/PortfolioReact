import React from "react";

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
    fontSize: "20px",
    color: "white"
  }
}

function Footer() {
  return (
    <div style={styles.foot} className="navApp">
      <nav className="navbar">
        <div className="col-md-12">
          <p style={styles.footText}><a href="https://github.com/brc9087/portfolioreact">PortFolio Repo</a>
          </p>
        </div>
      </nav>
    </div>
  );
}

export default Footer;
