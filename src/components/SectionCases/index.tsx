import React from "react";
import ISectionCasesProps from "../../interfaces/ISectionCasesProps";
import { SectionCasesStyles } from "./SectionCasesStyles";

const SectionCases: React.FC<ISectionCasesProps> = (
  props: ISectionCasesProps
) => {
  const [hover, setHover] = React.useState<boolean>(false);

  const [dimensions, setDimensions] = React.useState({ height: 0, width: 0 });

  React.useEffect(() => {
    setDimensions({
      height: window.innerHeight,
      width: window.innerWidth,
    });

    function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    }

    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <SectionCasesStyles style={{ backgroundColor: props.item.bgColor }}>
      {dimensions.width < 768.99 && (
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
      {dimensions.width > 768.99 && (
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
        </div>
      )}
    </SectionCasesStyles>
  );
};

export default SectionCases;
