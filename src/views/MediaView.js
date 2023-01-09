import React from "react";
import "./MediaView.css";
import PropTypes from "prop-types";


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
        embedId: PropTypes.string.isRequired
      };

  return (
    <>
    <div className='headerMedia'>
        <h2 className='MediaTitle'>
            Media
        </h2>
    </div>

    <div className="youtubeContainer">
     <YoutubeEmbed embedId="oKPYPuRQJdI" />
    </div>
    </>
  );
}


export default MediaView;