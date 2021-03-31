export interface IUsedTechs {
  techName: string;
  techLogo: string;
}

export interface ICompanyCaseItems {
  imageUrl: string;
  imagePosition: string;
  title: string;
  text: string;
  usedTechs: IUsedTechs[];
}

export default interface ICompanyCaseProps {
  item: ICompanyCaseItems;
}