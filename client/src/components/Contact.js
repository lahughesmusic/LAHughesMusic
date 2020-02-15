import React, { Component } from "react";
import { Helmet } from "react-helmet";

const font = {
  marginTop: '150px',
  fontSize: '15px',
  fontFamily: 'helvetica thin',
  color: 'white',
  marginLeft: '30px'

}

class Contact extends Component {


  render() {
    return (
      <div className="App" style={font}>
        <Helmet bodyAttributes={{ style: "background-color: black" }} />
        <h1>Email: the.musical.dev@gmail.com</h1>


      </div>
    );
  }
}
export default Contact;
