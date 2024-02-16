import DoralSite from "../img/DoralSite.jpeg";
import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMugHot,
  faUtensils,
  faCouch,
} from "@fortawesome/free-solid-svg-icons";
import "./SitesView.css";
import React from "react";

const SitesView = () => {
  return (
    <>
      <div className="header2">
        <h2 className="sitesTitle">Sites</h2>
      </div>
      <div className="cardContainer">
        <Card
          style={{
            width: "20rem",
            backgroundColor: "rgba(0, 0, 0, 0.7)", // Increased opacity for better visibility
            backdropFilter: "blur(5px)", // Adjusted blur for subtlety
            border: "1px solid rgba(255, 255, 255, 0.2)", // Adding a subtle border
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)", // Adding a shadow for depth
            color: "white",
          }}
        >
          <Card.Img variant="top" src={`${DoralSite}`} />
          <Card.Body style={{ paddingLeft: "10px", paddingTop: "15px" }}>
            <Card.Title style={{ color: "white" }}>Mobil Doral</Card.Title>
            <Card.Link
              href="https://www.google.com/search?q=10895+nw+41st+st+doral+fl&oq=&gs_lcrp=EgZjaHJvbWUqCQgAECMYJxjqAjIJCAAQIxgnGOoCMgkIARAjGCcY6gIyCQgCECMYJxjqAjIJCAMQIxgnGOoCMgkIBBAjGCcY6gIyCQgFECMYJxjqAjIJCAYQIxgnGOoCMgkIBxAjGCcY6gLSAQo2NTk2NzdqMGo3qAIIsAIB&sourceid=chrome&ie=UTF-8"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "light blue" }}
            >
              10895 NW 41st St Doral, FL 33178
            </Card.Link>
            <div
              style={{
                display: "flex",
                justifyContent: "left",
                gap: "10px",
                marginTop: "10px",
                marginBottom: "10px",
                color: "white",
              }}
            >
              <FontAwesomeIcon icon={faMugHot} size="lg" />
              <FontAwesomeIcon icon={faUtensils} size="lg" />
              <FontAwesomeIcon icon={faCouch} size="lg" />
            </div>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default SitesView;
