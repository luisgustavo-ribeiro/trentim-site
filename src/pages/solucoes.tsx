import React from 'react';
import SectionWithShape from '../components/SectionWithShape';
import { SolutionsPage } from "../styles/pages/SolutionsPageStyles";
import Hero from '../components/Hero';

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

      {solutionsData.map(item => 
        <>
          {item.box &&
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
          }

          {!item.box &&
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
          }
        </>
      )}
    </SolutionsPage>
  )
}

export default Solutions;
