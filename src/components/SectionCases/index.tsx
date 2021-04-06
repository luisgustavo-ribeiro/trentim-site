import React from "react";
import ISectionCasesProps from "../../interfaces/ISectionCasesProps";
import { SectionCasesStyles } from "./SectionCasesStyles";

import VerdeEscuro1 from "../../assets/img/quadrados/cases/verde-escuro-1-cases.png";
import VerdeEscuro2 from "../../assets/img/quadrados/cases/verde-escuro-2-cases.png";
import VerdeClaro1 from "../../assets/img/quadrados/cases/verde-claro-1-cases.png";
import VerdeClaro2 from "../../assets/img/quadrados/cases/verde-claro-2-cases.png";
import Amarelo1 from "../../assets/img/quadrados/cases/amarelo-1-cases.png";
import Amarelo2 from "../../assets/img/quadrados/cases/amarelo-2-cases.png";
import Amarelo3 from "../../assets/img/quadrados/cases/amarelo-3-cases.png";
import Vermelho1 from "../../assets/img/quadrados/cases/vermelho-1-cases.png" ;
import Vermelho2 from "../../assets/img/quadrados/cases/vermelho-2-cases.png" ;
import Vermelho3 from "../../assets/img/quadrados/cases/vermelho-3-cases.png" ;

const SectionCases: React.FC<ISectionCasesProps> = (props: ISectionCasesProps) => {
  const [hover, setHover] = React.useState<boolean>(false);

  return (
    <SectionCasesStyles style={{ backgroundColor: props.item.bgColor }}>
      {props.screenWidth < 768.99 && (
        <div className="container col">
          <div className="case-mobile">
            <div className="logo">
              <img src={props.item.logoUrl} />
            </div>
            <div className="image">
              <img src={props.item.imgUrl} />
            </div>
            <span className="title" style={{ color: props.item.titleColor }}>
              {props.item.title}
            </span>
            <p className="text" style={{ color: props.item.textColor }}>
              {props.item.text}
            </p>
            <a
              href={`/case?=${props.item.caseName}`}
              className="btn-cases"
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
              style={
                !hover
                  ? {
                      color: props.item.titleColor,
                      borderColor: props.item.titleColor,
                    }
                  : {
                      color:
                        props.item.titleColor !== "#FFF"
                          ? "#FFF"
                          : props.item.bgColor,
                      borderColor: props.item.titleColor,
                      backgroundColor: props.item.titleColor,
                    }
              }
              >
              Ver case
            </a>
          </div>
        </div>
      )}
      {props.screenWidth > 768.99 && (
        <div className="container">
          {props.item.imgAlignment === "left" && (
            <div className="columns img-left">
              <div className="col left">
                <div className="block image">
                  <img src={props.item.imgUrl} />
                </div>
              </div>
              <div className="col right">
                <div className="block info">
                  <div className="logo-container">
                    <img src={props.item.logoUrl} />
                  </div>
                  <span
                    className="title"
                    style={{ color: props.item.titleColor }}
                  >
                    {props.item.title}
                  </span>
                  <p className="text" style={{ color: props.item.textColor }}>
                    {props.item.text}
                  </p>
                  <a
                    className="btn-cases"
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}
                    style={
                      !hover
                        ? {
                            color: props.item.titleColor,
                            borderColor: props.item.titleColor,
                          }
                        : {
                            color:
                              props.item.titleColor !== "#FFF"
                                ? "#FFF"
                                : props.item.bgColor,
                            borderColor: props.item.titleColor,
                            backgroundColor: props.item.titleColor,
                          }
                    }
                    href={`/case?=${props.item.caseName}`}
                  >
                    Ver case
                  </a>
                </div>
              </div>
            </div>
          )}
          {props.item.imgAlignment === "right" && (
            <div className="columns img-right">
              <div className="col left">
                <div className="block info">
                  <div className="logo-container">
                    <img src={props.item.logoUrl} />
                  </div>
                  <span
                    className="title"
                    style={{ color: props.item.titleColor }}
                  >
                    {props.item.title}
                  </span>
                  <p className="text" style={{ color: props.item.textColor }}>
                    {props.item.text}
                  </p>
                  <a
                    className="btn-cases"
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}
                    style={
                      !hover
                        ? {
                            color: props.item.titleColor,
                            borderColor: props.item.titleColor,
                          }
                        : {
                            color:
                              props.item.titleColor !== "#FFF"
                                ? "#FFF"
                                : props.item.bgColor,
                            borderColor: props.item.titleColor,
                            backgroundColor: props.item.titleColor,
                          }
                    }
                    href={`/case?=${props.item.caseName}`}
                  >
                    Ver case
                  </a>
                </div>
              </div>
              <div className="col right">
                <div className="block image">
                  <img src={props.item.imgUrl} />
                </div>
              </div>
            </div>
          )}
          {props.index === 0 && props.screenWidth > 1024.99 &&
            <div className="sq-details" style={{bottom: '-110px'}} data-scroll data-scroll-position="top" data-scroll-speed="-0.1">
              <img src={VerdeEscuro1} alt=""/>
              <img src={VerdeEscuro2} alt=""/>
            </div>
          }
          {props.index === 1 && props.screenWidth > 1024.99 &&
            <div className="sq-details" style={{bottom: '-70px'}} data-scroll data-scroll-position="top" data-scroll-speed="-0.2">
              <img src={VerdeClaro1} alt=""/>
              <img src={VerdeClaro2} alt=""/>
            </div>
          }
          {props.index === 2 && props.screenWidth > 1024.99 &&
            <div className="sq-details" style={{bottom: '-70px'}} data-scroll data-scroll-position="top" data-scroll-speed="-0.2">
              <img src={Amarelo1} alt=""style={{marginBottom: "50px"}}/>
              <img src={Amarelo2} alt=""/>
              <img src={Amarelo3} alt="" style={{marginTop: "50px"}}/>
            </div>
          }
          {props.index === 3 && props.screenWidth > 1024.99 &&
            <div className="sq-details" style={{bottom: '-100px'}} data-scroll data-scroll-position="top" data-scroll-speed="-0.1">
              <img src={Vermelho1} alt=""/>
              <img src={Vermelho2} alt=""/>
              <img src={Vermelho3} alt=""/>
            </div>
          }
        </div>
      )}
    </SectionCasesStyles>
  );
};

export default SectionCases;
