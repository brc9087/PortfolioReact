import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import picture from "../../images/aboutme.png"


const styles = {
    aboutMeCard: {
        // borderStyle: "solid",
        textAlign: "center",
        background: "white",
        height: "80%"
    },
    pic: {
        height: "20%",
        width: "20%"
    }, 
    text: {
        fontSize: "20px"
    }
}

const mainPage = () => {
    return (
        <div className="aboutApp">

            <div style={styles.aboutMeCard} className="container">
                <div style={styles.aboutMeCard} className="card">
                    <div className="card-header">
                        <h3>
                            A Little About Me</h3>
                    </div>
                    <div className="card-body">

                        <div className="row">
                            <div className="col-md-3">
                                <img id="pic" src={picture} alt="profile pic" width="100%" height="auto%" />
                            </div>

                            <div style={styles.text} className="col-md-8">
                                <p>My name is Brian Cardines. I am currently employed as a registered nurse fighting COVID in NY,
                                but I'm a true nerd / tech geek at heart! I am always interestered in the newest gadget I am
                                    aspiring to be a full stack web developer, anticipating graduation this year March 2021 from Rutgers Coding Bootcamp</p>
                                <ul>Quick Facts
                                        <li>Favorite Team: NY Knicks </li>
                                    <li>Favorite Hobbies: basketball, Mountain Biking, Snowboarding</li>
                                    <li>Favorite phone brand: Motorola</li>
                                    <li>Im anti MAC, Windows for Life!</li>
                                </ul>
                                <br />
                                <p> I was born in the philippines and came the US at around 6 years old. I am fluent in English and Tagalog. I have spent most of
                                my life in New Jersey where I attended kindergarden to high school, eventually graduating from Mountainside School of Nursing 2009.
                                I have been employed as an RN since then but have always had an itch to learn about computers and technology in general.
                                I have always taken initiative to be the SuperUser for any new computer documentation systems / technologies released.
                                    </p>
                                <br />
                                <p>I would love to begin my new story as a full stack web developer. Healthcare and technologies have infinite possibilities
                                and it would be amazing to be a part of the growth with existing technologies and discovery of new ones. I have a vast knowledge
                                of the medical field that I would love to integrate with technology.
                                    </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}
export default mainPage