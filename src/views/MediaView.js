// TO ADD SOCIAL MEDIA REACH COMMENTED UNDERNEATH

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

// import "./ContactView.css";
// import React from "react";

// const ContactView = () => {
//   let facebookUrl = "https://www.facebook.com/TimeChargeIncNetwork";
//   let twitterUrl = "https://twitter.com/TimeChargeNet";
//   let instagramUrl = "https://www.instagram.com/timechargenet/";
//   let linkedInUrl = "https://www.linkedin.com/company/timechargenet/";
//   let youTubeUrl = "https://www.youtube.com/@timecharge/";

//   return (
//     <>
//       <div className="headerContact">
//         <h2 className="contactTitle">Reach Us</h2>
//       </div>
//       <div className="socialMediaContainer">
//         <div className="socialMedia-title">
//           <h2 className="socialMedia-text">Social Media</h2>
//         </div>
//         <link
//           rel="stylesheet"
//           href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
//         ></link>
//         <a
//           href={facebookUrl}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="fa fa-facebook"
//         >
//           {" "}
//         </a>
//         <a
//           href={instagramUrl}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="fa fa-instagram"
//         >
//           {" "}
//         </a>
//         <a
//           href={twitterUrl}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="fa fa-twitter"
//         >
//           {" "}
//         </a>
//         <a
//           href={youTubeUrl}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="fa fa-youtube"
//         >
//           {" "}
//         </a>
//         <a
//           href={linkedInUrl}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="fa fa-linkedin"
//         >
//           {" "}
//         </a>
//       </div>
//     </>
//   );
// };

// export default ContactView;
