import "./Footer.css";
import { Link } from "react-router-dom";
import React from "react";

const Footer = () => {
  let facebookUrl = "https://www.facebook.com/TimeChargeIncNetwork";
  let twitterUrl = "https://twitter.com/TimeChargeNet";
  let instagramUrl = "https://www.instagram.com/timechargenet/";
  let linkedInUrl = "https://www.linkedin.com/company/timechargenet";

  return (
    <>
      <footer class="footer-bs">
        <div class="row">
          <div class="col-md-3 footer-brand animated fadeInLeft">
            <h2>TimeCharge</h2>
          </div>
          <div class="col-md-4 footer-nav animated fadeInUp">
            <div class="col-md-6">
              <ul class="list">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/sites">Sites</Link>
                </li>
                <li>
                  <Link to="/media">Media</Link>
                </li>
                <li>
                  <Link to="/invest">Invest</Link>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-md-2 footer-social animated fadeInDown">
            <ul>
              <li>
                <a href={linkedInUrl} target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href={twitterUrl} target="_blank" rel="noopener noreferrer">
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a href={facebookUrl} target="_blank" rel="noopener noreferrer">
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
