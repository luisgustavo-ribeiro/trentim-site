import React from "react";
import { HeroStyles } from "./HeroStyles";
import HeroBG from "../../assets/img/quadrados/home/hero.png";
import IHeroProps from "../../interfaces/IHeroProps";

const Hero: React.FC<IHeroProps> = (props: IHeroProps) => {
  return (
    <HeroStyles>
      <div className="container">
        <div className="detail">
          <img src={HeroBG} />
        </div>

        <div className="hero-columns">
          <div className="col left">
            {props.logo && 
              <div className="logo">
                <img src={props.logo} alt="" />
              </div>
            }
            {props.title && 
              <span className="hero-title">
                {props.title}
              </span>
            }

            <p>{props.text}</p>
          </div>
          <div className="col right">
            <img src={props.imageUrl} alt="" />
          </div>
        </div>
      </div>
    </HeroStyles>
  );
};

export default Hero;
