import React from "react";
import { HeroStyles } from "./HeroStyles";
import HeroBG from "../../../assets/img/quadrados/hero-bg.png";
import HeroCarreirasIMG from "../../../assets/img/sections/hero-carreiras.png";

const HeroCarreiras: React.FC = () => {
  return (
    <HeroStyles>
      <div className="container">
        <div className="detail">
          <img src={HeroBG} />
        </div>

        <div className="hero-columns">
          <div className="col left">
            <span className="hero-title">
              junte-se ao time!
            </span>

            <p>sobre carreira orientada a resultados por aqui o foco em resultado é sempre prioridade, tanto nos clientes como nas nossas equipes.</p>

          </div>
          <div className="col right">
            <img src={HeroCarreirasIMG} alt="" />
          </div>
        </div>
      </div>
    </HeroStyles>
  );
};

export default HeroCarreiras;
