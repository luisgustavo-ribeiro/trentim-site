export interface ISectionWithShapeItems {
  sectionBGColor: any;
  shapeName: string;
  shapeColor: any;
  shapeZIndex: number;
  mediaUrl: string;  
  imageScale?: number;
  imageX?: string,
  imageY?: string,
  title: string;
  titleColor: any;
  text: string;
  textColor: string;
}

export default interface ISectionWithShapeProps {
  item: ISectionWithShapeItems;
  mediaType: "img" | "video";
  mediaPosition: string | "left" | "right";
  shapePosition: string | "left" | "right";
}
