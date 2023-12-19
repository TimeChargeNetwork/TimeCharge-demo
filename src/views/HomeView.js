import "./HomeView.css";
import logo from "../img/Better LOGO.jpeg";
import MainVideo from "../img/MainLogoVid.mp4";
import FriendlyRender from "../img/MainRender.jpg";
import React from "react";
import "./AboutView.css";

const HomeView = () => {
  return (
    <>
      {/* HEADER */}

      <header className="header">
        <video src={MainVideo} autoPlay loop muted />
        <img src={logo} className="logo" alt="logo" />
      </header>

      {/* ABOUT */}

      {/* whatIsTimeCharge */}
      <div className="whatIsTC-container">
        <div className="whatIsTC-title">
          <h2 className="whatIsTC-title-text">What Is TimeCharge?</h2>
        </div>
        <div className="whatIsTC-P">
          <p>
            TimeCharge provides electric vehicle (EV) fast charging solutions
            and is the first in the industry to offer franchising opportunities
            for DC fast charging stations. TimeCharge's main focus is to provide
            EV drivers with reliable, safe, and stress-free charging experiences
          </p>
        </div>
      </div>

      {/* Milestone */}
      <div className="milestone-container">
        <div className="milestone-title">
          <h2 className="milestone-text">Milestone</h2>
        </div>
        <div className="milestone-P">
          <p>
            We are committed to promoting sustainable transportation and are
            excited to be a part of the growing EV community.
            <br />
            <br />
            TimeCharge bridges the gap between the EV owners' charging
            expectations and the faced reality of frustration, inconvenience,
            and even safety concerns.
          </p>
        </div>
        <img className="d-block w-100" src={FriendlyRender} alt="First slide" />
      </div>

      {/* battery */}
      <div className="batteryContainer">
        <div className="battery">
          <div className="top"></div>
          <div className="charge1"></div>
          <div className="charge2"></div>
          <div className="charge3"></div>
        </div>
        <div className="sloganContainer">
          <h3 className="sloganText">Charging the Future</h3>
        </div>
      </div>
    </>
  );
};

export default HomeView;
