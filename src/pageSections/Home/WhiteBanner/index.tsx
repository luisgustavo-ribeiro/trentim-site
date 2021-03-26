import React from "react";
import { WhiteBannerStyles } from "./WhiteBannerStyles";

import LeftDetail from "../../../assets/img/quadrados/azul1-home.png";
import RightDetail from "../../../assets/img/quadrados/azul2-home.png";

const WhiteBanner: React.FC = () => {
  return (
    <WhiteBannerStyles id="white-banner">
      <div className="container">
        <p>
          Aliamos pessoas, tecnologias e métodos <br />
          para transformar a Gestão de Projetos das organizações
        </p>
        <div className="detail" style={{ left: "20px", bottom: "-51px" }}>
          <img src={LeftDetail} />
        </div>
        <div className="detail" style={{ right: "20px", bottom: "-101px" }}>
          <img src={RightDetail} />
        </div>
      </div>
    </WhiteBannerStyles>
  );
};

export default WhiteBanner;
