import "./AboutView.css";
import { Link } from "react-router-dom";
import charger from "../img/TC CHARGER.png";
import chargerBack from "../img/TRIVIUM CHARGER BACK DESIGN 1.png";
import React from "react";
import Wave from "react-wavify";

const AboutView = () => {
  return (
    <>
      <div className="headerAbout">
        <h2 className="AboutTitle">About</h2>
      </div>
      <div className="batteryContainer">
        <div className="battery">
          <div className="top"></div>
          <div className="charge1"></div>
          <div className="charge2"></div>
          <div className="charge3"></div>
        </div>
      </div>
      <div className="whatIsTC-container">
        <div className="whatIsTC-title">
          <h2 className="whatIsTC-title-text">What Is TimeCharge?</h2>
        </div>
        <div className="whatIsTC-P">
          <p>
            TimeCharge is solving and building the future of Electric Vehicles
            fast charging stations accross the U.S.
          </p>
          <p>
            Miami, FL will be our kickstart <Link to="/sites"> location </Link>.
            As our company grows, locations will expand with it. Our mission is
            to scale accross the U.S. Bringing better quality, reliability and
            services to the EV fast charging industry.
          </p>
        </div>
      </div>
      <div className="stage-container">
        <div className="stage-title">
          <h2 className="stage-text">Our Stage?</h2>
        </div>
        <div className="stage-P">
          <p>
            Our battery is charged to make the charging experience we all know,
            better.
          </p>
          <p>
            Our strategic investments are making those efforts become reality.
            By building perfected charing stations that makes the entire
            experience reliable, safe and comfortable, and help our planet have
            the green future we strive for.
          </p>
          <p>
            If you are interested to be part of this exciting and
            revolutionizing startup. Check out our{" "}
            <Link to="/invest"> Invest </Link> page.
          </p>
        </div>
        <Wave
          fill="white"
          paused={false}
          options={{
            height: 30,
            amplitude: 22,
            speed: 0.15,
            points: 3,
          }}
        />
      </div>
      <div className="charger-title">
        <h2 className="charger-text">Our Chargers</h2>
      </div>
      <div className="chargerContainer">
        <img src={charger} className="chargerFront" alt="chargerFront" />
        <img src={chargerBack} className="chargerBack" alt="chargerBack" />
      </div>
      <div className="chargers-p">
        <p>
          TimeCharge chargers will be aquired from our great partner TRITIUM.
          Our level 3 fast chargers will be capabe of producing 150kw per
          charger and up to 75kw for two cars charging at the same time!
        </p>
        <br />
        <p>
          Using TRITIUM chargers not only makes TimeCharge provide charging time
          to be as fast as possible, but also maintain an incredibly reliable
          service.
        </p>
      </div>
    </>
  );
};

export default AboutView;
