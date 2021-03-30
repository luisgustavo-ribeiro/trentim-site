export interface ISectionCasesItem {
  bgColor: string;
  logoUrl: string;
  title: string;
  titleColor: string;
  text: string;
  textColor: string;
  imgUrl: string;
  imgAlignment: string | "left" | "right";
  imgPositionX: string;
  imgPositionY: string;
  imgScale: number;
}

export default interface ISectionCasesProps {
  item: ISectionCasesItem;
}