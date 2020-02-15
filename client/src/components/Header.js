import React from "react";
import { Link } from "react-router-dom";
import './media.css'



const fontGradient = {
  marginTop: "8px",
  marginLeft: "10px",
  fontSize: "40px",
  background: "-webkit-linear-gradient(darkgray, white, black)",
  webkitBackgroundClip: "text",
  webkitTextFillColor: "transparent"
};

const Header = () => {



  return (
    <div className="header navbar-wrapper">
      {/* LAHUGHESMUSIC */}
      <nav>
        <Link className="navbar-brand" to="#">
          <div className="lahughesmusic-headerfont">
            <h2 style={fontGradient}>LAHughesMusic</h2>
          </div>
          {/* <div className="left"> */}
          <Link className="nav-item left navbar nav-link active" to="/">
            Home <span className="sr-only">(current)</span>
          </Link>
          <Link className="nav-item nav-link" to="/credits">
            Credits
            </Link>
          <Link className="nav-item nav-link" to="/listen">
            Listen
            </Link>
          <Link className="nav-item nav-link" to="/watch">
            Watch
            </Link>

          <Link className="nav-item nav-link" to="/about">
            About
            </Link>
          <Link className="nav-item nav-link" to="/contact">
            Contact
            </Link>

          {/* </div> */}
        </Link>

      </nav>
    </div>
  );
}




export default Header;