import React from "react";
// import "../App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import workout from "../../images/workout.png";
import employee from "../../images/employeedirectory.png";
import burger from "../../images/burger.png";
import hole from "../../images/hole.png";
import nba from "../../images/nba.png";
import note from "../../images/note.png"

const styles = {
    back: {
        backgroundColor: "grey"
    }
}

const portfolio = () => {
    return (
        <div className="portfolioApp">
            <div style={styles.back} className="container">
                <div className="card">
                    <div className="card-header">
                        <h3>
                            Portfolio
                    </h3>
                    </div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-1">
                            </div>

                            <div className="col-md-3">
                                <a href="https://boiling-cliffs-25283.herokuapp.com/">
                                    <img src={workout}
                                        className="card-img-top" alt="img-one" />
                                </a>
                                <p className="card-text">WORKOUT TRACKER</p>
                                <p id="repo"><a href="https://github.com/brc9087/WorkOutTrackerHW">* Workout Tracker Repo</a></p>
                            </div>
                            <div className="col-md-1"></div>


                            <div className="col-md-3">
                                <a href="https://brc9087.github.io/myapp/ ">
                                    <img src={employee}
                                        className="card-img-top" alt="img-two" />
                                </a>
                                <p className="card-text">EMPLOYEE DIRECTORY REACT</p>
                                <p id="repo"><a href="https://github.com/brc9087/EmployeeReactDirectory"
                                >* Empoyee Directory React Repo </a></p>
                            </div>
                        
                        </div>
                        <br></br>
                        <br></br>
                        <br></br>
                        <div className="row">
                            <div className="col-md-1">

                            </div>
                            <div className="col-md-3">
                                <a href="https://immense-waters-93242.herokuapp.com/">
                                    <img src={burger}
                                        className="card-img-top" alt="img-one" />
                                </a>
                                <p className="card-text">EAT DA BURGER</p>
                                <p id="repo"><a href="https://github.com/brc9087/Eat-Da-BurgerHW"
                                >* Eat Da Burger Repo</a></p>
                            </div>
                            <div className="col-md-1">


                            </div>
                            <div className="col-md-3">
                                <a href="https://joemc9011.github.io/emorph/">
                                    <img src={hole}
                                        className="card-img-top" alt="img-one" />
                                </a>
                                <p className="card-text"> HOLE IN THE WALL (project 1) </p>
                                <p id="repo"><a href="https://github.com/brc9087/HoleInTheWall"
                                >* Hole In The Wall Repo</a></p>
                                <div className="col-md-1"></div>
                            </div>
                        </div>
                        <br></br>
                        <br></br>
                        <div className="row">
                            <div className="col-md-1"></div>
                            <div className="col-md-3">
                                <a href="https://fast-dawn-07792.herokuapp.com/">
                                    <img src={nba}
                                        className="card-img-top" alt="img-one" />
                                </a>
                                <p className="card-text">MY TEAM (project 2)</p>
                                <p id="repo"><a href="https://github.com/brc9087/MyTeam"
                                >* My Team Repo</a></p>

                            </div>

                            <div className="col-md-1"></div>

                            <div className="col-md-3">
                                <a href="https://mighty-headland-17179.herokuapp.com/">
                                    <img src={note}
                                        className="card-img-top" alt="img-one" />
                                </a>
                                <p className="card-text">NOTETAKER APP</p>
                                <p id="repo"><a href="https://github.com/brc9087/NoteTaker"
                                >* Notetaker App Repo</a></p>
                            </div>
                        </div>
                        <br></br>
                    </div>

                </div>






            </div>
        </div>
    )
}
export default portfolio