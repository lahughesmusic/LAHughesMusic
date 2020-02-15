import React from "react";
import { BigPlayButton, LoadingSpinner, Player, ControlBar } from "video-react";
import "../../../node_modules/video-react/dist/video-react.css";
import Helmet from "react-helmet";
import './watch.css'

export default Watch => {
  const style = {
    marginTop: "100px",
    fontFamily: "helvetica thin",
    fontSize: '15px'
  };
  const float = {
    float: "left",
    marginTop: "50px",
    marginLeft: "10%"

  };

  return (
    <div style={style}>
      <div style={float}>
        <Helmet bodyAttributes={{ style: "background: black" }} />
        <h1 className="title">Blue Hour</h1>
        <h2 className="subtitle">(original score)</h2>
        <Player
          playsInline
          fluid={false}
          width={350}
          height={250}
          poster="https://song-253.s3.amazonaws.com/image/bluehourLandscape.png"
          src="https://song-253.s3.amazonaws.com/video/BlueHour.mp4"
        >
          <BigPlayButton position="center" />
          <LoadingSpinner />
          <ControlBar width={500} />
        </Player>
      </div>

      <div style={float}>
        <h1 className="title">Lifetime's "Mother of All Lies"</h1>
        <h2 className="subtitle">(original song)</h2>
        <Player
          playsInline
          fluid={false}
          width={350}
          height={250}
          poster="https://song-253.s3.amazonaws.com/image/motherLandscape.png"
          src="https://song-253.s3.amazonaws.com/video/MotherOfAllLies.mp4"
        >
          <BigPlayButton position="center" />
          <LoadingSpinner />
          <ControlBar width={500} />
        </Player>
      </div>

      <div style={float}>
        <h1 className="title">All Summer in a Day</h1>
        <h2 className="subtitle">(original score)</h2>
        <Player
          playsInline
          fluid={false}
          width={350}
          height={250}
          poster="https://song-253.s3.amazonaws.com/image/allSummer.png"
          src="https://song-253.s3.amazonaws.com/video/All+Summer+In+a+Day.mp4"
        >
          <BigPlayButton position="center" />
          <LoadingSpinner />
          <ControlBar width={500} />
        </Player>
      </div>
      <div style={float}>
        <h1 className="title">Winter Chemistry</h1>
        <h2 className="subtitle">(original score)</h2>
        <Player
          playsInline
          fluid={false}
          width={350}
          height={250}
          poster="https://song-253.s3.amazonaws.com/image/winter.png"
          src="https://song-253.s3.amazonaws.com/video/WinterChemistry.mp4"
        >
          <BigPlayButton position="center" />
          <LoadingSpinner />
          <ControlBar width={500} />
        </Player>
      </div>
      <div style={float}>
        <h1 className="title">No Limits Documentary</h1>
        <h2 className="subtitle">(original score)</h2>
        <Player
          playsInline
          fluid={false}
          width={350}
          height={250}
          poster="https://song-253.s3.amazonaws.com/image/no_limits.png"
          src="https://song-253.s3.amazonaws.com/video/NL_mov.mp4"
        >
          <BigPlayButton position="center" />
          <LoadingSpinner />
          <ControlBar width={500} />
        </Player>
      </div>
      <div style={float}>
        <h1 className="title">Deaf Talent PSA</h1>
        <h2 className="subtitle">(original song)</h2>
        <Player
          playsInline
          fluid={false}
          width={350}
          height={250}
          poster="https://song-253.s3.amazonaws.com/image/deaf_talent.jpeg"
          src="https://song-253.s3.amazonaws.com/video/Deaf+Talent+PSA+-+CAPTIONED.mp4"
        >
          <BigPlayButton position="center" />
          <LoadingSpinner />
          <ControlBar width={500} />
        </Player>
      </div>
      <div style={float}>
        <h1 className="title">Mock Trailer with Original Music</h1>
        <h2 className="subtitle">(original song)</h2>
        <Player
          playsInline
          fluid={false}
          width={350}
          height={250}
          poster="https://song-253.s3.amazonaws.com/image/gracefulShadows.jpeg"
          src="https://song-253.s3.amazonaws.com/video/GracefulShadows.mp4"
        >
          <BigPlayButton position="center" />
          <LoadingSpinner />
          <ControlBar width={350} />
        </Player>
      </div>

      <div style={float}>
        <h1 className="title">Mock Apple Commercial with Original Music</h1>
        <h2 className="subtitle">(original song / editing)</h2>
        <Player
          playsInline
          fluid={false}
          width={350}
          height={250}
          poster="https://song-253.s3.amazonaws.com/image/apple.jpeg"
          src="https://song-253.s3.amazonaws.com/video/MockApple.mp4"
        >
          <BigPlayButton position="center" />
          <LoadingSpinner />
          <ControlBar width={500} />
        </Player>
      </div>
      <div style={float}>
        <h1 className="title">Blanket Video</h1>
        <h2 className="subtitle">(Original Everything / Just Cause)</h2>
        <Player
          playsInline
          fluid={false}
          width={500}
          height={250}
          src="https://song-253.s3.amazonaws.com/video/BlanketVideo.mp4"
        >
          <BigPlayButton position="center" />
          <LoadingSpinner />
          <ControlBar width={500} />
        </Player>
      </div>
    </div>
  );
};
