import "./HomeView.css";
import logo from "../img/Better LOGO.jpeg";
import MainRender from "../img/MainRender.jpg";
import FriendlyRender from "../img/FriendlyRenderSide.jpg";
import React from "react";
import "./AboutView.css";
// import charger from "../img/TC CHARGER.png";
// import chargerBack from "../img/TRIVIUM CHARGER BACK DESIGN 1.png";
// import Wave from "react-wavify";

const HomeView = () => {
  return (
    <>
      {/* HEADER */}

      <header className="header">
        <img src={logo} className="logo" alt="logo" />
        <img className="d-block w-100" src={FriendlyRender} alt="First slide" />
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
        <img className="d-block w-100" src={MainRender} alt="First slide" />
      </div>

      {/* CHARGERS */}

      {/* <div className="charger-title">
        <h2 className="charger-text">Our Chargers</h2>
      </div>
      <div className="chargerContainer">
        <img src={charger} className="chargerFront" alt="chargerFront" />
        <img src={chargerBack} className="chargerBack" alt="chargerBack" />
      </div> */}

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
