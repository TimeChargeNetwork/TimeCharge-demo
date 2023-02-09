import "./ContactView.css";
import React from "react";

const ContactView = () => {
  let facebookUrl = "https://www.facebook.com/TimeChargeIncNetwork";
  let twitterUrl = "https://twitter.com/TimeChargeNet";
  let instagramUrl = "https://www.instagram.com/timechargenet/";
  let linkedInUrl = "https://www.linkedin.com/company/timechargenet/";
  let youTubeUrl = "https://www.youtube.com/@timecharge/";

  return (
    <>
      <div className="headerContact">
        <h2 className="contactTitle">Reach Us</h2>
      </div>
      <div className="socialMediaContainer">
        <div className="socialMedia-title">
          <h2 className="socialMedia-text">Social Media</h2>
        </div>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        ></link>
        <a
          href={facebookUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="fa fa-facebook"
        >
          {" "}
        </a>
        <a
          href={instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="fa fa-instagram"
        >
          {" "}
        </a>
        <a
          href={twitterUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="fa fa-twitter"
        >
          {" "}
        </a>
        <a
          href={youTubeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="fa fa-youtube"
        >
          {" "}
        </a>
        <a
          href={linkedInUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="fa fa-linkedin"
        >
          {" "}
        </a>
      </div>
    </>
  );
};

export default ContactView;
