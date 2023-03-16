import "./HomeView.css";
import logo from "../img/Better LOGO.jpeg";
import sketch from "../img/IMG_2787.JPG";
import React from "react";
import "./AboutView.css";
import charger from "../img/TC CHARGER.png";
import chargerBack from "../img/TRIVIUM CHARGER BACK DESIGN 1.png";
// import Wave from "react-wavify";

const HomeView = () => {
  return (
    <>
      {/* HEADER */}

      <header className="header">
        <img src={logo} className="logo" alt="logo" />
        <div className="secondaryContainer">
          <img className="d-block w-100" src={sketch} alt="First slide" />
          {/* <h2 className="secondaryTitle">What The EV Industry Needs</h2>
          <p className="and">and</p>
          <Link className="aboutButton" to="/about">
            How is TimeCharge solving this?
          </Link> */}
        </div>
      </header>

      {/* ABOUT */}

      {/* whatIsTimeCharge */}
      <div className="whatIsTC-container">
        <div className="whatIsTC-title">
          <h2 className="whatIsTC-title-text">What Is TimeCharge?</h2>
        </div>
        <div className="whatIsTC-P">
          <p>
            TimeCharge is building electric vehicle (EV) fast charging stations
            that provide a comfortable and safe experience for EV drivers.
          </p>
        </div>
      </div>

      {/* stations */}
      <div className="stage-container">
        <div className="stage-title">
          <h2 className="stage-text">Our Stations</h2>
        </div>
        <div className="stage-P">
          <p>TimeCharge charging stations feature:</p>
          <ul style={{ listStyle: "square" }}>
            <li>
              Waiting lounges, where you can relax and get some work done while
              your car charges
            </li>
            <br />
            <li>A Reliable App</li>
            <br />
            <li>
              Robust charging architecture to ensure a smooth charging process
            </li>
            <br />
            <li>In-house restrooms</li>
          </ul>
        </div>

        {/* milestone */}
        <div className="milestone-container">
          <div className="milestone-title">
            <h2 className="milestone-title-text">Milestone</h2>
          </div>
          <div className="milestone-P">
            <p>
              We are committed to promoting sustainable transportation and are
              excited to be a part of the growing EV community.
            </p>
          </div>
        </div>
        {/* <Wave
          fill="white"
          paused={false}
          options={{
            height: 30,
            amplitude: 22,
            speed: 0.15,
            points: 3,
          }}
        /> */}
      </div>

      {/* CHARGERS */}

      <div className="charger-title">
        <h2 className="charger-text">Our Chargers</h2>
      </div>
      <div className="chargerContainer">
        <img src={charger} className="chargerFront" alt="chargerFront" />
        <img src={chargerBack} className="chargerBack" alt="chargerBack" />
      </div>
      <div className="chargers-container">
        <h2 className="chargers-p">Tritium PKM 150Kw</h2>
      </div>

      {/* battery */}
      <div className="batteryContainer">
        <div className="battery">
          <div className="top"></div>
          <div className="charge1"></div>
          <div className="charge2"></div>
          <div className="charge3"></div>
        </div>
      </div>
    </>
  );
};

export default HomeView;
