import React, { Component } from "react";
import "../listen.css";
import Helmet from "react-helmet";

export default class Marquee extends Component {
  render() {
    return (
      <div>
        <Helmet
          bodyAttributes={{
            style: "background-color: black; color: lightgrey"
          }}
        />
        <section className="music-marquee">
          <div className="headings">"{this.props.children}"</div>
        </section>
      </div>
    );
  }
}
