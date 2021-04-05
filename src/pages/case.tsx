import React from "react";
import Router from "next/router";
import { Cases } from "../assets/data/cases";
import { CompanyCaseStyles } from "../styles/pages/CompanyCaseStyles";
import Hero from "../components/Hero";
import ContactForm from "../components/ContactForm";

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
          </div>
        
          <section id="contact">
            <div className="container">
              <ContactForm />
            </div>
          </section>
        </CompanyCaseStyles>
      )}
    </>
  );
};

export default CompanyCase;
