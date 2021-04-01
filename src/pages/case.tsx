import React from "react";
import Router from "next/router";
import { Cases } from "../assets/data/cases";
import { CompanyCaseStyles } from "../styles/pages/CompanyCaseStyles";
import Hero from "../components/Hero";

const CompanyCase: React.FC = () => {
  const [cases, setCases] = React.useState(null);

  React.useEffect(() => {
    const { asPath } = Router;

    setCases(Cases[`${asPath.split("=")[1]}`]);
  }, []);

  return (
    <>
      {cases && (
        <CompanyCaseStyles>
          <Hero 
            imageUrl={cases.hero.imageUrl}
            logo={cases.hero.logo}
            text={cases.hero.text}
          />
          
          <div className="container col">
            {cases.case.map((c) => (
              <div className="case-item-container">
                {c.imagePosition === "left" && (
                  <>
                    <div className="block image">
                      <img src={c.imgUrl} alt="" />
                    </div>
                    <div className="block info">
                      <span className="title">{c.title}</span>
                      <p>{c.text}</p>
                    </div>
                  </>
                )}
                {c.imagePosition === "right" && (
                  <>
                    <div className="block info">
                      <span className="title">{c.title}</span>
                      <p>{c.text}</p>
                    </div>
                    <div className="block image">
                      <img src={c.imgUrl} alt="" />
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </CompanyCaseStyles>
      )}
    </>
  );
};

export default CompanyCase;
