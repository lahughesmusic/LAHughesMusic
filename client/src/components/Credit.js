import React, { Component } from "react";
import { Helmet } from "react-helmet";
import './media.css'

export default class Credit extends Component {
  render() {
    const ul = {
      listStyleType: "none"
    };
    const documentary = {
      display: "block",
      marginLeft: "auto",
      marginRight: "auto",
      width: "30%"
    };
    const style = {
      fontSize: "40px",
      fontFamily: "helvetica thin",
      float: "left",

      color: "white"
    };
    const imageStyle = {
      height: "300px",
      width: "200px",
      marginLeft: "5px",
      border: ".5px solid white"
    };
    const shortFilmImage = {
      height: "300px",
      marginLeft: "15px"
    };

    const h1 = {
      fontSize: "50px",
      marginTop: "50px",
      textAlign: "center",
      borderBottom: "1px solid white",
      marginBottom: "30px"
    };
    const descriptions = {
      marginLeft: "60px"
    };

    return (
      <div style={style}>
        <Helmet bodyAttributes={{ style: "background-color: black" }} />

        <div className="imageDiv">
          <h1 className="fontFamily fontSize" style={h1}>
            TELEVISION
          </h1>
          <img
            style={imageStyle}
            src={require("../images/portrait_killerKids.jpg")}
            alt="killer kids"
          />
          <img
            style={imageStyle}
            src={require("../images/rapgame.jpeg")}
            alt="Rap Game"
          />
          <img
            style={imageStyle}
            src={require("../images/portrait_nightwatch.jpeg")}
            alt="nightwatch"
          />
          <img
            style={imageStyle}
            src={require("../images/portrait_pitbull.jpeg")}
            alt="pitbulls and parolees"
          />
          <img
            style={imageStyle}
            src={require("../images/portrait_curse.jpeg")}
            alt="curse of oak island"
          />
          <img
            style={imageStyle}
            src={require("../images/portrait_mother.jpeg")}
            alt="mother of all lies"
          />
          <img
            style={imageStyle}
            src={require("../images/lost_girls.jpeg")}
            alt="Lost Girls"
          />
          <h1 className="fontFamily fontSize" style={h1}>
            SHORT FILM
          </h1>

          <img
            src={require("../images/portrait_allsummer.png")}
            alt="all summer in a day"
            style={shortFilmImage}
          />
          <img
            src={require("../images/winter.png")}
            alt="winter chemistry"
            style={shortFilmImage}
          />
          <img
            src={require("../images/bluehour.png")}
            alt="blue hour"
            style={shortFilmImage}
          />
          <h1 className="fontFamily fontSize" style={h1}>
            DOCUMENTARY
          </h1>
          <img
            style={documentary}
            src={require("../images/no_limits.png")}
            alt="no limits"
          />
        </div>
        <div className="descriptions" style={descriptions}>
          <h1 className="fontFamily fontSize">The Deaf Talent Project</h1>
          <h2 className="role">2018</h2>
          <h2 className="role">(Original Score)</h2>
          <br></br>
          <br></br>

          <h1 className="fontFamily">Killer Kids</h1>
          <h2 className="role">2013</h2>
          <h2 className="role">(Additional Music)</h2>
          <ul style={ul} className="listItems">
            <li>Sibling Rivalry and the Warwick Slasher</li>
          </ul>
          <br></br>
          <br></br>

          <h1 className="fontFamily">Curse of Oak Island</h1>
          <h2 className="role">2014</h2>
          <h2 className="role">(Additional Music)</h2>
          <h2 className="role">Episodes:</h2>
          <ul style={ul} className="listItems">
            <li>Mystery of Smith S Cove</li>
          </ul>
          <br></br>
          <br></br>

          <h1 className="fontFamily">Pitbulls and Parolees</h1>
          <h2 className="role">2015</h2>
          <h2 className="role">(Additional Music)</h2>
          <h2 className="role">Episodes:</h2>
          <ul style={ul} className="listItems">
            <li>Clean Slate</li>
            <li>Different Mission</li>
            <li>Divine Rescue</li>
            <li>Episode 15</li>
            <li>Finally Free</li>
            <li>From the Ashes</li>
            <li>Going the Distance</li>
            <li>Golen Girl</li>
            <li>Left For Dead</li>
            <li>Mama Drama</li>
            <li>Shock to the System</li>
            <li>Soul Survivor</li>
            <li>Southern dogs in the City</li>
            <li>Unleashed</li>
            <li>Rock City Rescue</li>
            <li>One</li>
            <li>Our Gift</li>
          </ul>
          <br></br>
          <br></br>

          <h1 className="fontFamily">Nightwatch</h1>
          <h2 className="role">2016</h2>
          <h2 className="role">(Additional Music)</h2>
          <h2 className="role">Episodes:</h2>
          <ul style={ul} className="listItems">
            <li>Pride</li>
            <li>Saints and Sinners</li>
            <li>Heroes Among Us</li>
            <li>Nightwatch Mermorable Cases and Chases</li>
            <li>Guardians of the City</li>
          </ul>
          <br></br>
          <br></br>

          <h1 className="fontFamily">Rap Game</h1>
          <h2 className="role">2019</h2>
          <h2 className="role">(Additional Music)</h2>
          <h2 className="role">Episodes:</h2>
          <ul style={ul} className="listItems">
            <li>Press Got U Stressed</li>
            <li>There Can Only Be One</li>
          </ul>
          <br></br>
          <br></br>

          <h1 className="fontFamily">Mother of All Lies (TV Movie)</h1>
          <h2 className="role">2017</h2>
          <h2 className="role">(Additional Music)</h2>
          <br></br>
          <br></br>

          <h1 className="fontFamily">
            Lost Girls (Also Known as "Web Cam Girls")
          </h1>
          <h2 className="role">2019</h2>
          <h2 className="role">(Additional Music)</h2>
          <br></br>
          <br></br>

          <h1 className="fontFamily">All Summer in a Day</h1>
          <h2 className="role">2014</h2>
          <h2 className="role">(Original Score)</h2>
          <br></br>
          <br></br>

          <h1 className="fontFamily">Winter Chemistry</h1>
          <h2 className="role">2015</h2>
          <h2 className="role">(Original Score)</h2>
          <br></br>
          <br></br>

          <h1 className="fontFamily">Blue Hour</h1>
          <h2 className="role">2014</h2>
          <h2 className="role">(Original Score)</h2>
          <br></br>
          <br></br>

          <h1 className="fontFamily">No Limits for Deaf Children</h1>
          <h2 className="role">2015</h2>
          <h2 className="role">(Original Score)</h2>

          <br></br>
          <br></br>

          <h1 className="fontFamily">Roomates</h1>
          <h2 className="role">2013</h2>
          <h2 className="role">(Original Score)</h2>
        </div>
      </div>
    );
  }
}
