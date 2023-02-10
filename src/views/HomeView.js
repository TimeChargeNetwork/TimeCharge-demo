import "./HomeView.css";
import { Link } from "react-router-dom";
import logo from "../img/Better LOGO.jpeg";
import sketch from "../img/Station Demo (3).png";
import React from "react";
import Wave from "react-wavify";

const HomeView = () => {
  return (
    <>
      {/* HEADER */}

      <header className="header">
        <img src={logo} className="logo" alt="logo" />
        <div className="secondaryContainer">
          <h2 className="secondaryTitle">What The EV Industry Needs</h2>
          <p className="and">and</p>
          <Link className="aboutButton" to="/about">
            How is TimeCharge solving this?
          </Link>
        </div>
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
      </header>

      <div className="main">
        <h2 className="mainTitle">The Future, With TimeCharge</h2>
        <p className="mainStatement">
          We are on a mission to revolitionize the electric vechicle charging
          experience.
        </p>
        <p className="secondaryStatement">Station design:</p>
      </div>

      <div>
        <img className="d-block w-100" src={sketch} alt="First slide" />
      </div>
    </>
  );
};

export default HomeView;
