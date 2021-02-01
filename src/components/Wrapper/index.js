import React from "react";
// import "./style.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const styles = {
  wrap: {
    minHeight: "100%",
    paddingBottom: "100px",
    backgroundColor: "yellow"
  }
}

function Wrapper(props) {
  return <main style={styles.wrap} className="wrapper" {...props} />;
}

export default Wrapper;
