import React from "react";
import "./MediaView.css";
import PropTypes from "prop-types";
import Wave from "react-wavify";
import Carousel from "react-bootstrap/Carousel";
import sketchLeft from "../img/Station Demo (6).png";
import closeUp from "../img/Station Demo (8).png";

function MediaView() {
  const YoutubeEmbed = ({ embedId }) => (
    <div className="video-responsive">
      <iframe
        src={`https://www.youtube.com/embed/${embedId}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </div>
  );

  YoutubeEmbed.propTypes = {
    embedId: PropTypes.string.isRequired,
  };

  return (
    <>
      <div className="headerMedia">
        <h2 className="MediaTitle">Media</h2>
      </div>

      <div className="youtubeContainer">
        <YoutubeEmbed embedId="oKPYPuRQJdI" />

        <Wave
          fill="white"
          paused={false}
          options={{
            height: 15,
            amplitude: 22,
            speed: 0.15,
            points: 3,
          }}
        />
      </div>

      <div className="carouselContainer">
        <Carousel variant="dark">
          {/* 2nd Img */}

          <Carousel.Item>
            <img
              className="d-block w-100"
              style={{ borderRadius: "10px" }}
              src={closeUp}
              alt="Second slide"
            />
          </Carousel.Item>

          {/* 3rd Img */}

          <Carousel.Item>
            <img
              className="d-block w-100"
              style={{ borderRadius: "10px" }}
              src={sketchLeft}
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
}

export default MediaView;
