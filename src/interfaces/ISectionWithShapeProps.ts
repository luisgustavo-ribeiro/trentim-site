export interface ISectionWithShapeItems {
  sectionBGColor?: any;
  shapeName?: string;
  shapeColor?: any;
  shapeZIndex?: number;
  mediaUrl: string;  
  imageScale?: number;
  imageScaleMobile?: number;
  imageX?: string,
  imageY?: string,
  imageXMobile?: string,
  imageYMobile?: string,
  title?: string;
  subtitle?: string;
  titleColor?: any;
  text?: string;
  textColor?: string;
}

export default interface ISectionWithShapeProps {
  item: ISectionWithShapeItems;
  mediaType: "img" | "video";
  shapeType: "single" | "multiple";
  mediaPosition: string | "left" | "right";
  shapePosition?: string | "left" | "right";
  inlineShapeName?: string;
  filledShapeName?: string;
  inlineShapeColor?: string;
  filledShapeColor?: string;
  shapesSize?: string;
}
