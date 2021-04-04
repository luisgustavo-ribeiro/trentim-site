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

                {props.subtitle && 
                  <div className="subtitle">
                    {props.subtitle}
                  </div>
                }
              </span>

            }

            <p>
              {props.text}
            </p>

          </div>
          <div className="col right">
            <img src={props.imageUrl} alt="" style={{ objectPosition: `${props.imagePositionY ? props.imagePositionY : "center"} ${props.imagePositionX ? props.imagePositionX : "right"}`}}/>
          </div>
        </div>
      </div>
    </HeroStyles>
  );
};

export default Hero;
