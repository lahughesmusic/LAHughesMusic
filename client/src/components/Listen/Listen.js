import React, { Component } from "react";
import Marquee from "./listenComponents/Marquee";
import Mp3Button from "./listenComponents/Mp3Button";
import AudioPlayer from "./listenComponents/AudioPlayer";
import "./functions.js";
import "./listen.css";
import musicData from "./music_data";


const fontStyle = {
  fontSize: '10px'
}


export default class Listen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mp3path: "https://song-253.s3.amazonaws.com/",
      mp3name: "SELECT ANY TRACK.mp3",
      mp3artist: "Lea Hughes",
      audiopath: "https://song-253.s3.amazonaws.com/8_2.mp3",
      mp3autoplay: "autoPlay",
      mp3genre: "",
      soundwaveCssClass: "soundwave-hidden",
      currentButtonId: 0,
      clickedButtonId: "",
      mp3Data: [],
      restartTimer: "no"
    };
  }

  componentWillMount() {
    var mp3title = this.state.mp3name;
    mp3title = mp3title.replace(".mp3", "");
    this.changeMP3 = this.changeMP3.bind(this);
    this.setState(state => ({
      mp3title: mp3title,
      audiopath: state.mp3path + state.mp3name,
      mp3Data: musicData.sort((a, b) => {
        var a1 = a.name.toLowerCase();
        var b1 = b.name.toLowerCase();
        return a1 < b1 ? -1 : a1 > b1 ? 1 : 0;
      })
    }));
  }


  changeMP3(currentButtonId, genre, name, artist) {
    var mp3title = name;
    var mp3name = name;
    mp3title = mp3title
      .replace(".mp3", "")
      .replaceAll("_", " ")
      .toUpperCase();

    this.setState(state => ({
      audiopath: state.mp3path + mp3name,
      mp3title: mp3title,
      mp3artist: artist,
      mp3genre: genre,
      soundwaveCssClass: "soundwave",
      currentButtonId: currentButtonId,
      clickedButtonId: currentButtonId
    }));
  }

  render() {
    return (



      <div className="audio-container" style={fontStyle}>
        <h1>{this.props.title}</h1>
        <Marquee mp3artist={this.state.mp3artist}>
          {this.state.mp3title}
        </Marquee>
        <h1>FEATURED</h1>


        <section className="mp3list-buttons changeFont">
          <Mp3Button

            changeMP3={this.changeMP3}
            clickedButtonId='Graceful_Shadows.mp3'
            mp3='Graceful_Shadows.mp3'
            artist='Lea Hughes'
            genre='original'
            audiopath='https://song-253.s3.amazonaws.com/Graceful_Shadows.mp3'
          />

          <Mp3Button

            changeMP3={this.changeMP3}
            clickedButtonId='3_6.mp3'
            mp3='3_6.mp3'
            audiopath='https://song-253.s3.amazonaws.com/3_6.mp3'

          />

          <Mp3Button

            changeMP3={this.changeMP3}
            clickedButtonId='Afterthought.mp3'
            mp3='Afterthought.mp3'
            audiopath='https://song-253.s3.amazonaws.com/Afterthought.mp3'

          />


          <Mp3Button

            changeMP3={this.changeMP3}
            clickedButtonId='Massi.mp3'
            mp3='Massi.mp3'
            audiopath='https://song-253.s3.amazonaws.com/Massi.mp3'

          />

          <Mp3Button

            changeMP3={this.changeMP3}
            clickedButtonId='Shoulders.mp3'
            mp3='Shoulders.mp3'
            audiopath='https://song-253.s3.amazonaws.com/Shoulders.mp3'


          />


          <Mp3Button

            changeMP3={this.changeMP3}
            clickedButtonId='Delta.mp3'
            mp3='Delta.mp3'
            audiopath='https://song-253.s3.amazonaws.com/Delta.mp3'

          />

          <Mp3Button

            changeMP3={this.changeMP3}
            clickedButtonId='why.mp3'
            mp3='why.mp3'
            audiopath='https://song-253.s3.amazonaws.com/why.mp3'

          />
          <Mp3Button

            changeMP3={this.changeMP3}
            clickedButtonId='Vegas.mp3'
            mp3='Vegas.mp3'
            audiopath='https://song-253.s3.amazonaws.com/Vegas.mp3'

          />


          <AudioPlayer audiopath={this.audiopath} />

          <h1>________________________________</h1>
        </section>
        <section className="mp3list-buttons changeFont">
          {this.state.mp3Data.map((mp3, index) => (
            <Mp3Button
              key={index}
              changeMP3={this.changeMP3}
              clickedButtonId={this.state.mp3name}
              mp3={mp3.name}
              artist={mp3.artist}
              genre={mp3.genre}
            />
          ))}
          <AudioPlayer audiopath={this.state.audiopath} />
        </section>

      </div >

    );
  }
}
