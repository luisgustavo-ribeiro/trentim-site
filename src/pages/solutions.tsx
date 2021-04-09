import React from 'react';
import SectionWithShape from '../components/SectionWithShape';
import { SolutionsPage } from "../styles/pages/SolutionsPageStyles";

import { solutionsData } from "../assets/data/solutions";

const Solutions = () => {
  return (
    <SolutionsPage>
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
