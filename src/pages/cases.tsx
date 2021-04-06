import React from "react";
import { CasesPageData } from "../assets/data/casesPage";
import Hero from "../components/Hero";
import SectionCases from "../components/SectionCases";
import CasesHero from "../assets/img/pages/cases/hero-cases.jpg";

import AzulHero1 from "../assets/img/quadrados/cases/azul-1-cases.png";
import AzulHero2 from "../assets/img/quadrados/cases/azul-2-cases.png";
import AzulHero3 from "../assets/img/quadrados/cases/azul-3-cases.png";
import AzulHero4 from "../assets/img/quadrados/cases/azul-4-cases.png";

const Cases = () => {

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
    <>
      <Hero
        imageUrl={CasesHero}
        title="Casos de sucesso:"
        imagePositionX="center"
        imagePositionY="center"
        subtitle="integrando tecnologia e gestão de projetos"
        text="Descubra como temos transformado a gestão de projetos em empresas líderes no Brasil, e saiba como nossos clientes têm obtido grandes resultados através de nossas soluções."
      />
      
      {dimensions.width > 1024.99 &&
        <div className="container">
          <div className="sq-details" style={{top: "-15px"}} data-scroll data-scroll-position="top" data-scroll-speed="-0.2">
            <img src={AzulHero1} />
            <img src={AzulHero2} />
            <img src={AzulHero3} />
            <img src={AzulHero4} />
          </div>
        </div>
      }

      {CasesPageData.map((item, index) => (
        <SectionCases key={index} item={item} index={index} screenWidth={dimensions.width}/>
      ))}
    </>
  );
};

export default Cases;
