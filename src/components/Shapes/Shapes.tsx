import React from "react";
import IShapesProps from "../../interfaces/IShapesProps";
import { ShapesStyles } from "./ShapesStyles";

const Shapes: React.FC<IShapesProps> = (props: IShapesProps) => {
  return (
    <ShapesStyles>
      <div
        className={`shape-inline shape ${props.inlineShapeName}`}
        style={{
          height: props.shapesSize ? props.shapesSize : "50px",
          width: props.shapesSize ? props.shapesSize : "50px",
          borderColor: props.inlineShapeColor,
        }}
      ></div>
      <div
        className={`shape-filled shape ${props.filledShapeName}`}
        style={{
          height: props.shapesSize ? props.shapesSize : "50px",
          width: props.shapesSize ? props.shapesSize : "50px",
          borderColor: props.filledShapeColor,
          backgroundColor: props.filledShapeColor,
        }}
      ></div>
    </ShapesStyles>
  );
};

export default Shapes;
