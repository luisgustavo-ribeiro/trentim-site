import React from "react";
import Router from "next/router";
import { Cases } from "../assets/data/cases";
import { CompanyCaseStyles } from "../styles/pages/CompanyCaseStyles";
import ContactForm from "../components/ContactForm";

import AzulHero1 from "../assets/img/quadrados/cases/azul-1-cases.png";
import AzulHero2 from "../assets/img/quadrados/cases/azul-2-cases.png";
import AzulHero3 from "../assets/img/quadrados/cases/azul-3-cases.png";
import AzulHero4 from "../assets/img/quadrados/cases/azul-4-cases.png";

import Laranja1 from "../assets/img/quadrados/home/laranja1.png";
import Laranja2 from "../assets/img/quadrados/home/laranja2.png";
import Laranja3 from "../assets/img/quadrados/home/laranja3.png";

import BrancoContato from "../assets/img/quadrados/home/branco_contato.png";

const CompanyCase: React.FC = () => {
  const [cases, setCases] = React.useState(null);
  const [dimensions, setDimensions] = React.useState({ height: 0, width: 0 });

  React.useEffect(() => {
    const { asPath } = Router;

    setCases(Cases[`${asPath.split("=")[1]}`]);

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
    <>
      {cases && (
        <CompanyCaseStyles>

          <section id="case-hero" style={{background: `linear-gradient( to right, rgba(0, 114, 198, 0.85), rgba(0, 114, 198, 0.85) ), url("${cases.hero.imageUrl}") center center no-repeat`}}>
            <div className="container">
              <div className="hero-items">
                <div className="logo">
                  <img src={cases.hero.logo} alt=""/>
                </div>
                <div className="text">
                  {cases.hero.text}
                </div>
              </div>
            </div>
          </section>

          {dimensions.width > 1024.99 &&
            <div className="container">
              <div className="sq-details" style={{top: "-100px"}} data-scroll data-scroll-position="top" data-scroll-speed="-0.2">
                <img src={AzulHero1} />
                <img src={AzulHero2} />
                <img src={AzulHero3} />
                <img src={AzulHero4} />
              </div>
            </div>
          }

          <div className="container col">
            {cases.case.map((c) => (
              <div className="case-item-container">
                {c.imagePosition === "left" && (
                  <>
                    <div className="block image">
                      <img src={c.imgUrl} alt="" />
                    </div>
                    <div className="block info">
                      <div className="title">{c.title}</div>
                      <p>{c.text}</p>
                    </div>
                  </>
                )}
                {c.imagePosition === "right" && (
                  <>
                    <div className="block info">
                      <div className="title">{c.title}</div>
                      <p>{c.text}</p>
                    </div>
                    <div className="block image">
                      <img src={c.imgUrl} alt="" />
                    </div>
                  </>
                )}
              </div>
            ))}

            <div className="used-tech">
              <div className="title">
                Tecnologias utilizadas
              </div>
              <div className="tech-icons">
                {cases.usedTech.map(i => 
                  <div className='icon-box'>
                    <i className={`ms-Icon ms-Icon--${i.icon}`}></i>
                  </div>
                )}
              </div>
              <div className="tech-names">
                {cases.usedTech.map((i, index) => 
                  <span> 
                    {index + 1 < cases.usedTech.length - 1 &&
                      `${i.techName}, `
                    }
                    {index + 1 === cases.usedTech.length - 1 &&
                      `${i.techName} `
                    }
                    {index + 1 === cases.usedTech.length &&
                      `e ${i.techName}`
                    }
                  </span>
                )}
              </div>
            </div>
          </div>

          <section id="contact">
            <div className="container">
              {dimensions.width > 1024.99 &&
                <div className="sq-details" style={{ top: "-240px" }} data-scroll data-scroll-position="top" data-scroll-speed="-0.3">
                  <div className="detail">
                    <img src={Laranja1} />
                  </div>
                  <div className="detail">
                    <img src={Laranja2} />
                  </div>
                  <div className="detail">
                    <img src={Laranja3} />
                  </div>
                </div>
              }
              
              <ContactForm />

              {dimensions.width > 1024.99 &&
                <div className="sq-details" style={{ top: "50%", right: "0", transform: "translateY(-50%)" }}>
                  <div className="detail" style={{ marginLeft: "auto" }}>
                    <img src={BrancoContato} />
                  </div>
                </div>
              }
            </div>
          </section>
        </CompanyCaseStyles>
      )}
    </>
  );
};

export default CompanyCase;
