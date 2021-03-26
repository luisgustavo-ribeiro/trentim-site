export interface ISectionWithShapeItems {
  sectionBGColor: any;
  shapeName: string;
  shapeColor: any;
  shapeZIndex: number;
  image: string;
  imagePosition: "left" | "right";
  imageScale?: number;
  imageX?: string,
  imageY?: string,
  imageZIndex: number;
  title: string;
  titleColor: any;
  text: string;
  textColor: string;
}

export default interface ISectionWithShapeProps {
  item: ISectionWithShapeItems;
}
