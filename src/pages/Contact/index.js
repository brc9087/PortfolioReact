import React from "react";
// import "../App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import resume from "../../images/resume.pdf";
import resumepic from "../../images/resumepic.PNG"

const styles = {
    contact: {
        textAlign: "center",
        fontSize: "20px",
        fontWeight: "bold"
    }
}

const Contact = () => {
    return (
        <div className="portfolioApp">
            <div className="container">
                <div style={styles.contact} className="contactApp">
                    <div style={styles.contact} className="gitProfile">
                        <p>GitHub Profile: <a target="_blank" rel="noreferrer" href="https://github.com/brc9087">
                            https://github.com/brc9087</a> </p>
                        <p>Linkedin Profile: <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/feed/"
                        >Linkedin Profile</a></p>
                        <p>Email Address: bcardines8@gmail.com</p>
                        <p>Phone Number:908-405-9820</p>


                        <div className="row">
                            <div className="col-md-4">
                            </div>
                            <div style={styles.contact} className="col-md-4">
                                <h2 style={styles.contact}>RESUME</h2>
                                <a target="_blank" rel="noreferrer" href={resume}>
                                    <img src={resumepic}
                                        className="card-img-top" alt="img-one" />
                                </a>
                            </div>
                            <div className="col-md-4">
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
export default Contact