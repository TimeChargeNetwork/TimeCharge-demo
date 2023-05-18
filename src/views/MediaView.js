import React from "react";
import "./MediaView.css";
import PropTypes from "prop-types";
import Carousel from "react-bootstrap/Carousel";
import sketchTop from "../img/IMG_2786.JPG";
import sketchSide from "../img/IMG_2785.JPG";
import sketchBackLeft from "../img/IMG_2784.JPG";
import sketchBackRight from "../img/IMG_2783.JPG";

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

      <div className="carouselContainer">
        <Carousel variant="dark">
          {/* 2nd Img */}

          <Carousel.Item>
            <img
              className="d-block w-100"
              style={{ borderRadius: "10px" }}
              src={sketchTop}
              alt="Second slide"
            />
          </Carousel.Item>

          {/* 3rd Img */}

          <Carousel.Item>
            <img
              className="d-block w-100"
              style={{ borderRadius: "10px" }}
              src={sketchSide}
              alt="Third slide"
            />
          </Carousel.Item>

          {/* 4rd Img */}

          <Carousel.Item>
            <img
              className="d-block w-100"
              style={{ borderRadius: "10px" }}
              src={sketchBackLeft}
              alt="Third slide"
            />
          </Carousel.Item>

          {/* 3rd Img */}

          <Carousel.Item>
            <img
              className="d-block w-100"
              style={{ borderRadius: "10px" }}
              src={sketchBackRight}
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>

      <div className="youtubeContainer">
        <YoutubeEmbed embedId="oKPYPuRQJdI" />
      </div>
    </>
  );
}

export default MediaView;
