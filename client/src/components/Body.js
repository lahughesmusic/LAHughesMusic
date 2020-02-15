import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './media.css'
import { Helmet } from 'react-helmet'




export default class Body extends Component {

  render() {



    const fiftyFifty = {
      width: '50%',
      marginTop: "0px",
      height: "300px",
    }

    const fifteen = {
      width: '15%',
      marginTop: "100px",
      height: "300px"
    }
    const fifty = {
      width: '50%',
      marginTop: "0px",
      height: "300px"
    }
    const twentyFive = {
      width: '25%',
      marginTop: "0px",
      height: "300px"
    }

    const seventy = {
      marginTop: "100px",
      width: '70%',
      height: "300px"
    }

    const width = {
      width: '25%',
      height: 'auto',
      margin: '150px 37.5% auto 37.5%'


    }

    const div = {
      backgroundColor: 'black',
      height: '500.25px'
    }

    return (

      <div className="body">
        <Helmet bodyAttributes={{ style: "background-color: black" }} />
        <img
          className='resize fifteen'
          alt="Mother of all Lies"
          style={fifteen}
          src={require("../images/mother.png")}
        />
        <img
          className="resize fifteen"
          alt="Blue Hour"
          style={fifteen}
          src={require("../images/bluehour.png")}
        />
        <img
          className="resize seventy"
          alt="Curse of Oak Island"
          style={seventy}
          src={require("../images/curse.png")}
        />
        <img
          className="resize twentyFive"
          alt="Pitbulls and Parolees"
          style={twentyFive}
          src={require("../images/pitbulls.png")}
        />
        <img
          className="resize fifty"
          alt="Killer Kids"
          style={fifty}
          src={require("../images/killerKids.png")}
        />
        <img
          className="resize twentyFive"
          alt="Night Watch"
          style={twentyFive}
          src={require("../images/nightwatch.png")}
        />
        <img
          className="resize fiftyfifty"
          alt="All Summer in a Day"
          style={fiftyFifty}
          src={require("../images/allSummer.png")}
        />
        <img
          className="resize fiftyfifty"
          alt="Winter Chemistry"
          style={fiftyFifty}
          src={require("../images/winter.png")}
        />
      </div>

      // <div style={width} id="carouselExampleControls" className="carousel slide" data-ride="carousel">
      //   <div className="carousel-inner">
      //     <div style={div} className="carousel-item active">
      //       <img className="d-block w-100" src={require("../images/mother.png")} alt="First slide" />
      //     </div>
      //     <div style={div} className="carousel-item">
      //       <img className="d-block w-100" src={require("../images/bluehour.png")} alt="Second slide" />
      //     </div>
      //     <div style={div} className="carousel-item">
      //       <img className="d-block w-100" src={require("../images/curse3.jpeg")} alt="Third slide" />
      //     </div>
      //     <div style={div} className="carousel-item">
      //       <img className="d-block w-100" src={require("../images/pitbulls3.jpeg")} alt="fourth slide" />
      //     </div>
      //     <div style={div} className="carousel-item">
      //       <img className="d-block w-100" src={require("../images/killer3.jpeg")} alt="fifth slide" />
      //     </div>
      //     <div style={div} className="carousel-item">
      //       <img className="d-block w-100" src={require("../images/nightwatch.png")} alt="Sixth slide" />
      //     </div>



      //   </div>
      //   <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
      //     <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      //     <span className="sr-only">Previous</span>
      //   </a>
      //   <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
      //     <span className="carousel-control-next-icon" aria-hidden="true"></span>
      //     <span className="sr-only">Next</span>
      //   </a>
      // </div>
    );
  }
}
