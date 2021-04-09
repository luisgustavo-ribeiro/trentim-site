import React from 'react';
import SectionWithShape from '../components/SectionWithShape';

import { solutionsData } from "../assets/data/solutions";

const Solutions = () => {
  return (
    <div>
      {solutionsData.map(item => 
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
        />
      )}
    </div>
  )
}

export default Solutions;
