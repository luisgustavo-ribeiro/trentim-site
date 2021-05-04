import React from "react";
import SectionWithShape from "../components/SectionWithShape";
import { SolutionsPage } from "../styles/pages/SolutionsPageStyles";
import Hero from "../components/Hero";
import BANNER_BG from "../assets/img/quadrados/home/hero.png";

import { solutionsData } from "../assets/data/solutions";

import HERO_BG from "../assets/img/pages/solucoes/banner.jpg";

const Solutions = () => {
  return (
    <SolutionsPage>
      <Hero
        imageUrl={HERO_BG}
        title="seja a transformação!"
        text="um portfólio de soluções completo para transformar a sua gestão de projetos e garantir um futuro mais ágil e eficiente"
        imagePositionX="center"
        imagePositionY="center"
      />

      {solutionsData.map((item) => (
        <>
          {item.box && (
            <SectionWithShape
              item={item}
              shapeType="multiple"
              mediaType="img"
              mediaPosition={item.mediaPosition}
              inlineShapeName={item.inlineShapeName}
              filledShapeName={item.filledShapeName}
              inlineShapeColor={item.inlineShapeColor}
              filledShapeColor={item.filledShapeColor}
              shapesSize={item.shapesSize}
              box={item.box}
            />
          )}

          {!item.box && (
            <SectionWithShape
              item={item}
              shapeType="multiple"
              mediaType="img"
              mediaPosition={item.mediaPosition}
              inlineShapeName={item.inlineShapeName}
              filledShapeName={item.filledShapeName}
              inlineShapeColor={item.inlineShapeColor}
              filledShapeColor={item.filledShapeColor}
              shapesSize={item.shapesSize}
              box={item.box}
            />
          )}
        </>
      ))}

      <section id="solutions-banner">
        <div className="container">
          <div className="sq-details">
            <div className="detail">
              <img src={BANNER_BG} />
            </div>
          </div>
          <p>
          <p>Seja qual for a sua necessidade, fale com nosso</p>
          <p>time de soluções e comece já a transformação</p>
          <p>da gestão de projetos em sua organização.</p>
          </p>
        </div>
      </section>
    </SolutionsPage>
  );
};

export default Solutions;
