import React from "react";
import { MSPartnershipStyle } from "./MSPartnershipStyle";

const MSPartnership:React.FC = () => {
  return (
    <MSPartnershipStyle id="ms-partnership">
      <div className="container">
        <div className="image-block">
          <img
            src={`https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`}
          />
        </div>
        <div className="partner-block">
          <div className="partner-block-info">
            <h2 className="info-title">
              Microsoft
              <br />
              Partner
            </h2>

            <ul className="info-list">
              <li>Gold lorem ipsum</li>
              <li>Gold lorem ipsum</li>
              <li>Silver lorem ipsum</li>
            </ul>
          </div>
        </div>
      </div>
    </MSPartnershipStyle>
  );
};

export default MSPartnership;
