import React from "react";
// import "../App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const styles = {
    aboutMeCard: {
        // borderStyle: "solid",
        textAlign: "center"

    }
}

const mainPage = () => {
    return (
        <div className="container">

            <div className="card" style={styles.aboutMeCard}>
                <img className="card-img-top" src="../image/aboutme.jpg" alt="Card image cap" />
                <div className="card-body">
                    <h5 style={styles.aboutMeCard} className="card-title">A Little About Me</h5>
                    <p style={styles.aboutMeCard} className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <ul >Proficiencies
                    <li> </li>
                    </ul>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    )
}
export default mainPage