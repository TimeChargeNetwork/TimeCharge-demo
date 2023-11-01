import "./FranchisingView.css";
import Expansion from "../img/ExpansionUS.png";
import Solutions from "../img/Solutions.png";
import React from "react";
import Form from "react-bootstrap/Form";

const FranchisingView = () => {
  return (
    <>
      <div className="headerFranchising">
        <h2 className="franchisingTitle">Franchising?</h2>
      </div>
      <div className="franchisingBody-container">
        <div className="franchisingBody-title">
          <h2 className="franchisingBody-title-text">Yes, Franchising...</h2>
        </div>
        <div className="franchisingBody-P">
          <p>
            We are taking a revolutionary approach to expanding our network by
            offering a game-changing opportunity for businesses and
            entrepreneurs to easily own and operate their own EV fast charging
            stations.
          </p>
        </div>
      </div>
      <div className="expansionContainer">
        <img src={Expansion} className="expansionImg" alt="expansion" />
      </div>
      <div className="franchisingBody-container">
        <div className="franchisingBody-P">
          <p>
            Our simplified franchising process removes the complexities and high
            costs traditionally associated with setting up charging stations.
            With our comprehensive support, including site selection assistance,
            equipment installation guidance, and ongoing training, franchisees
            can seamlessly enter the EV charging market like never before.
          </p>
        </div>
      </div>
      <div className="solutionsContainer">
        <img src={Solutions} className="solutionsImg" alt="solutions" />
      </div>
      <div className="franchisingBody-container">
        <div className="franchisingBody-P">
          <p>
            By joining TimeCharge, franchisees become part of a pioneering
            network committed to sustainable transportation solutions. As EV
            adoption soars, the need for reliable charging infrastructure is
            greater than ever. By embracing the TimeCharge opportunity,
            entrepreneurs contribute to a greener future while tapping into the
            vast potential of the booming EV market. <br /> <br />
            Experience the future of franchising with TimeCharge and be at the
            forefront of the EV fast charging revolution. Together, let's pave
            the way towards a cleaner, more sustainable tomorrow.
          </p>
        </div>
        <div className="formConainer">
          <form
            className="form"
            action="https://getform.io/f/8790d4a9-53c9-4c35-9076-863ef0702a76"
            method="POST"
          >
            <h2 className="formTitle">Contact Sales</h2>
            <input name="name" placeholder="Full Name*" type="text" required />
            <input name="email" placeholder="E-Mail*" type="text" required />
            <input name="companyOptional" placeholder="Company" type="text" />
            <input
              name="number"
              placeholder="Phone Number*"
              type="tel"
              required
            />
            <input type="text" placeholder="Message" name="message"></input>
            <Form.Text className="text-muted">
              * We'll never share your information
            </Form.Text>
            <br />
            <button type="submit">Submit</button>
          </form>
          <div className="disclaimer-div">
            <p className="disclaimer-P">
              Disclaimer*
              <br />
              <br />
              This web site and the franchise sales information on this site do
              not constitute an offer to sell a franchise or license. the offer
              of a franchise can only be made through the delivery of a
              franchise disclosure document. certain states require that we
              register the franchise disclosure document in those states. the
              communications on this web site are not directed by us to the
              residents of any of those states. moreover, we will not offer or
              sell franchises in those states until we have registered the
              franchise (or obtained an applicable exemption from registration)
              and delivered the franchise disclosure document to the prospective
              franchisee in compliance with applicable law.
              <br />
              <br />
              Currently, the following states regulate the offer and sale of
              franchises: California, Hawaii, Illinois, Indiana, Maryland,
              Michigan, Minnesota, New York, North Dakota, Oregon, Rhode Island,
              South Dakota, Virginia, Washington, and Wisconsin. If you are a
              resident of one of these states or countries, we will not offer
              you a franchise unless and until we have complied with applicable
              pre-sale registration and disclosure requirements in your
              jurisdiction.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default FranchisingView;
