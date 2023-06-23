import "./FranchisingView.css";
import Expansion from "../img/ExpansionUS.png";
// import Solutions from "../img/Solutions.png";
import React from "react";

const FranchisingView = () => {
  return (
    <>
      <div className="headerContact">
        <h2 className="contactTitle">Franchising</h2>
      </div>
      <div className="expansionContainer">
        <img src={Expansion} className="expansionImg" alt="expansion" />
      </div>
      {/* <div className="solutionsContainer">
        <img src={Solutions} className="solutionsImg" alt="solutions" />
      </div> */}
    </>
  );
};

export default FranchisingView;
